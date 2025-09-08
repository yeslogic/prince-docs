import React from "react";

/**
 * @param {undefined | string} desc - an optional description of the documented item that may contain HTML tags or just a string
 * @param {string} name - e.g. `"getPrinceBoxes"`, `"Function"`, `"HTMLInputElement"`
 */
export function DescDetails({ desc, name }) {
  const showDesc = desc || /^HTML/.test(name);
  if (!showDesc) return null;

  return desc ? (
    <div className="desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
  ) : (
    <div className="desc">
      Represents an HTML{" "}
      <em>
        {name
          .replace(/^HTML/, "")
          .replace(/Element$/, "")
          .replace(/([A-Z][a-z])/g, function (match) {
            return " " + match;
          })
          .toLowerCase()}
      </em>{" "}
      element
    </div>
  );
}
