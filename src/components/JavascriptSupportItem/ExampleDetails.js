import React from "react";

/**
 * @param {Object} props - the props for the component
 * @param { string } props.example - an example that may contain new lines (\n)
 * @param { undefined | string | number | boolean } props.exampleReturn - an example of a returned value; either undefined or JSON data that currently only contains number or boolean but could contain a string
 */
export function ExampleDetails({ example, exampleReturn }) {
  return (
    <div className="example">
      <div className="programlisting">
        <pre className="example level">
          {example}
          {exampleReturn && (
            <div className="example-return">
              {JSON.stringify(exampleReturn)}
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}
