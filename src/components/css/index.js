import { useMemo } from "react";
import cssPropsHtml from "./_cssPropsHtml";
import useHashDetails from "../../components/useHashDetails";
import { toggleAllItems } from "../../components/toggleAllItems";

function CssProperties() {
  // This prevents *other* sections closing when the URL hash changes on hash-link clicks and the page re-renders:
  const memoizedCssPropsHtml = useMemo(
    () => ({
      __html: cssPropsHtml
    }),
    [cssPropsHtml]
  );

  useHashDetails();

  const toggleAllCSS = (event) =>
    toggleAllItems(event, "prop-list", "toggle-css");

  return (
    <div>
      <div>
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
