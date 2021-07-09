import React from 'react';
import clsx from 'clsx';
import ScriptTag from 'react-script-tag';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../index.module.css';

import JavascriptSupportItem from '../../components/JavascriptSupportItem';
import std from '/js/std';
import stdAnnotated from '/js/std-annotated';


function JsSupport() {
    return (


<div>
<ScriptTag type="text/javascript" src="/js/shiftWindow.js" />
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

  <div className="js-overview level" id="js-support-table">
  <JavascriptSupportItem
    path={['window']}
    name="window"
    uaObject={window}
    desc="The global object"
    ext={null}
    dumpedPropertyList={std}
    open={true}
    annotations={stdAnnotated}
  />


  </div>
</div>
</div>

    );
  }

export default JsSupport;
