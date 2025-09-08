import React from "react";

/**
 * @param {undefined | { type: string, name?: string, desc?: string }[]} args - the list of arguments the documented item takes
 */
export function ArgsDetails({ args }) {
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
