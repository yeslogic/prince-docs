import { useEffect, useMemo } from "react";
import cssPropsHtml from "./_cssPropsHtml";

function openDetails() {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.substring(1); // Remove the '#' from the hash
    const element = document.getElementById(id);
    if (element) {
      let parentDetails = element.parentNode;
      while (parentDetails && parentDetails.tagName !== "DETAILS") {
        parentDetails = parentDetails.parentNode;
      }
      if (parentDetails) {
        parentDetails.setAttribute("open", "");
        element.scrollIntoView(); // This is necessary to scroll to IDs inside collapsed `details` elements over a slow connection
      }
    }
  }
}

function CssProperties() {
  // This prevents *other* sections closing when the URL hash changes on hash-link clicks and the page re-renders:
  const memoizedCssPropsHtml = useMemo(
    () => ({
      __html: cssPropsHtml,
    }),
    [cssPropsHtml]
  );

  useEffect(() => {
    // On page load/after first render, if there's a hash in the URL, open that id's parent `details` element:
    openDetails();

    // On "hashchange"/click of hash-links, open the corresponding id's parent `details` element:
    window.addEventListener("hashchange", openDetails);

    // When the css-props component unmounts, remove the hashchange event listener:
    return () => {
      window.removeEventListener("hashchange", openDetails);
    };
  }, []);

  const toggleAllCSS = (event) => {
    const propListEl = document.getElementById("prop-list");
    const allDetails = propListEl.getElementsByTagName("details");
    const toggleId = "toggle-css";
    const toggleLink = document.getElementById(toggleId);
    if (toggleLink.hasAttribute("open") == false) {
      for (let i = 0; i < allDetails.length; i++) {
        allDetails[i].setAttribute("open", "");
        toggleLink.setAttribute("open", "");
      }
    } else if (toggleLink.hasAttribute("open") == true) {
      for (let i = 0; i < allDetails.length; i++) {
        allDetails[i].removeAttribute("open");
        toggleLink.removeAttribute("open");
      }
    }
    event.preventDefault();

    return false;
  };

  return (
    <div>
      <div>
        <p>
          Below are all of the CSS properties supported by Prince. For their
          precise definitions please refer to the CSS specifications.
        </p>
        <p id="ext-props">
          The properties marked with an asterisk (<b>*</b>) and a darker
          background color shade are Prince extensions, while the extension
          values of a standard property are highlighted with a{" "}
          <span className="ext">light grey background</span>. Besides the
          standard <code>-prince-</code> prefix, Prince also accepts{" "}
          <code>prince-</code> as a vendor prefix for Prince-specific CSS
          properties.
        </p>
        <p id="dep-props">
          The <span className="dep">properties with a line-through</span> are
          deprecated properties, support might be removed in a future Prince
          version.
        </p>
        <p>
          For the values, the grammar draws on the{" "}
          <a href="https://www.w3.org/TR/css3-values/">
            CSS Values and Units Module Level 3
          </a>{" "}
          specification. A short explanation of the signs:
        </p>
        <ul>
          <li>
            A bar (<b>|</b>) separates two or more <em>alternatives</em>:
            exactly one of them must occur.
          </li>
          <li>
            A double bar (<b>||</b>) separates two or more <em>options</em>: one
            or more of them must occur, in any order.
          </li>
          <li>
            A double ampersand (<b>&amp;&amp;</b>) separates two or more{" "}
            <em>components</em>, all of which must occur, in any order.
          </li>
          <li>
            Square brackets (<b>[ ]</b>) are only used for grouping.
          </li>
          <li>
            An asterisk (<b>*</b>) indicates that the preceding item occurs zero
            or more times.
          </li>
          <li>
            A plus (<b>+</b>) indicates that the preceding item occurs one or
            more times.
          </li>
          <li>
            A question mark (<b>?</b>) indicates that the preceding item is
            optional (occurs zero or one times).
          </li>
          <li>
            A hash mark (<b>#</b>) indicates that the preceding item occurs one
            or more times, separated by comma tokens.
          </li>
          <li>
            A comma-separated pair of numbers in curly braces (
            <b>
              {"{"}
              <i>A</i>,<i>B</i>
              {"}"}
            </b>
            ) indicates that the preceding item occurs at least <i>A</i> and at
            most <i>B</i> times.
          </li>
        </ul>
        <p>
          Prince also supports the two special keywords <code>initial</code>,{" "}
          <code>inherit</code>, and <code>unset</code> on all properties.
        </p>
        <p className="toggle">
          <a href="#" onClick={toggleAllCSS} id="toggle-css">
            Toggle (open/close) all properties
          </a>
        </p>
        <div dangerouslySetInnerHTML={memoizedCssPropsHtml}></div>
      </div>
    </div>
  );
}

export default CssProperties;
