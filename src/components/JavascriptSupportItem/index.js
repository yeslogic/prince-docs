import React from "react";
import clsx from "clsx";
import { ExampleDetails } from "./ExampleDetails";
import { ArgsDetails } from "./ArgsDetails";
import { ReturnsDetails } from "./ReturnsDetails";
import { ArgsList } from "./ArgsList";
import { DescDetails } from "./DescDetails";
import { UrlDetails } from "./UrlDetails";
import { TypeDetails } from "./TypeDetails";
import { NameDetails } from "./NameDetails";

// some things we ignore..
const BLOCKLIST = ["constructor", "writeln"];

const generatedFields = ["name", "__princetype__"];
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
  "dep"
];
const ignoreFields = [
  ...new Set([...generatedFields, ...handWrittenAnnotations])
];

// We use three sources of information:
// - a data structure dumped from Prince listing what properties/objects/
//   methods are supported and their types (`__princetype__`)
// - a data structure similar to the above but with type information for
//   arguments and properties annotated with human comments and even short
//   examples and (we should aim to make sure the Prince-specific parts in
//   particular are described)
//
// Finally, the script also infers some details from item names, and can infer more

/**
 * @param {Object} props - the props for the component
 * @param {string[]} props.path - e.g. `[ "window", "BoxInfo", "prototype", "marginTop" ]`
 * @param {string} props.name - e.g. "marginBottom", "prototype", "NaN", "undefined", "eval", "Prince", "PDF"
 * @param {null | string} props.princetype - `null` or a type as a string e.g. `"undefined"`, `"function"`, `"object"`
 * @param {undefined | string} props.desc - e.g. `"The global object"`, `"See <a href='/doc/javascript#the-prince-object'>The Prince Object</a>."`
 * @param {(null|Array)} props.properties - An optional array containing properties.
 * @param {string} props.properties[0] - The item name e.g. `"JSON"`, `"stringify"`
 * @param {Object} props.properties[1] - An object with string keys and values that can be either string or `null`.
 * @param {string|null} props.properties[1].key - a generated field, an annotation, or an actual property of the JavaScript feature e.g. `"name"`, `"__princetype__"`, `"exampleReturn"`, `"skewX"`, `"forEach"`
 * @param {undefined | { type: string, name: string, desc?: string }[]} props.args - the "arguments" where `desc` may be HTML or string e.g. `[{ type: "boolean" }]`, `[{ name: "string", desc: "String to unescape", type: "string" }]`
 * @param {undefined | string} props.returns - e.g. `"boolean"`, `"number"`, `"function"`, `"string"`, `"array of child boxes"`, `"A list of JavaScript objects called <a href='/doc/javascript#the-box-tracking-api'>boxes</a>."`
 * @param {undefined | string} props.example - e.g. `"isNaN(parseInt('hello'))"`
 * @param {undefined | string | boolean | number} props.exampleReturn - e.g. `1.5`, `50`, `true`
 * @param {undefined | string} props.url - e.g. `"property"` where there is a matching CSS property
 * @param {undefined | string} props.ext - e.g. `"ext"` for Prince extensions
 * @param {undefined | string} props.dep - e.g. `"dep"` for deprecated objects, methods and properties
 * @param {undefined | string} props.hash - just the URL hash without "#" e.g. `"window.Object.defineProperty"`
 * @param {undefined | boolean} props.open - set `true` to open the section by default
 */
function JavascriptSupportItem({
  path,
  name,
  princetype,
  desc,
  properties,
  args,
  returns,
  example,
  exampleReturn,
  url,
  ext,
  dep,
  hash,
  open
}) {
  if (BLOCKLIST.includes(name)) {
    return null;
  }

  // The "#.window" exception is just to match historical behaviour and preserve existing links on the Internet to this hash:
  const isGlobalWindow = name === "window" && path.length === 1;
  const pathStr = isGlobalWindow ? ".window" : path.join(".");
  const openAttribute = open || (hash && hash.indexOf(pathStr) > -1);
  const extClass = ext || /prince/i.test(name) ? "ext" : null;
  const depClass = dep ? "dep" : null;
  const isFunctionProperty = princetype === "function" || args;

  return (
    <details
      className={clsx("level", {
        ext: extClass,
        dep: depClass,
        globalWindow: isGlobalWindow
      })}
      open={openAttribute}
    >
      <summary id={pathStr}>
        <NameDetails name={name}>
          {isFunctionProperty && <ArgsList args={args} />}
        </NameDetails>
        <a href={`#${pathStr}`} className="hash-link"></a>
      </summary>
      <div>
        <TypeDetails princetype={princetype} />
        {url && <UrlDetails property={name} />}
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

          // Skip args if subProperties.arguments is the Function.prototype.arguments object:
          const subPropertiesArgs = Array.isArray(subProperties.arguments)
            ? subProperties.arguments
            : undefined;

          return (
            <JavascriptSupportItem
              key={subPath.join(".")}
              path={subPath}
              name={itemName}
              princetype={subProperties.__princetype__}
              desc={subProperties.desc}
              args={subPropertiesArgs}
              returns={subProperties.returns}
              example={subProperties.example}
              exampleReturn={subProperties.exampleReturn}
              url={subProperties.url}
              ext={subProperties.ext}
              dep={subProperties.dep}
              properties={subPropertyList.length < 1 ? null : subPropertyList}
              hash={hash}
            />
          );
        })}
    </details>
  );
}

export default JavascriptSupportItem;
