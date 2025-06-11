import React from 'react';
import clsx from 'clsx';
import ScriptTag from 'react-script-tag';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import BrowserOnly from '@docusaurus/BrowserOnly';
import JavascriptSupportItem from '../../components/JavascriptSupportItem';
import std from '/js/std';
import stdAnnotated from '/js/std-annotated';


function JsSupport() {
    return (


<div>
<ScriptTag type="text/javascript" src="/js/shiftWindow.js" />
<div className="markdown">
  <div className="js-overview level" id="js-support-table">
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
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
      )}
    </BrowserOnly>


  </div>
</div>
</div>

    );
  }

export default JsSupport;
