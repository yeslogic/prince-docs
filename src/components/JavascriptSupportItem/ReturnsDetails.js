import React from "react";

/**
 * @param {Object} props - the props for the component
 * @param {string} props.returns - may contain HTML tags or just string
 */
export function ReturnsDetails({ returns }) {
  return (
    <div
      className="returns level"
      dangerouslySetInnerHTML={{ __html: returns }}
    ></div>
  );
}
