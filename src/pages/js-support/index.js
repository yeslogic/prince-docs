import React from "react";
import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
import ScriptTag from "react-script-tag";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import JavascriptSupportItem from "../../components/JavascriptSupportItem";
import stdData from "./_std-data.json";

function JsSupport() {
  const location = useLocation();
  const hash = location.hash ? location.hash.substring(1) : undefined;
  const properties = Object.entries(stdData).filter(
    (entry) => !["name", "type", "desc"].includes(entry[0])
  );

  return (
    <div>
      <ScriptTag type="text/javascript" src="/js/shiftWindow.js" />
      <div className="markdown">
        <p>
          Prince supports most of ECMAScript 5th edition, but not strict mode.
          Later editions of ECMAScript are not supported.
        </p>
        <p>
          The following table shows supported JavaScript objects, methods and
          properties. For more details, see also{" "}
          <a href="/doc/javascript#js-prince">JavaScript in Prince</a>.
        </p>
        <p>
          * objects, methods and properties marked with an asterisk are Prince
          extensions.
        </p>

        <div className="js-overview level" id="js-support-table">
          <JavascriptSupportItem
            path={["window"]}
            name="window"
            type={stdData.type}
            desc={stdData.desc}
            open={true}
            properties={properties}
            hash={hash}
          />
        </div>
      </div>
    </div>
  );
}

export default JsSupport;
