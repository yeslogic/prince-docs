import React from "react";

/**
 * @param {string} returns - may contain HTML tags or just string
 */
export function ReturnsDetails({ returns }) {
  return (
    <div
      className="returns level"
      dangerouslySetInnerHTML={{ __html: returns }}
    ></div>
  );
}
