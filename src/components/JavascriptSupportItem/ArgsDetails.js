import React from "react";

/**
 * @param {Object} props - the props for the component
 * @param {undefined | { type: string, name?: string, desc?: string }[]} props.args - the list of arguments the documented item takes where desc may be a string or HTML
 */
export function ArgsDetails({ args }) {
  return args ? (
    <ul className="arguments">
      {args.map((item, i) => (
        <li className="argument" key={`${item.name}-${i}`}>
          <div></div>
          {item.name && <div className="name level">{item.name}</div>}
          <div className="type">{item.type}</div>
          {item.desc && (
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></div>
          )}
        </li>
      ))}
    </ul>
  ) : null;
}
