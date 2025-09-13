import React from "react";

/**
 * @param {Object} props - the props for the component
 * @param {undefined | { type: string, name?: string, desc?: string }[]} props.args - the list of arguments the documented item takes
 */
export function ArgsList({ args }) {
  // Note: if args is undefined (e.g. for parseFloat()), then we just add the span to make "()" appear
  return (
    <span className="argslist">
      {args ? args.map((item) => item.name).join(", ") : null}
    </span>
  );
}
