import React from "react";

/**
 * @param {Object} props - the props for the component
 * @param {string} props.property - e.g. `"alignContent"`, `"cssFloat"`, `"princeBackgroundImageResolution"`
 */
export function UrlDetails({ property }) {
  const cssProperty =
    property === "cssFloat"
      ? "float"
      : property.replace(/([A-Z])/g, "-$1").toLowerCase();
  const cssPropertyLabel =
    property.indexOf("prince") > -1 ? `-${cssProperty}` : cssProperty;

  return (
    <div className="url-property">
      See the property{" "}
      <a href={`/doc/css-props#prop-${cssProperty}`}>{cssPropertyLabel}</a>.
    </div>
  );
}
