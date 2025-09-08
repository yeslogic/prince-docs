import React from "react";

/**
 *
 * @param {string} name - e.g. "marginBottom", "prototype", "NaN", "undefined", "eval", "Prince", "PDF"
 * @param {React.ReactNode} children - React children including the `<ArgsList />`
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
