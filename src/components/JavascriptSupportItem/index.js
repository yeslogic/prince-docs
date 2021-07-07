import React from 'react';
import clsx from 'clsx';
import styles from './JavascriptSupportItem.module.css';

function JavascriptSupportItem({open, id, name, desc, ext, subProperties, theObject, annotations}) {
  if (['constructor', 'write', 'writeln'].includes(name)) {return null;}

  console.log(subProperties)
  open = open || location.hash.indexOf(id) > -1;
  return (
    <details className={clsx('level', {ext})} open={open}>
      <summary id={id}>
        <code>
          <b className="name">{name}</b>
        </code>
        <a href={`#${id}`} className="self-link"></a>
      </summary>
      <div>
        <span className="type">{typeof theObject}</span>
        {desc && <div className="desc">{desc}</div>}
      </div>
      {
        subProperties && Object.keys(subProperties).map(itemName => {
          let details = subProperties[itemName];
          let ext = /(prince|boxinfo|pdf)/i.test(itemName);
          let subId = `${id}.${itemName}`;
          let open = location.hash.indexOf(subId) > -1;
          return (
            <JavascriptSupportItem
              key={subId}
              id={subId}
              open={open}
              name={itemName}
              theObject={theObject[itemName]}
              subProperties={details}
              ext={ext}
            />
          );
        })
      }
    </details>
  )
}

export default JavascriptSupportItem;
