import React from "react";
import clsx from "clsx";
import styles from "./JavascriptSupportItem.module.css";
// some things we ignore..
const BLOCKLIST = ["constructor", "write", "writeln", "prototype"];

// We use three sources of information:
// - a data structure dumped from the engine listing what properties/objects/methods are supported
// - a data structure similar to the above but annotated with human comments and even short examples
//   (we should aim to make sure the Prince-specific parts in particular are described)
// - the engine this script runs in is queried directly for type info
//
// Finally, the script also infers some details from item names, and can infer more

function JavascriptSupportItem({
  name,
  path,
  desc,
  ext,
  open,
  dumpedPropertyList,
  uaObject,
  annotations,
}) {
  if (BLOCKLIST.includes(name)) {
    return null;
  }
  let pathStr = path.join(".");
  open = open || location.hash.indexOf(pathStr) > -1;
  let theAnnotation = findAnnotation(annotations, path) || {};
  desc = desc || theAnnotation.desc;

  if (!desc && /^HTML/.test(name)) {
    desc =
      "Represents an HTML <em>" +
      name
        .replace(/^HTML/, "")
        .replace(/Element$/, "")
        .replace(/([A-Z][a-z])/g, function (match) {
          return " " + match;
        })
        .toLowerCase() +
      "</em> element";
  }

  ext = ext || theAnnotation.ext || /prince/i.test(name) ? "ext" : null;
  let type = theAnnotation.type;
  if (uaObject) {
    try {
      if (!type) {
        type = typeof uaObject;
      }
    } catch (e) {}
  }

  return (
    <details className={clsx("level", { ext })} open={open}>
      <summary id={pathStr}>
        <code>
          <b className="name">{name}</b>
          {(type === "function" || theAnnotation.arguments) && (
            <span className="argslist">
              {theAnnotation.arguments
                ? theAnnotation.arguments.map((item) => item.name).join(", ")
                : null}
            </span>
          )}
        </code>
        <a href={`#${pathStr}`} className="self-link"></a>
      </summary>
      <div>
        <span className="type">{type}</span>
        {desc && (
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
        )}
        {theAnnotation.arguments && (
          <ul class="arguments">
            {theAnnotation.arguments.map((item) => (
              <li class="argument">
                <div></div>
                <div class="name level">{item.name}</div>
                <div class="type">{item.type}</div>
                <div class="desc">{item.desc}</div>
              </li>
            ))}
          </ul>
        )}
        {theAnnotation.returns && (
          <div class="returns level" dangerouslySetInnerHTML={{__html:theAnnotation.returns}}></div>
        )}

        {theAnnotation.example && (
          <div class="example">
            <div class="programlisting">
              <pre class="example level">
                {theAnnotation.example}
                {theAnnotation.exampleReturn && (
                  <div class="example-return">
                    {JSON.stringify(theAnnotation.exampleReturn)}
                  </div>
                )}
              </pre>
            </div>
          </div>
        )}
      </div>
      {dumpedPropertyList &&
        Object.keys(dumpedPropertyList).map((itemName) => {
          let subPropertyList = dumpedPropertyList[itemName];
          let subPath = path.concat(itemName);
          let theSubObject = null;
          try {
            theSubObject = uaObject[itemName];
          } catch (e) {}

          return (
            <JavascriptSupportItem
              key={subPath.join(".")}
              path={subPath}
              name={itemName}
              dumpedPropertyList={subPropertyList}
              uaObject={theSubObject}
              annotations={annotations}
            />
          );
        })}
    </details>
  );
}

function findAnnotation(annotations, path) {
  let item = annotations;
  let i = path[0] === "window" ? 1 : 0;
  for (; i < path.length; i++) {
    if (path[i] && item && item[path[i]]) {
      item = item[path[i]];
    }
  }
  return item === annotations ? null : item;
}

export default JavascriptSupportItem;
