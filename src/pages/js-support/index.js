import React from 'react';
import clsx from 'clsx';
import ScriptTag from 'react-script-tag';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../index.module.css';

function JsSupport() {
    return (


<div>
<ScriptTag type="text/javascript" src="/js/shiftWindow.js" />
<ScriptTag type="text/javascript" src="/js/std.js" />
<ScriptTag type="text/javascript" src="/js/std-annotated.js" />
<div className="markdown">
  <p>
    Prince supports most of ECMAScript 5th edition, but not
    strict mode. Later editions of ECMAScript are not
    supported.
  </p>
  <p>
    The following table shows supported JavaScript objects,
    methods and properties. For more details, see also{" "}
    <a href="/doc/javascript#js-prince">
      JavaScript in Prince
    </a>
    .
  </p>
  <p>
    * objects, methods and properties marked with an asterisk
    are Prince extensions.
  </p>
  <a href="#" onClick={() => toggleAllDetails('js')} id="toggle-js">
    Toggle (open/close) all properties
  </a>
  <div className="js-overview level" id="js-support-table"></div>
</div>
<ScriptTag type="text/javascript" src="/js/buildjsdoc.js" />
</div>

    );
  }

export default JsSupport;
