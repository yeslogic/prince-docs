import React from "react";
import clsx from "clsx";
import styles from "./JavascriptSupportItem.module.css";

// some things we ignore..
const BLOCKLIST = ["constructor", "write", "writeln"];

const generatedFields = ["name", "type"];
const handWrittenAnnotations = [
  "desc",
  "arguments",
  "name", // Hand-written on arguments objects
  "desc", // Hand-written on arguments objects
  "type", // Hand-written on arguments objects
  "returns",
  "example",
  "exampleReturn",
  "url",
  "ext",
  "dep",
];
const ignoreFields = [
  ...new Set([...generatedFields, ...handWrittenAnnotations]),
];

// We use three sources of information:
// - a data structure dumped from Prince listing what properties/objects/
//   methods are supported and their types
// - a data structure similar to the above but with type information for
//   arguments and properties annotated with human comments and even short
//   examples and (we should aim to make sure the Prince-specific parts in
//   particular are described)
//
// Finally, the script also infers some details from item names, and can infer more

function NameDetails({ name, children }) {
  return (
    <code>
      <b className="name">
        {name}
        {children}
      </b>
    </code>
  );
}

// { type : undefined | string | {type: "string" | "function", returns?: string, [property: string]: any}}
function TypeDetails({ type }) {
  // If the typeof type is an object, then it's a JavaScript property called "type" such as the HTMLInputElement's `type` attribute
  return typeof type === "string" ? <span className="type">{type}</span> : null;
}

// { desc: undefined | string, name: string } - if desc is a string, it may contain HTML tags or just a string
function DescDetails({ desc, name }) {
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

// undefined | { type: string, name: string, desc?: string }[]
function ArgsList({ args }) {
  // Note: args is undefined (e.g. for parseFloat()), then we just add the span to make "()" appear
  return (
    <span className="argslist">
      {args ? args.map((item) => item.name).join(", ") : null}
    </span>
  );
}

// undefined | { type: string, name?: string, desc?: string }[]
function ArgsDetails({ args }) {
  return args ? (
    <ul className="arguments">
      {args.map((item, i) => (
        <li className="argument" key={`${item.name}-${i}`}>
          <div></div>
          {item.name && <div className="name level">{item.name}</div>}
          <div className="type">{item.type}</div>
          {item.desc && <div className="desc">{item.desc}</div>}
        </li>
      ))}
    </ul>
  ) : null;
}

// { returns: string } - may contain HTML tags or just string
function ReturnsDetails({ returns }) {
  return (
    <div
      className="returns level"
      dangerouslySetInnerHTML={{ __html: returns }}
    ></div>
  );
}

// { example: string, exampleReturn: undefined | string | number | boolean } - example is a string that may contain new lines (\n) and exampleReturn is either undefined or JSON data that currently only contains number or boolean but could contain a string
function ExampleDetails({ example, exampleReturn }) {
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

function JavascriptSupportEntry({
  // {string[]} - e.g. [ "window", "BoxInfo", "prototype", "marginTop" ]
  path,
  // {string} - e.g. "marginBottom", "prototype", "NaN", "undefined", "eval", "Prince", "PDF"
  name,
  // {undefined | string | Object} - e.g. undefined, "function", "object", { type: "string"}, { type: "function", returns: '"BODY" | "COLUMN" | "FLEXLINE" | "FOOTNOTES" | "FLOATS" | "BOX" | "LINE" | "SPAN" | "TEXT" | "SVG" | "IMAGE"' }
  type,
  // {undefined | string} - e.g. "The global object", "See <a href='/doc/javascript#the-prince-object'>The Prince Object</a>."
  desc,
  // {null | [itemName, {<property>: string}}[]} - each property might be a generated field, an annotation, or an actual property of the JavaScript feature
  properties,
  // {undefined | { type: string, name: string, desc?: string }[]} - e.g. [{ type: "boolean" }], [{ name: "string", desc: "String to unescape", type: "string" }]
  args,
  // {undefined | string}
  returns,
  // {undefined | string}
  example,
  // {undefined | string}
  exampleReturn,
  // {undefined | string} - e.g. "property"
  url,
  // {undefined | string} - e.g. "ext"
  ext,
  // {undefined | string} - just the URL hash without "#" e.g. "window.Object.defineProperty"
  hash,
  // {undefined | boolean} - set `true` to open the section by default
  open,
}) {
  if (BLOCKLIST.includes(name)) {
    return null;
  }

  const pathStr = path.join(".");
  const openAttribute = open || (hash && hash.indexOf(pathStr) > -1);
  const extClass = ext || /prince/i.test(name) ? "ext" : null;
  const isFunctionProperty = type === "function" || args;

  return (
    <details className={clsx("level", { ext: extClass })} open={openAttribute}>
      <summary id={pathStr}>
        <NameDetails name={name}>
          {isFunctionProperty && <ArgsList args={args} />}
        </NameDetails>
        <a href={`#${pathStr}`} className="hash-link"></a>
      </summary>
      <div>
        <TypeDetails type={type} />
        <DescDetails desc={desc} name={name} />
        <ArgsDetails args={args} />
        {returns && <ReturnsDetails returns={returns} />}
        {example && (
          <ExampleDetails example={example} exampleReturn={exampleReturn} />
        )}
      </div>
      {!!properties &&
        properties.map(([itemName, subProperties]) => {
          let subPropertyList = Object.entries(subProperties).filter(
            (subProperty) => {
              if (
                subProperty[0] === "type" &&
                typeof subProperty[1] !== "string"
              ) {
                // For example, HTMLInputElement's `type` property:
                return true;
              }
              if (
                subProperty[0] === "name" &&
                typeof subProperty[1] !== "string"
              ) {
                // For example, HTMLInputElement's `name` property:
                return true;
              }

              const isIgnoredField = ignoreFields.includes(subProperty[0]);
              return !isIgnoredField;
            }
          );
          let subPath = path.concat(itemName);

          return (
            <JavascriptSupportEntry
              key={subPath.join(".")}
              path={subPath}
              name={itemName}
              type={subProperties.type}
              desc={subProperties.desc}
              args={subProperties.arguments}
              returns={subProperties.returns}
              example={subProperties.example}
              exampleReturn={subProperties.exampleReturn}
              url={subProperties.url}
              ext={subProperties.ext}
              properties={subPropertyList.length < 1 ? null : subPropertyList}
              hash={hash}
            />
          );
        })}
    </details>
  );
}

export default JavascriptSupportEntry;
