import React from "react";

/**
 *
 * @param {Object} props - the props for the component
 * @param {string} props.name - e.g. "marginBottom", "prototype", "NaN", "undefined", "eval", "Prince", "PDF"
 * @param {React.ReactNode} props.children - React children including the `<ArgsList />`
 */
export function NameDetails({ name, children }) {
  return (
    <code>
      <b className="name">
        {name}
        {children}
      </b>
    </code>
  );
}
