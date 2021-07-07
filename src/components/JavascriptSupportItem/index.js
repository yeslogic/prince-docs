import React from 'react';
import clsx from 'clsx';
import styles from './JavascriptSupportItem.module.css';
// some things we ignore..
const BLOCKLIST = ['constructor', 'write', 'writeln'];

function JavascriptSupportItem({open, id, name, desc, ext, subProperties, theObject, annotations}) {
  if (BLOCKLIST.includes(name)) {return null;}
  open = open || location.hash.indexOf(id) > -1;
  let theAnnotation = findAnnotation(annotations, id) || {};
  desc = desc || theAnnotation.desc;
  ext = ext || theAnnotation.ext || /prince/i.test(name);
  let type = theAnnotation.type;
  if (!type) {
    try {
      type = typeof theObject;
    } catch(e) {}
  }
  return (
    <details className={clsx('level', {ext})} open={open}>
      <summary id={id}>
        <code>
          <b className="name">{name}</b>
        </code>
        <a href={`#${id}`} className="self-link"></a>
      </summary>
      <div>
        <span className="type">{type}</span>
        {desc && <div className="desc">{desc}</div>}

      </div>
      {
        subProperties && Object.keys(subProperties).map(itemName => {
          let details = subProperties[itemName];
          let subId = `${id}.${itemName}`;
          return (
            <JavascriptSupportItem
              key={subId}
              id={subId}
              name={itemName}
              subProperties={details}
            />
          );
        })
      }
    </details>
  )
}

function findAnnotation(annotations, path) {
  let item = annotations;
  let parts = path.split(/\./g);
  if (parts[0] === 'window') {
    parts.shift();
  }
  console.log(parts, path)
  for (let i = 0; i < parts.length; i++) {
    console.log(parts[i], item && item[parts[i]])
    if (parts[i] && item && item[parts[i]]) {
      item = item[parts[i]];
    }
  }
  return item === annotations ? null : item;
}

export default JavascriptSupportItem;
