import React from "react";

/**
 * @param {Object} props - the props for the component
 * @param {null | string} props.princetype - `null` if we don't have a type generated from Prince, otherwise the type as a string e.g. `"boolean"`, `"function"`
 */
export function TypeDetails({ princetype }) {
  return princetype === null ? (
    // Instead of `-`, we could possibly return `null` here so it does not render this span at all:
    <span className="type"></span>
  ) : (
    <span className="type">{princetype}</span>
  );
}
