import React from 'react';
import clsx from 'clsx';
import ScriptTag from 'react-script-tag';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../index.module.css';

function CssProperties() {
    return (


<div>
<ScriptTag type="text/javascript" src="/js/shiftWindow.js" />
  <div className="markdown">
    <p>
      Below are all of the CSS properties supported by Prince.
      For their precise definitions please refer to the CSS
      specifications.
    </p>
    <p>
      * properties marked with an asterisk and a darker
      background color shade are Prince extensions, while the
      extension values of a standard property are highlighted
      with a <span className="ext">light grey background</span>.
      Besides the <code>prince-</code> prefix, Prince accepts{" "}
      <code>-prince-</code> as a vendor prefix for
      Prince-specific CSS properties to comply with validators.
    </p>
    <p>
      For the values, the grammar draws on the{" "}
      <a
        href="https://www.w3.org/TR/css3-values/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CSS Values and Units Module Level 3
      </a>{" "}
      specification - with the notable exception of the meaning
      of an asterisk (*), as explained above. A short
      explanation of the signs:
    </p>
    <ul>
      <li>
        A bar (<strong>|</strong>) separates two or more{" "}
        <em>alternatives</em>: exactly one of them must occur.
      </li>
      <li>
        A double bar (<strong>||</strong>) separates two or more{" "}
        <em>options</em>: one or more of them must occur, in any
        order.
      </li>
      <li>
        A double ampersand (<strong>&amp;&amp;</strong>)
        separates two or more <em>components</em>, all of which
        must occur, in any order.
      </li>
      <li>
        Square brackets (<strong>[ ]</strong>) are only used for
        grouping.
      </li>
      <li>
        A plus (<strong>+</strong>) indicates that the preceding
        item occurs one or more times.
      </li>
      <li>
        A question mark (<strong>?</strong>) indicates that the
        preceding item is optional (occurs zero or one times).
      </li>
      <li>
        A hash mark (<strong>#</strong>) indicates that the
        preceding item occurs one or more times, separated by
        comma tokens.
      </li>
      <li>
        A pair of numbers in curly braces, separated by two dots
        (
        <strong>
          {"{"}
          <em>A</em>..<em>B</em>
          {"}"}
        </strong>
        ) indicates that the preceding item occurs at least{" "}
        <em>A</em> and at most <em>B</em> times.
      </li>
    </ul>
    <a href="#" onClick={() => toggleAllDetails('css')} id="toggle-css">
      Toggle (open/close) all properties
    </a>
    <div id="prop-list">
      <details>
        <summary id="prop---custom-property-name">
          --custom-property-name{" "}
          <a
            href="#prop---custom-property-name"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop---custom-property-name-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>--custom-property-name: <i>declaration-value</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>nothing</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop---custom-property-name-comments">
              Comments
            </div>
            <p>
              This property family, called custom properties, is
              defined as any valid identifier that starts with
              two dashes. Custom properties are solely for use
              by authors and users; CSS will never give them a
              meaning beyond what is presented here.
            </p>
            <p className="note">
              Unlike other CSS properties, custom property names
              are case-sensitive.
            </p>
          </div>
          <div>
            <div id="prop---custom-property-name-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#custom-properties-css-variables">
                  Custom properties (CSS variables)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop---custom-property-name-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-variables-1/#defining-variables"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Custom Properties for Cascading Variables
                  Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-align-content">
          align-content{" "}
          <a href="#prop-align-content" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-align-content-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    align-content: flex-start |&nbsp;flex-end
                    |&nbsp;center |&nbsp;space-between
                    |&nbsp;space-around |&nbsp;stretch
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>stretch</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multi-line flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-align-content-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#align-content-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-align-items">
          align-items{" "}
          <a href="#prop-align-items" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-align-items-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    align-items: flex-start |&nbsp;flex-end
                    |&nbsp;center |&nbsp;baseline |&nbsp;stretch
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>stretch</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-align-items-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#align-items-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-align-self">
          align-self{" "}
          <a href="#prop-align-self" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-align-self-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    align-self: auto |&nbsp;flex-start
                    |&nbsp;flex-end |&nbsp;center
                    |&nbsp;space-between |&nbsp;space-around
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-align-self-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#align-items-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-alternate-color">
          alternate-color*{" "}
          <a
            href="#prop-alternate-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-alternate-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>alternate-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-color at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-alternate-color-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-color TestColor {"{"} alternate-color: cmyk(1, 0, 0, 0) {"}"} <br />
                  color: prince-color(TestColor)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-alternate-color-comments">
              Comments
            </div>
            <p>
              This <code>@prince-color</code> at-rule descriptor
              takes an RGB or CMYK color in any of the valid
              notations for RGB and CMYK colors, that will be
              used to display the color being defined, when the
              named color is not available. Please note that it
              cannot be RGBA or CMYKA.
            </p>
            <p>
              A color value must be specified for the rule to be
              valid.
            </p>
          </div>
          <div>
            <div id="prop-alternate-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#spot-colors">
                  Spot colors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background">
          background{" "}
          <a href="#prop-background" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-background-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background: <br />
                  &nbsp;&nbsp;&nbsp;[{" "}
                  <i>
                    <a href="#prop-background-image">
                      background-image
                    </a>
                  </i> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;
                  <i>
                    <a href="#prop-background-position">
                      background-position
                    </a>
                  </i>{" "}
                  [ /{" "}
                  <i>
                    <a href="#prop-background-size">
                      background-size
                    </a>
                  </i>{" "}
                  ]?  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;
                  <i>
                    <a href="#prop-background-repeat">
                      background-repeat
                    </a>
                  </i> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;
                  <i>
                    <a href="#prop-background-attachment">
                      background-attachment
                    </a>
                  </i> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;
                  <i>
                    <a href="#prop-background-origin">
                      background-origin
                    </a>
                  </i>{" "}
                  <i>
                    <a href="#prop-background-clip">
                      background-clip
                    </a>
                  </i>
                  ?  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;
                  <i>
                    <a href="#prop-background-color">
                      background-color
                    </a>
                  </i>{" "}
                  ]#</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>transparent</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-background-comments">Comments</div>
            <p>
              The <code>background</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-background-image">
                  background-image
                </a>
              </li>
              <li>
                <a href="#prop-background-position">
                  background-position
                </a>
              </li>
              <li>
                <a href="#prop-background-size">
                  background-size
                </a>
              </li>
              <li>
                <a href="#prop-background-repeat">
                  background-repeat
                </a>
              </li>
              <li>
                <a href="#prop-background-attachment">
                  background-attachment
                </a>
              </li>
              <li>
                <a href="#prop-background-origin">
                  background-origin
                </a>
              </li>
              <li>
                <a href="#prop-background-clip">
                  background-clip
                </a>
              </li>
              <li>
                <a href="#prop-background-color">
                  background-color
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-background-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-attachment">
          background-attachment{" "}
          <a
            href="#prop-background-attachment"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-attachment-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-attachment: scroll |&nbsp;fixed{" "}
                  <span className="ext">bleed</span>?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>scroll</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-background-attachment-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} <br />
                  &nbsp;&nbsp;background-attachment: fixed bleed; <br />
                  &nbsp;&nbsp;background-size: cover; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-background-attachment-comments">
              Comments
            </div>
            <p>
              The <code>background-attachment</code> property
              determines the origin of the coordinate system for
              background images. The default value of
              <code>scroll</code> will position background
              images based on an origin at the top-left corner
              of the padding area of the current element, while
              a value of <code>fixed</code> places the origin at
              the top-left corner of the page box.
            </p>
            <p>
              The optional <code>bleed</code> modifier allows a
              background image to cover the entire page bleed
              area when used together with
              <a href="#prop-background-size">
                background-size
              </a>
              : cover.
            </p>
            <p className="note">
              The <code>background-attachment</code> property
              only changes the origin of the coordinate system
              used to position the image; the background image
              will still only be shown within the padding area
              of the current element.
            </p>
          </div>
          <div>
            <div id="prop-background-attachment-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#background">Background</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-background-attachment-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-attachment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-color">
          background-color{" "}
          <a
            href="#prop-background-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>transparent</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-background-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-background-color-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-clip">
          background-clip{" "}
          <a
            href="#prop-background-clip"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-clip-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    background-clip: content-box
                    |&nbsp;padding-box |&nbsp;border-box
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>border-box</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-background-clip-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-clip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-image">
          background-image{" "}
          <a
            href="#prop-background-image"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-image-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-image: none |&nbsp;url(&nbsp;
                  <i>filename</i>&nbsp;)
                  |&nbsp;linear-gradient(&nbsp;...&nbsp;)
                  |&nbsp;radial-gradient(&nbsp;...&nbsp;)
                  |&nbsp;repeating-linear-gradient(&nbsp;...&nbsp;)
                  |&nbsp;repeating-radial-gradient(&nbsp;...&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-background-image-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-image"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-background-image-resolution"
        >
          background-image-resolution*{" "}
          <a
            href="#prop-background-image-resolution"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-image-resolution-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-image-resolution: <i>dpi</i>{" "}
                  |&nbsp;normal |&nbsp;auto [ , normal |&nbsp;
                  <i>dpi</i> ]?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>background image elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-background-image-resolution-comments">
              Comments
            </div>
            <p>
              This property determines the resolution of a
              background image. The value <code>normal</code>
              means 96dpi, or else the current CSS DPI setting.
              A custom DPI value can also be specified. The
              value <code>auto</code> means to check the
              original resolution of the image. One can specify
              a second value, as for example{" "}
              <code>auto, normal</code>or{" "}
              <code>auto, 300dpi</code> in order to check the
              original resolution of the image first, and to
              fall back on the second value if the image doesn't
              contain resolution information.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-background-image-resolution">
                <code>prince-background-image-resolution</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-background-image-resolution-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#image-size">
                  Image Size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-origin">
          background-origin{" "}
          <a
            href="#prop-background-origin"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-origin-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    background-origin: content-box
                    |&nbsp;padding-box |&nbsp;border-box
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>padding-box</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-background-origin-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-origin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-position">
          background-position{" "}
          <a
            href="#prop-background-position"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-position-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-position: <br />
                  &nbsp;&nbsp;&nbsp;left |&nbsp;center
                  |&nbsp;right |&nbsp;top |&nbsp;bottom |&nbsp;
                  <i>length</i> |&nbsp;<i>percent</i> <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;[ left |&nbsp;center
                  |&nbsp;right |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i> ] <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ top
                  |&nbsp;center |&nbsp;bottom |&nbsp;
                  <i>length</i> |&nbsp;<i>percent</i> ] <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;[ [ center |&nbsp;[
                  left |&nbsp;right ] [ <i>length</i>{" "}
                  <i>percent</i> ]? ] <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;&amp;&nbsp;[
                  center |&nbsp;[ left |&nbsp;right ] [{" "}
                  <i>length</i> <i>percent</i> ]? ] ]</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>top left</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-background-position-comments">
              Comments
            </div>
            <p>
              The <code>background-position</code> property
              determines the position of the background image
              relative to the top-left corner of the padding
              area of the element in which it appears.
            </p>
            <p className="note">
              The{" "}
              <a href="#prop-background-attachment">
                background-attachment
              </a>
              property can be used to change the origin relative
              to which the background image is positioned.
            </p>
          </div>
          <div>
            <div id="prop-background-position-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-repeat">
          background-repeat{" "}
          <a
            href="#prop-background-repeat"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-repeat-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-repeat: [ repeat-x |&nbsp;repeat-y
                  |&nbsp;[ repeat |&nbsp;space |&nbsp;round
                  |&nbsp;no-repeat ]{"{"}1..2{"}"} ]#</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>repeat</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-background-repeat-comments">
              Comments
            </div>
            <p>
              The <code>background-repeat</code> property
              determines whether the background image is
              repeated to cover the padding area of the current
              element with a rectangular tiling, or only
              repeated horizontally or vertically, or only drawn
              once and not repeated at all.
            </p>
          </div>
          <div>
            <div id="prop-background-repeat-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-repeat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-background-size">
          background-size{" "}
          <a
            href="#prop-background-size"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-background-size-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>background-size: [ contain |&nbsp;cover
                  |&nbsp;[ auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i> ]{"{"}1..2{"}"} ]#</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-background-size-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-background-size"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-baseline-shift">
          baseline-shift{" "}
          <a
            href="#prop-baseline-shift"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-baseline-shift-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>baseline-shift: baseline |&nbsp;sub
                  |&nbsp;super |&nbsp;<i>percent</i> |&nbsp;
                  <i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>baseline</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>inline elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-baseline-shift-comments">
              Comments
            </div>
            <p>
              The <code>baseline-shift</code> property only
              applies to SVG text elements.
            </p>
          </div>
          <div>
            <div id="prop-baseline-shift-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/text.html#BaselineShiftProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-bleed">
          bleed <a href="#prop-bleed" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-bleed-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>bleed: auto |&nbsp;[ <i>length</i> ]{"{"}1..4
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bleed-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} bleed: 10mm {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bleed-comments">Comments</div>
            <p>
              This CSS at-rule descriptor can be used to specify
              the size of the bleed area of the page when crop
              marks are enabled.
            </p>
          </div>
          <div>
            <div id="prop-bleed-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-style">Page style</a>
              </li>
              <li>
                <a href="#prop-prince-trim">prince-trim</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-bleed-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-page-3/#bleed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Paged Media Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-bookmark-label">
          bookmark-label*{" "}
          <a
            href="#prop-bookmark-label"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-bookmark-label-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>bookmark-label: none |&nbsp;<i>content</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>content()</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bookmark-label-comments">
              Comments
            </div>
            <p>
              This property is used to determine the text
              content of the PDF bookmark generated by the
              current element.
            </p>
            <p>
              Several ways of creating content are here defined
              by means of functions - the detailed explanation
              can be found in the{" "}
              <a href="/doc/gen-content#generated-content-functions">
                Generated Content Functions
              </a>
              section.
            </p>
            <p className="note">
              Even though the initial value for this property is
              <code>content()</code>, no PDF bookmark will be
              generated by default as the initial value for the{" "}
              <a href="#prop-prince-bookmark-level">
                prince-bookmark-level
              </a>
              property is <code>none</code>.
            </p>
            <p>
              See the documentation for{" "}
              <a href="/doc/prince-output#pdf-bookmarks">
                PDF Bookmarks
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-bookmark-label">
                <code>prince-bookmark-label</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-bookmark-label-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/gen-content#generated-content-functions">
                  Generated Content Functions
                </a>
              </li>
              <li>
                <a href="/doc/prince-output#bookmark-labels">
                  Bookmark labels
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-bookmark-label-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#'bookmark-label'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-bookmark-level">
          bookmark-level*{" "}
          <a
            href="#prop-bookmark-level"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-bookmark-level-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>bookmark-level: none |&nbsp;<i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bookmark-level-comments">
              Comments
            </div>
            <p>
              This property is used to determine the numeric
              level in the bookmark hierarchy of the PDF
              bookmark generated by the current element. See the
              documentation for{" "}
              <a href="/doc/prince-output#pdf-bookmarks">
                PDF Bookmarks
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-bookmark-level">
                <code>prince-bookmark-level</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-bookmark-level-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/prince-output#bookmark-levels">
                  Bookmark levels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-bookmark-level-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#'bookmark-level'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-bookmark-state">
          bookmark-state*{" "}
          <a
            href="#prop-bookmark-state"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-bookmark-state-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    bookmark-state: open |&nbsp;closed
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>open</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bookmark-state-comments">
              Comments
            </div>
            <p>
              This property is used to determine whether the
              bookmark tree item is open or closed when the PDF
              is first viewed. In this way you can close each
              chapter and hide the subsections for documents
              that are very long, or you can choose to have a
              deep bookmark tree.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-bookmark-state">
                <code>prince-bookmark-state</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-bookmark-state-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/prince-output#bookmark-levels">
                  Bookmark levels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-bookmark-state-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#'bookmark-state'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-bookmark-target">
          bookmark-target*{" "}
          <a
            href="#prop-bookmark-target"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-bookmark-target-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>bookmark-target: self |&nbsp;url(&nbsp;
                  <i>target-url</i>&nbsp;) |&nbsp;attr(&nbsp;
                  <i>target-attr</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>self</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bookmark-target-comments">
              Comments
            </div>
            <p>
              This property is used to determine the link target
              for the PDF bookmark generated by the current
              element. See the documentation for{" "}
              <a href="/doc/prince-output#pdf-bookmarks">
                PDF Bookmarks
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-bookmark-target">
                <code>prince-bookmark-target</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-bookmark-target-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#bookmark-targets">
                  Bookmark targets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border">
          border <a href="#prop-border" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border: <i>color</i> ||&nbsp;
                  <i>border-style</i> ||&nbsp;
                  <i>border-width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-comments">Comments</div>
            <p>
              The <code>border</code> property is a shorthand
              for setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-bottom-color">
                  border-bottom-color
                </a>
              </li>
              <li>
                <a href="#prop-border-bottom-style">
                  border-bottom-style
                </a>
              </li>
              <li>
                <a href="#prop-border-bottom-width">
                  border-bottom-width
                </a>
              </li>
              <li>
                <a href="#prop-border-left-color">
                  border-left-color
                </a>
              </li>
              <li>
                <a href="#prop-border-left-style">
                  border-left-style
                </a>
              </li>
              <li>
                <a href="#prop-border-left-width">
                  border-left-width
                </a>
              </li>
              <li>
                <a href="#prop-border-right-color">
                  border-right-color
                </a>
              </li>
              <li>
                <a href="#prop-border-right-style">
                  border-right-style
                </a>
              </li>
              <li>
                <a href="#prop-border-right-width">
                  border-right-width
                </a>
              </li>
              <li>
                <a href="#prop-border-top-color">
                  border-top-color
                </a>
              </li>
              <li>
                <a href="#prop-border-top-style">
                  border-top-style
                </a>
              </li>
              <li>
                <a href="#prop-border-top-width">
                  border-top-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-bottom">
          border-bottom{" "}
          <a href="#prop-border-bottom" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-bottom-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-bottom: <i>color</i> ||&nbsp;
                  <i>border-style</i> ||&nbsp;
                  <i>border-width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-bottom-comments">Comments</div>
            <p>
              The <code>border-bottom</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-bottom-color">
                  border-bottom-color
                </a>
              </li>
              <li>
                <a href="#prop-border-bottom-style">
                  border-bottom-style
                </a>
              </li>
              <li>
                <a href="#prop-border-bottom-width">
                  border-bottom-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-bottom-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-bottom-color">
          border-bottom-color{" "}
          <a
            href="#prop-border-bottom-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-bottom-color-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-bottom-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-bottom-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-bottom-color-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-bottom-style">
          border-bottom-style{" "}
          <a
            href="#prop-border-bottom-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-bottom-style-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    border-bottom-style: none |&nbsp;hidden
                    |&nbsp;solid |&nbsp;dashed |&nbsp;dotted
                    |&nbsp;double |&nbsp;groove |&nbsp;ridge
                    |&nbsp;inset |&nbsp;outset
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-bottom-style-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-bottom-width">
          border-bottom-width{" "}
          <a
            href="#prop-border-bottom-width"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-bottom-width-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-bottom-width: thin |&nbsp;medium
                  |&nbsp;thick |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>medium</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-bottom-width-comments">
              Comments
            </div>
            <p className="note">
              Even though the initial value for this property is
              <code>medium</code>, no bottom border will be
              shown by default as the initial value for{" "}
              <a href="#prop-border-bottom-style">
                border-bottom-style
              </a>
              is <code>none</code>.
            </p>
          </div>
          <div>
            <div id="prop-border-bottom-width-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-clip">
          border-clip{" "}
          <a href="#prop-border-clip" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-clip-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-clip: normal |&nbsp;<i>length</i>{" "}
                  |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-clip-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-backgrounds-4/#propdef-border-clip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-collapse">
          border-collapse{" "}
          <a
            href="#prop-border-collapse"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-collapse-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    border-collapse: separate |&nbsp;collapse
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>separate</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-collapse-comments">
              Comments
            </div>
            <p>
              This property determines whether tables use
              separate table and cell borders or collapse the
              table and cell borders together. See the
              <a href="/doc/styling#tables">Tables</a>{" "}
              documentation for more details.
            </p>
          </div>
          <div>
            <div id="prop-border-collapse-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/tables.html#borders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-color">
          border-color{" "}
          <a href="#prop-border-color" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-color: <i>color</i>
                  {"{"}1..4{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-color-comments">Comments</div>
            <p>
              The <code>border-color</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-bottom-color">
                  border-bottom-color
                </a>
              </li>
              <li>
                <a href="#prop-border-left-color">
                  border-left-color
                </a>
              </li>
              <li>
                <a href="#prop-border-right-color">
                  border-right-color
                </a>
              </li>
              <li>
                <a href="#prop-border-top-color">
                  border-top-color
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-color-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-color-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-left">
          border-left{" "}
          <a href="#prop-border-left" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-left-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-left: <i>color</i> ||&nbsp;
                  <i>border-style</i> ||&nbsp;
                  <i>border-width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-left-comments">Comments</div>
            <p>
              The <code>border-left</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-left-color">
                  border-left-color
                </a>
              </li>
              <li>
                <a href="#prop-border-left-style">
                  border-left-style
                </a>
              </li>
              <li>
                <a href="#prop-border-left-width">
                  border-left-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-left-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-left-color">
          border-left-color{" "}
          <a
            href="#prop-border-left-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-left-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-left-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-left-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-left-color-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-left-style">
          border-left-style{" "}
          <a
            href="#prop-border-left-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-left-style-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    border-left-style: none |&nbsp;hidden
                    |&nbsp;solid |&nbsp;dashed |&nbsp;dotted
                    |&nbsp;double |&nbsp;groove |&nbsp;ridge
                    |&nbsp;inset |&nbsp;outset
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-left-style-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-left-width">
          border-left-width{" "}
          <a
            href="#prop-border-left-width"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-left-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-left-width: thin |&nbsp;medium
                  |&nbsp;thick |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>medium</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-left-width-comments">
              Comments
            </div>
            <p className="note">
              Even though the initial value for this property is
              <code>medium</code>, no left border will be shown
              by default as the initial value for{" "}
              <a href="#prop-border-left-style">
                border-left-style
              </a>
              is <code>none</code>.
            </p>
          </div>
          <div>
            <div id="prop-border-left-width-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-radius">
          border-radius{" "}
          <a href="#prop-border-radius" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-radius-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-radius: [ <i>length</i> |&nbsp;
                  <i>percent</i> ]{"{"}1..2{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-radius-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-bottom-left-radius">
          border-bottom-left-radius{" "}
          <a
            href="#prop-border-bottom-left-radius"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-bottom-left-radius-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-bottom-left-radius: [ <i>length</i>{" "}
                  |&nbsp;<i>percent</i> ]{"{"}1..2{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-bottom-left-radius-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-bottom-right-radius">
          border-bottom-right-radius{" "}
          <a
            href="#prop-border-bottom-right-radius"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-bottom-right-radius-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-bottom-right-radius: [ <i>length</i>{" "}
                  |&nbsp;<i>percent</i> ]{"{"}1..2{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-bottom-right-radius-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-top-left-radius">
          border-top-left-radius{" "}
          <a
            href="#prop-border-top-left-radius"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-top-left-radius-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-top-left-radius: [ <i>length</i>{" "}
                  |&nbsp;<i>percent</i> ]{"{"}1..2{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-top-left-radius-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-top-right-radius">
          border-top-right-radius{" "}
          <a
            href="#prop-border-top-right-radius"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-top-right-radius-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-top-right-radius: [ <i>length</i>{" "}
                  |&nbsp;<i>percent</i> ]{"{"}1..2{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-top-right-radius-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-radius"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-right">
          border-right{" "}
          <a href="#prop-border-right" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-right-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-right: <i>color</i> ||&nbsp;
                  <i>border-style</i> ||&nbsp;
                  <i>border-width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-right-comments">Comments</div>
            <p>
              The <code>border-right</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-right-color">
                  border-right-color
                </a>
              </li>
              <li>
                <a href="#prop-border-right-style">
                  border-right-style
                </a>
              </li>
              <li>
                <a href="#prop-border-right-width">
                  border-right-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-right-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-right-color">
          border-right-color{" "}
          <a
            href="#prop-border-right-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-right-color-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-right-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-right-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-right-color-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-right-style">
          border-right-style{" "}
          <a
            href="#prop-border-right-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-right-style-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    border-right-style: none |&nbsp;hidden
                    |&nbsp;solid |&nbsp;dashed |&nbsp;dotted
                    |&nbsp;double |&nbsp;groove |&nbsp;ridge
                    |&nbsp;inset |&nbsp;outset
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-right-style-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-right-width">
          border-right-width{" "}
          <a
            href="#prop-border-right-width"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-right-width-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-right-width: thin |&nbsp;medium
                  |&nbsp;thick |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>medium</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-right-width-comments">
              Comments
            </div>
            <p className="note">
              Even though the initial value for this property is
              <code>medium</code>, no right border will be shown
              by default as the initial value for{" "}
              <a href="#prop-border-right-style">
                border-right-style
              </a>
              is <code>none</code>.
            </p>
          </div>
          <div>
            <div id="prop-border-right-width-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-spacing">
          border-spacing{" "}
          <a
            href="#prop-border-spacing"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-spacing-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-spacing: <i>length</i>
                  {"{"}1..2{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-spacing-comments">
              Comments
            </div>
            <p>
              This property determines the spacing between table
              cell borders for tables that use the separated
              table border model. See the
              <a href="/doc/styling#tables">Tables</a>{" "}
              documentation for more details.
            </p>
          </div>
          <div>
            <div id="prop-border-spacing-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/tables.html#separated-borders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-style">
          border-style{" "}
          <a href="#prop-border-style" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-style-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-style: <i>border-style</i>
                  {"{"}1..4{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-style-comments">Comments</div>
            <p>
              The <code>border-style</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-bottom-style">
                  border-bottom-style
                </a>
              </li>
              <li>
                <a href="#prop-border-left-style">
                  border-left-style
                </a>
              </li>
              <li>
                <a href="#prop-border-right-style">
                  border-right-style
                </a>
              </li>
              <li>
                <a href="#prop-border-top-style">
                  border-top-style
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-style-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-top">
          border-top{" "}
          <a href="#prop-border-top" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-top-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-top: <i>color</i> ||&nbsp;
                  <i>border-style</i> ||&nbsp;
                  <i>border-width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-top-comments">Comments</div>
            <p>
              The <code>border-top</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-top-color">
                  border-top-color
                </a>
              </li>
              <li>
                <a href="#prop-border-top-style">
                  border-top-style
                </a>
              </li>
              <li>
                <a href="#prop-border-top-width">
                  border-top-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-top-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-shorthands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-top-color">
          border-top-color{" "}
          <a
            href="#prop-border-top-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-top-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-top-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-top-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-top-color-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-color"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-top-style">
          border-top-style{" "}
          <a
            href="#prop-border-top-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-top-style-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    border-top-style: none |&nbsp;hidden
                    |&nbsp;solid |&nbsp;dashed |&nbsp;dotted
                    |&nbsp;double |&nbsp;groove |&nbsp;ridge
                    |&nbsp;inset |&nbsp;outset
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-border-top-style-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-top-width">
          border-top-width{" "}
          <a
            href="#prop-border-top-width"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-border-top-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-top-width: thin |&nbsp;medium
                  |&nbsp;thick |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>medium</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-top-width-comments">
              Comments
            </div>
            <p className="note">
              Even though the initial value for this property is
              <code>medium</code>, no top border will be shown
              by default as the initial value for{" "}
              <a href="#prop-border-top-style">
                border-top-style
              </a>
              is <code>none</code>.
            </p>
          </div>
          <div>
            <div id="prop-border-top-width-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-border-width">
          border-width{" "}
          <a href="#prop-border-width" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-border-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>border-width: [ thin |&nbsp;medium
                  |&nbsp;thick |&nbsp;<i>length</i> ]{"{"}1..4
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>medium</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-border-width-comments">Comments</div>
            <p>
              The <code>border-width</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-border-bottom-width">
                  border-bottom-width
                </a>
              </li>
              <li>
                <a href="#prop-border-left-width">
                  border-left-width
                </a>
              </li>
              <li>
                <a href="#prop-border-right-width">
                  border-right-width
                </a>
              </li>
              <li>
                <a href="#prop-border-top-width">
                  border-top-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-border-width-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#the-border-width"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-bottom">
          bottom <a href="#prop-bottom" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-bottom-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>bottom: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>positioned elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-bottom-comments">Comments</div>
            <p>
              This property determines the bottom offset for
              positioned elements (ie. elements with a{" "}
              <a href="#prop-position">position</a>value of{" "}
              <code>relative</code>, <code>absolute</code> or
              <code>fixed</code>).
            </p>
          </div>
          <div>
            <div id="prop-bottom-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#choose-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-box-decoration-break">
          box-decoration-break{" "}
          <a
            href="#prop-box-decoration-break"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-box-decoration-break-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    box-decoration-break: slice |&nbsp;clone
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>clone</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block elements and tables</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-box-decoration-break-comments">
              Comments
            </div>
            <p>
              This property is only supported on block elements
              and tables. Also note that Prince defaults to{" "}
              <code>clone</code>.
            </p>
          </div>
          <div>
            <div id="prop-box-decoration-break-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-break-3/#break-decoration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fragmentation Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-box-shadow">
          box-shadow{" "}
          <a href="#prop-box-shadow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-box-shadow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>box-shadow: none |&nbsp;[ inset?
                  &amp;&amp;&nbsp;<i>length</i>
                  {"{"}2..4{"}"} &amp;&amp;&nbsp;<i>color</i>?
                  ]#</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-box-shadow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-backgrounds-3/#box-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Backgrounds and Borders Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-box-sizing">
          box-sizing{" "}
          <a href="#prop-box-sizing" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-box-sizing-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    box-sizing: content-box |&nbsp;padding-box
                    |&nbsp;border-box
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>content-box</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-box-sizing-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-ui-3/#box-sizing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Basic User Interface Module Level 3 (CSS3
                  UI)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-break-after">
          break-after{" "}
          <a href="#prop-break-after" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-break-after-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    break-after: auto |&nbsp;avoid
                    |&nbsp;avoid-page |&nbsp;avoid-column
                    |&nbsp;page |&nbsp;left |&nbsp;right
                    |&nbsp;recto |&nbsp;verso |&nbsp;column
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        block-level elements in the normal flow
                        of the root element
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-break-after-comments">Comments</div>
            <p>
              This property can be used to force or suppress
              page breaks after an element.
            </p>
            <p>
              The values <code>avoid-page</code> and{" "}
              <code>avoid-column</code> each behave as simply{" "}
              <code>avoid</code>: it is not possible to avoid
              page breaks without also avoiding column breaks.
            </p>
            <p>
              See the documentation for{" "}
              <a href="/doc/paged#page-breaks">Page breaks</a>{" "}
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-break-after-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-break-3/#breaking-controls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fragmentation Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-break-before">
          break-before{" "}
          <a href="#prop-break-before" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-break-before-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    break-before: auto |&nbsp;avoid
                    |&nbsp;avoid-page |&nbsp;avoid-column
                    |&nbsp;page |&nbsp;left |&nbsp;right
                    |&nbsp;recto |&nbsp;verso |&nbsp;column
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        block-level elements in the normal flow
                        of the root element
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-break-before-comments">Comments</div>
            <p>
              This property can be used to force or suppress
              page breaks before an element.
            </p>
            <p>
              The values <code>avoid-page</code> and{" "}
              <code>avoid-column</code> each behave as simply{" "}
              <code>avoid</code>: it is not possible to avoid
              page breaks without also avoiding column breaks.
            </p>
            <p>
              See the documentation for{" "}
              <a href="/doc/paged#page-breaks">Page breaks</a>{" "}
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-break-before-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-break-3/#breaking-controls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fragmentation Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-break-inside">
          break-inside{" "}
          <a href="#prop-break-inside" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-break-inside-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    break-inside: auto |&nbsp;avoid
                    |&nbsp;avoid-page |&nbsp;avoid-column
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        block-level elements in the normal flow
                        of the root element
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-break-inside-comments">Comments</div>
            <p>
              This property can be used to suppress page breaks
              inside an element. See the documentation for{" "}
              <a href="/doc/paged#page-breaks">Page breaks</a>
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-break-inside-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-break-3/#breaking-controls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fragmentation Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-caption-page">
          caption-page*{" "}
          <a href="#prop-caption-page" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-caption-page-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    caption-page: first |&nbsp;following
                    |&nbsp;all
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>first</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-caption-page-comments">Comments</div>
            <p>
              This property determines whether table captions
              will be displayed on the first page of a table, or
              only on following pages, or repeated on every page
              that a table appears on.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-caption-page">
                <code>prince-caption-page</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-caption-page-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#table-captions">
                  Table captions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-caption-side">
          caption-side{" "}
          <a href="#prop-caption-side" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-caption-side-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>caption-side: top |&nbsp;bottom</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>top</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table-caption elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-caption-side-comments">Comments</div>
            <p>
              This property determines whether table captions
              will be displayed at the top or bottom of the
              table.
            </p>
          </div>
          <div>
            <div id="prop-caption-side-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#table-captions">
                  Table captions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-caption-side-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/tables.html#caption-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-clear">
          clear <a href="#prop-clear" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-clear-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>clear: none |&nbsp;left |&nbsp;right |&nbsp;
                  <span className="ext">inside</span> |&nbsp;
                  <span className="ext">outside</span>{" "}
                  |&nbsp;both</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block-level elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-clear-comments">Comments</div>
            <p>
              This property determines whether an element should
              be moved down the page in order to clear elements
              that have been floated to the left or right of the
              page. The <code>left</code>, <code>right</code>,
              <code>inside</code> and <code>outside</code>values
              correspond to values given to the{" "}
              <a href="#prop-float">float</a>property, while{" "}
              <code>both</code> will clear floats on either
              side.
            </p>
          </div>
          <div>
            <div id="prop-clear-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#flow-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://figures.spec.whatwg.org/#floating-inside-and-outside-pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Figures
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-clip">
          clip <a href="#prop-clip" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-clip-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>clip: auto |&nbsp;rect(&nbsp;<i>offset</i>,{" "}
                  <i>offset</i>, <i>offset</i>, <i>offset</i>
                  &nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>absolutely positioned elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-clip-comments">Comments</div>
            <p>
              This property determines the clipping rectangle
              for absolutely positioned elements (ie. elements
              with a <a href="#prop-position">position</a>value
              of <code>absolute</code> or<code>fixed</code>).
            </p>
          </div>
          <div>
            <div id="prop-clip-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visufx.html#clipping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-clip-path">
          clip-path{" "}
          <a href="#prop-clip-path" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-clip-path-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>clip-path: none |&nbsp;url(&nbsp;<i>path</i>
                  &nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-clip-path-comments">Comments</div>
            <p>
              The <code>clip-path</code> property only applies
              to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-clip-path-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/masking.html#ClipPathProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-clip-rule">
          clip-rule{" "}
          <a href="#prop-clip-rule" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-clip-rule-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>clip-rule: nonzero |&nbsp;evenodd</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>nonzero</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-clip-rule-comments">Comments</div>
            <p>
              The <code>clip-rule</code> property only applies
              to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-clip-rule-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/masking.html#ClipRuleProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-color">
          color <a href="#prop-color" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>black</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-color-comments">Comments</div>
            <p>
              See the <a href="/doc/graphics#color">Color</a>{" "}
              section for supported color values.
            </p>
          </div>
          <div>
            <div id="prop-color-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-color-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-color/#foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Color Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-break-after">
          column-break-after{" "}
          <a
            href="#prop-column-break-after"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-column-break-after-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    column-break-after: auto |&nbsp;always
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-column-break-after-comments">
              Comments
            </div>
            <p className="note">
              This property is deprecated. Use{" "}
              <a href="#prop-break-after">break-after</a>
              :columninstead. See the documentation for{" "}
              <a href="/doc/styling#columns">Columns</a> for
              more details.
            </p>
          </div>
          <div>
            <div id="prop-column-break-after-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-break-after">break-after</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-break-before">
          column-break-before{" "}
          <a
            href="#prop-column-break-before"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-column-break-before-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    column-break-before: auto |&nbsp;always
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-column-break-before-comments">
              Comments
            </div>
            <p className="note">
              This property is deprecated. Use{" "}
              <a href="#prop-break-before">break-before</a>
              :columninstead. See the documentation for{" "}
              <a href="/doc/styling#columns">Columns</a> for
              more details.
            </p>
          </div>
          <div>
            <div id="prop-column-break-before-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-break-before">break-before</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-count">
          column-count{" "}
          <a href="#prop-column-count" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-column-count-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-count: auto |&nbsp;<i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        non-replaced block-level elements
                        (except table elements), table cells,
                        and inline-block elements
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-column-count-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-count-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#cc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-fill">
          column-fill{" "}
          <a href="#prop-column-fill" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-column-fill-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-fill: auto |&nbsp;balance</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>balance</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-column-fill-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-fill-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#cf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-gap">
          column-gap{" "}
          <a href="#prop-column-gap" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-column-gap-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-gap: <i>length</i> |&nbsp;
                  <i>percent</i> |&nbsp;normal</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-column-gap-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-gap-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#column-gap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-rule">
          column-rule{" "}
          <a href="#prop-column-rule" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-column-rule-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-rule:{" "}
                  <i>
                    <a href="#prop-column-rule-color">
                      column-rule-color
                    </a>
                  </i>{" "}
                  ||&nbsp;
                  <i>
                    <a href="#prop-column-rule-style">
                      column-rule-style
                    </a>
                  </i>{" "}
                  ||&nbsp;
                  <i>
                    <a href="#prop-column-rule-width">
                      column-rule-width
                    </a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-column-rule-comments">Comments</div>
            <p>
              The <code>column-rule</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-column-rule-color">
                  column-rule-color
                </a>
              </li>
              <li>
                <a href="#prop-column-rule-style">
                  column-rule-style
                </a>
              </li>
              <li>
                <a href="#prop-column-rule-width">
                  column-rule-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-rule-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-rule-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#column-rule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-rule-color">
          column-rule-color{" "}
          <a
            href="#prop-column-rule-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-column-rule-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-rule-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-column-rule-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-rule-color-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#crc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-rule-style">
          column-rule-style{" "}
          <a
            href="#prop-column-rule-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-column-rule-style-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    column-rule-style: none |&nbsp;solid
                    |&nbsp;dashed |&nbsp;dotted |&nbsp;double
                    |&nbsp;groove |&nbsp;ridge |&nbsp;inset
                    |&nbsp;outset
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-column-rule-style-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-rule-style-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#crs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-rule-width">
          column-rule-width{" "}
          <a
            href="#prop-column-rule-width"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-column-rule-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-rule-width: thin |&nbsp;medium
                  |&nbsp;thick |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>medium</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>multicol elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-column-rule-width-comments">
              Comments
            </div>
            <p className="note">
              Even though the initial value for this property is
              <code>medium</code>, no column rule will be shown
              by default as the initial value for{" "}
              <a href="#prop-column-rule-style">
                column-rule-style
              </a>
              is <code>none</code>.
            </p>
          </div>
          <div>
            <div id="prop-column-rule-width-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-rule-width-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#crw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-span">
          column-span{" "}
          <a href="#prop-column-span" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-column-span-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-span: <i>number</i> |&nbsp;none
                  |&nbsp;all</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>in-flow block-level elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-column-span-comments">Comments</div>
            <p className="note">
              A numeric <code>column-span</code> value other
              than <code>1</code> will only affect column
              floats. The keyword <code>none</code> is treated
              as equivalent to the numeric value <code>1</code>.
            </p>
          </div>
          <div>
            <div id="prop-column-span-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-span-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#column-span"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-column-width">
          column-width{" "}
          <a href="#prop-column-width" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-column-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>column-width: auto |&nbsp;<i>width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        non-replaced block-level elements
                        (except table elements), table cells,
                        and inline-block elements
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-column-width-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-column-width-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#cw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-columns">
          columns{" "}
          <a href="#prop-columns" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-columns-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>columns:{" "}
                  <i>
                    <a href="#prop-column-count">
                      column-count
                    </a>
                  </i>{" "}
                  |&nbsp;
                  <i>
                    <a href="#prop-column-width">
                      column-width
                    </a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        non-replaced block-level elements
                        (except table elements), table cells,
                        and inline-block elements
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-columns-comments">Comments</div>
            <p>
              The <code>columns</code> property is a shorthand
              for setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-column-count">column-count</a>
              </li>
              <li>
                <a href="#prop-column-width">column-width</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-columns-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#columns">Columns</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-columns-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-multicol/#columns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Multi-column Layout Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-content">
          content{" "}
          <a href="#prop-content" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-content-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>content: normal |&nbsp;
                  <span className="ext">
                    flow(&nbsp;<i>name</i>, <i>page-policy</i>
                    ?&nbsp;)
                  </span>{" "}
                  |&nbsp;[ "string" |&nbsp;url(&nbsp;
                  <i>filename</i>&nbsp;) |&nbsp;counter(&nbsp;
                  <i>name</i>, <i>counter-style</i>?,{" "}
                  <i>page-policy</i>?&nbsp;)
                  |&nbsp;counters(&nbsp;<i>name</i>,
                  "separator", <i>counter-style</i>?,{" "}
                  <i>page-policy</i>?&nbsp;)
                  |&nbsp;target-counter(&nbsp;<i>url</i>,{" "}
                  <i>counter</i>, <i>counter-style</i>?&nbsp;)
                  |&nbsp;target-counters(&nbsp;<i>url</i>,{" "}
                  <i>counter</i>, "separator",{" "}
                  <i>counter-style</i>?&nbsp;)
                  |&nbsp;target-content(&nbsp;<i>url</i>&nbsp;)
                  |&nbsp;
                  <span className="ext">
                    leader(&nbsp;["..." |&nbsp;dotted
                    |&nbsp;solid |&nbsp;space], <i>length</i>
                    ?&nbsp;)
                  </span>{" "}
                  |&nbsp;string(&nbsp;<i>ident</i>,{" "}
                  <i>page-policy</i>?&nbsp;)
                  |&nbsp;content(&nbsp;&nbsp;) |&nbsp;
                  <span className="ext">
                    prince-base-url(&nbsp;&nbsp;)
                  </span>{" "}
                  |&nbsp;
                  <span className="ext">
                    prince-script(&nbsp;<i>ident</i>,{" "}
                    <i>content</i>?&nbsp;)
                  </span>{" "}
                  |&nbsp;
                  <span className="ext">
                    prince-glyph-index(&nbsp;<i>number</i>
                    &nbsp;)
                  </span>{" "}
                  |&nbsp;
                  <span className="ext">
                    prince-fallback(&nbsp;<i>url</i>&nbsp;)
                  </span>{" "}
                  [ , <i>content</i>+ ]? |&nbsp;element(&nbsp;
                  <i>name</i>&nbsp;) ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, tree-abiding
                        pseudo-elements, and page regions
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-content-comments">Comments</div>
            <p>
              The <code>content</code> property can be used to
              insert text and other content into the original
              document. The uses are very wide-ranging and are
              treated in more depth in the{" "}
              <a href="/doc/gen-content">Generated Content</a>{" "}
              section.
            </p>
            <p>
              Several ways of creating content are here defined
              by means of functions - the detailed explanation
              can be found in the{" "}
              <a href="/doc/gen-content#generated-content-functions">
                Generated Content Functions
              </a>
              section.
            </p>
          </div>
          <div>
            <div id="prop-content-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/gen-content#generated-content-functions">
                  Generated Content Functions
                </a>
              </li>
              <li>
                <a href="/doc/gen-content">Generated Content</a>
              </li>
              <li>
                <a href="/doc/gen-content#generated-content-in-page-regions">
                  Generated content in page regions
                </a>
              </li>
              <li>
                <a href="/doc/paged#copying-content-from-the-document">
                  Copying content from the document
                </a>
              </li>
              <li>
                <a href="/doc/paged#taking-elements-from-the-document">
                  Taking elements from the document
                </a>
              </li>
              <li>
                <a href="/doc/gen-content#counters-and-numbering">
                  Counters and Numbering
                </a>
              </li>
              <li>
                <a href="/doc/gen-content#cross-references">
                  Cross-references
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-content-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-content-3/#content-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Generated Content Module Level 3
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-gcpm-3/#running-elements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Generated Content for Paged Media Module
                </a>
              </li>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#the-''target-counter''-and-''target-counters''-values"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-counter-increment">
          counter-increment{" "}
          <a
            href="#prop-counter-increment"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-counter-increment-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>counter-increment: none |&nbsp;[ <i>name</i>{" "}
                  <i>number</i>? ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-counter-increment-comments">
              Comments
            </div>
            <p>
              For information about the use of the{" "}
              <code>counter-increment</code>property see the
              documentation for{" "}
              <a href="/doc/gen-content#counters-and-numbering">
                Counters and Numbering
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-counter-increment-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/generate.html#propdef-counter-increment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-counter-reset">
          counter-reset{" "}
          <a href="#prop-counter-reset" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-counter-reset-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>counter-reset: none |&nbsp;[ <i>name</i>{" "}
                  <i>number</i>? ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-counter-reset-comments">Comments</div>
            <p>
              For information about the use of the{" "}
              <code>counter-reset</code>property see the
              documentation for{" "}
              <a href="/doc/gen-content#counters-and-numbering">
                Counters and Numbering
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-counter-reset-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/generate.html#propdef-counter-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-direction">
          direction{" "}
          <a href="#prop-direction" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-direction-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>direction: ltr |&nbsp;rtl</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>ltr</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-direction-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-writing-modes-3/#direction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Writing Modes Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-display">
          display{" "}
          <a href="#prop-display" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-display-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    display: inline |&nbsp;block |&nbsp;flex
                    |&nbsp;inline-flex |&nbsp;none
                    |&nbsp;list-item |&nbsp;run-in |&nbsp;table
                    |&nbsp;table-header-group
                    |&nbsp;table-footer-group
                    |&nbsp;table-row-group |&nbsp;table-row
                    |&nbsp;table-cell |&nbsp;table-caption
                    |&nbsp;table-column
                    |&nbsp;table-column-group
                    |&nbsp;inline-block |&nbsp;inline-table
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>inline</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-display-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#display">Display</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-display-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#display-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-containers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-dominant-baseline">
          dominant-baseline{" "}
          <a
            href="#prop-dominant-baseline"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-dominant-baseline-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    dominant-baseline: auto |&nbsp;use-script
                    |&nbsp;no-change |&nbsp;reset-size
                    |&nbsp;ideographic |&nbsp;alphabetic
                    |&nbsp;hanging |&nbsp;mathematical
                    |&nbsp;central |&nbsp;middle
                    |&nbsp;text-after-edge
                    |&nbsp;text-before-edge
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-dominant-baseline-comments">
              Comments
            </div>
            <p>
              The <code>dominant-baseline</code> property only
              applies to SVG text elements.
            </p>
          </div>
          <div>
            <div id="prop-dominant-baseline-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/text.html#DominantBaselineProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-empty-cells">
          empty-cells{" "}
          <a href="#prop-empty-cells" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-empty-cells-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>empty-cells: show |&nbsp;hide</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>show</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table-cell elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-empty-cells-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/tables.html#empty-cells"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-fill">
          fill <a href="#prop-fill" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-fill-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>fill: none |&nbsp;<i>color</i>{" "}
                  |&nbsp;url(&nbsp;<i>paint-server</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>black</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-fill-comments">Comments</div>
            <p>
              The <code>fill</code> property only applies to SVG
              elements.
            </p>
          </div>
          <div>
            <div id="prop-fill-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#FillProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-fill-opacity">
          fill-opacity{" "}
          <a href="#prop-fill-opacity" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-fill-opacity-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>fill-opacity: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-fill-opacity-comments">Comments</div>
            <p>
              The <code>fill-opacity</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-fill-opacity-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#FillOpacityProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-fill-rule">
          fill-rule{" "}
          <a href="#prop-fill-rule" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-fill-rule-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>fill-rule: nonzero |&nbsp;evenodd</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>nonzero</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-fill-rule-comments">Comments</div>
            <p>
              The <code>fill-rule</code> property only applies
              to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-fill-rule-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#FillRuleProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-filter">
          filter <a href="#prop-filter" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-filter-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>filter: none |&nbsp;[ url(&nbsp;<i>url</i>
                  &nbsp;) |&nbsp;blur(&nbsp;<i>length</i>&nbsp;)
                  |&nbsp;brightness(&nbsp;<i>number</i> |&nbsp;
                  <i>percent</i>&nbsp;) |&nbsp;contrast(&nbsp;
                  <i>number</i> |&nbsp;<i>percent</i>&nbsp;)
                  |&nbsp;drop-shadow(&nbsp;<i>length</i>
                  {"{"}1..3{"}"}, <i>color</i>?&nbsp;)
                  |&nbsp;grayscale(&nbsp;<i>number</i> |&nbsp;
                  <i>percent</i>&nbsp;) |&nbsp;hue-rotate(&nbsp;
                  <i>angle</i>&nbsp;) |&nbsp;invert(&nbsp;
                  <i>number</i> |&nbsp;<i>percent</i>&nbsp;)
                  |&nbsp;opacity(&nbsp;<i>number</i> |&nbsp;
                  <i>percent</i>&nbsp;) |&nbsp;saturate(&nbsp;
                  <i>number</i> |&nbsp;<i>percent</i>&nbsp;)
                  |&nbsp;sepia(&nbsp;<i>number</i> |&nbsp;
                  <i>percent</i>&nbsp;) ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-filter-comments">Comments</div>
            <p>
              The <code>filter</code> property provides
              graphical effects like blurring, saturating or
              color shifting an element. For more details see
              the<a href="/doc/graphics#filters">Filters</a>{" "}
              section.
            </p>
          </div>
          <div>
            <div id="prop-filter-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/graphics#filters">Filters</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-filter-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://drafts.fxtf.org/filters/#FilterProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Filter Effects Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex">
          flex <a href="#prop-flex" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flex-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>flex: none |&nbsp;[{" "}
                  <i>
                    <a href="#prop-flex-grow">flex-grow</a>
                  </i>{" "}
                  <i>
                    <a href="#prop-flex-shrink">flex-shrink</a>
                  </i>
                  ? ||&nbsp;
                  <i>
                    <a href="#prop-flex-basis">flex-basis</a>
                  </i>{" "}
                  ]</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1 0 auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-flex-comments">Comments</div>
            <p>
              The <code>flex</code> property is a shorthand for
              setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-flex-grow">flex-grow</a>
              </li>
              <li>
                <a href="#prop-flex-shrink">flex-shrink</a>
              </li>
              <li>
                <a href="#prop-flex-basis">flex-basis</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-flex-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex-basis">
          flex-basis{" "}
          <a href="#prop-flex-basis" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flex-basis-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>flex-basis: content |&nbsp;<i>width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-flex-basis-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-basis-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex-direction">
          flex-direction{" "}
          <a
            href="#prop-flex-direction"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-flex-direction-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    flex-direction: row |&nbsp;row-reverse
                    |&nbsp;column |&nbsp;column-reverse
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>row</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-flex-direction-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-direction-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex-grow">
          flex-grow{" "}
          <a href="#prop-flex-grow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flex-grow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>flex-grow: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-flex-grow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-grow-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex-shrink">
          flex-shrink{" "}
          <a href="#prop-flex-shrink" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flex-shrink-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>flex-shrink: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-flex-shrink-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-shrink-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex-wrap">
          flex-wrap{" "}
          <a href="#prop-flex-wrap" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flex-wrap-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    flex-wrap: nowrap |&nbsp;wrap
                    |&nbsp;wrap-reverse
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>nowrap</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-flex-wrap-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-flex-flow">
          flex-flow{" "}
          <a href="#prop-flex-flow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flex-flow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>flex-flow:{" "}
                  <i>
                    <a href="#prop-flex-direction">
                      flex-direction
                    </a>
                  </i>{" "}
                  ||&nbsp;
                  <i>
                    <a href="#prop-flex-wrap">flex-wrap</a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>row nowrap</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-flex-flow-comments">Comments</div>
            <p>
              The <code>flex-flow</code> property is a shorthand
              for setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-flex-direction">
                  flex-direction
                </a>
              </li>
              <li>
                <a href="#prop-flex-wrap">flex-wrap</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-flex-flow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#flex-flow-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-float">
          float <a href="#prop-float" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-float-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>float: <br />
                  &nbsp;&nbsp;&nbsp;none |&nbsp;left
                  |&nbsp;right |&nbsp;
                  <span className="ext">inside</span> |&nbsp;
                  <span className="ext">outside</span> <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;footnote |&nbsp;
                  <span className="ext">inline-footnote</span> <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;
                  <span className="ext">
                    prince-column-footnote
                  </span> <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;
                  <span className="ext">
                    prince-column-inline-footnote
                  </span> <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;
                  <span className="ext">prince-snap</span> <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;[ [ top |&nbsp;bottom
                  |&nbsp;<span className="ext">column-top</span>{" "}
                  |&nbsp;
                  <span className="ext">column-bottom</span> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;
                  <span className="ext">column-top-corner</span>{" "}
                  |&nbsp;
                  <span className="ext">
                    column-bottom-corner
                  </span>{" "}
                  ] <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;&amp;&nbsp;[{" "}
                  <span className="ext">next</span> |&nbsp;
                  <span className="ext">unless-fit</span> ]? ]</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-float-comments">Comments</div>
            <p>
              Traditionally, floats move in the inline
              direction, left or right. Prince extends this
              behavior with page floats that move in the block
              direction, specifying that an element should be
              floated to the top or to the bottom, or to the
              nearest edge of the column.
            </p>
            <p>
              The values <code>top</code> or <code>bottom</code>{" "}
              float the element to, respectively, the top or the
              bottom of the page.
            </p>
            <p>
              The values <code>column-top</code> and{" "}
              <code>column-bottom</code> float the element to
              the top or bottom of the column it appears in.
            </p>
            <p>
              The values <code>column-top-corner</code> and{" "}
              <code>column-bottom-corner</code>float the element
              to the top or bottom of the last column, rather
              than its natural column.
            </p>
            <p>
              The value <code>prince-snap</code> floats the
              element to the nearest "end", i.e. to the top or
              bottom of the page, or of the column in the case
              of a multi-column layout.
            </p>
            <p>
              The values <code>inside</code> and{" "}
              <code>outside</code> float the element
              respectively to the inside or outside of a spread:{" "}
              <code>inside</code> moves the element to the right
              when used on a left-facing page, and to the left
              on a right-facing page;<code>outside</code> moves
              the element to the left when used on a left-facing
              page, and to the right on a right-facing page.
              When these values are used in a multi-column
              layout, the element is floated to the inside or
              outside of the column it appears in its natural
              flow.
            </p>
            <p>
              The value <code>footnote</code> transforms the
              element into a footnote - the footnote marker is
              placed outside of the block of the footnote. The
              value <code>inline-footnote</code>transforms the
              element into a footnote and places the footnote
              marker inside of the block of the footnote.
            </p>
            <p>
              The values <code>prince-column-footnote</code> and{" "}
              <code>prince-column-inline-footnote</code>behave
              in an analogous way, but move the footnote not to
              the bottom of the page, but to the bottom of its
              column instead.
            </p>
            <p>
              The additional modifier <code>next</code> defers
              the float to the next column in a multi-column
              layout, otherwise it defers the float to the next
              page.
            </p>
            <p>
              The modifier <code>unless-fit</code> expresses a
              conditional: the element is only floated if it
              would otherwise cause a page or column break.
            </p>
          </div>
          <div>
            <div id="prop-float-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#floats">Floats</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-float-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#float-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-gcpm-3/#footnotes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Generated Content for Paged Media Module
                </a>
              </li>
              <li>
                <a
                  href="https://figures.spec.whatwg.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Figures
                </a>
              </li>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#footnotes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-flow">
          flow* <a href="#prop-flow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-flow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>flow: normal |&nbsp;static(&nbsp;<i>name</i>,
                  [ start |&nbsp;current ]?&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-flow-comments">Comments</div>
            <p>
              This property is used to remove elements from the
              normal flow of the document, to be placed in a
              page region with{" "}
              <a href="#prop-content">content</a>: flow(), in
              order to create running page headers and footers.
            </p>
            <p>
              The optional <code>start</code> argument (default
              is <code>current</code>) makes the fetched content
              available, as if it were fetched from the start of
              the document.
            </p>
            <p>
              See the documentation for{" "}
              <a href="/doc/gen-content#taking-elements-from-the-document">
                Taking elements from the document
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-flow">
                <code>prince-flow</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-flow-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-regions">
                  Page regions
                </a>
              </li>
              <li>
                <a href="/doc/paged#taking-elements-from-the-document">
                  Taking elements from the document
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-flow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#flowing-content-to-a-named-area:-'flow'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font">
          font <a href="#prop-font" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>font:{" "}
                  <i>
                    <a href="#prop-font-style">font-style</a>
                  </i>
                  ?{" "}
                  <i>
                    <a href="#prop-font-variant">
                      font-variant
                    </a>
                  </i>
                  ?{" "}
                  <i>
                    <a href="#prop-font-weight">font-weight</a>
                  </i>
                  ?{" "}
                  <i>
                    <a href="#prop-font-size">font-size</a>
                  </i>{" "}
                  [ /{" "}
                  <i>
                    <a href="#prop-line-height">line-height</a>
                  </i>{" "}
                  ]?{" "}
                  <i>
                    <a href="#prop-font-family">font-family</a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>12pt serif</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font: bold 14pt/16pt Georgia, "Times New
                    Roman", serif
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-comments">Comments</div>
            <p>
              The <code>font</code> property is a shorthand for
              setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-font-family">font-family</a>
              </li>
              <li>
                <a href="#prop-font-size">font-size</a>
              </li>
              <li>
                <a href="#prop-font-stretch">font-stretch</a>
              </li>
              <li>
                <a href="#prop-font-style">font-style</a>
              </li>
              <li>
                <a href="#prop-font-variant">font-variant</a>
              </li>
              <li>
                <a href="#prop-font-weight">font-weight</a>
              </li>
              <li>
                <a href="#prop-line-height">line-height</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/fonts.html#font-shorthand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-family">
          font-family{" "}
          <a href="#prop-font-family" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-family-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>font-family: [ serif |&nbsp;sans-serif
                  |&nbsp;monospace |&nbsp;<i>name</i>{" "}
                  |&nbsp;"name" ]#{" "}
                  <span className="ext">
                    prince-no-fallback
                  </span>
                  ?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>serif</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements / @font-face at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-family-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-family: Georgia, "Times New Roman",
                    serif
                  </code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-family: MyFont, prince-no-fallback
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-family-comments">Comments</div>
            <p>
              The special keyword{" "}
              <code>prince-no-fallback</code> triggers a warning
              if any glyphs are not found in the specified font,
              whereas normally Prince would silently fallback to
              serif.
            </p>
            <p>
              When used as a descriptor for the
              <a href="/doc/css-refs#at-font-face">
                <code>@font-face</code>
              </a>{" "}
              at-rule,<code>font-family</code> defines the font
              family name that will be used in all CSS font
              family name matching. It is required for the{" "}
              <code>@font-face</code>rule to be valid.
            </p>
          </div>
          <div>
            <div id="prop-font-family-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#fonts">Fonts</a>
              </li>
              <li>
                <a href="/doc/styling#redefining-the-generic-font-families">
                  Redefining the generic font families
                </a>
              </li>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-family-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-family"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-kerning">
          font-kerning{" "}
          <a href="#prop-font-kerning" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-kerning-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-kerning: auto |&nbsp;normal |&nbsp;none
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-kerning-comments">Comments</div>
            <p>
              The value <code>none</code> disables font kerning.{" "}
              <a href="#prop-font-variant">
                font-variant: prince-no-kerning
              </a>{" "}
              accomplishes the same.
            </p>
          </div>
          <div>
            <div id="prop-font-kerning-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#opentype-features-in-prince">
                  OpenType Features in Prince
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-kerning-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-fonts-3/#font-kerning-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-size">
          font-size{" "}
          <a href="#prop-font-size" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-size-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>font-size: <i>length</i> |&nbsp;<i>percent</i>{" "}
                  |&nbsp;smaller |&nbsp;larger |&nbsp;xx-small
                  |&nbsp;x-small |&nbsp;small |&nbsp;medium
                  |&nbsp;large |&nbsp;x-large |&nbsp;xx-large</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>12pt</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-font-size-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-size-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-size"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-stretch">
          font-stretch{" "}
          <a href="#prop-font-stretch" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-stretch-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-stretch: ultra-condensed
                    |&nbsp;extra-condensed |&nbsp;condensed
                    |&nbsp;semi-condensed |&nbsp;normal
                    |&nbsp;semi-expanded |&nbsp;expanded
                    |&nbsp;extra-expanded |&nbsp;ultra-expanded
                    |&nbsp;wider |&nbsp;narrower
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-stretch-comments">Comments</div>
            <p>
              The <code>font-stretch</code> property is not
              supported for system fonts on Windows.
            </p>
          </div>
          <div>
            <div id="prop-font-stretch-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-stretch-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-fonts-3/#font-stretch-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-style">
          font-style{" "}
          <a href="#prop-font-style" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-style-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>font-style: normal |&nbsp;italic</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-font-style-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-style-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-variant">
          font-variant{" "}
          <a href="#prop-font-variant" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-variant-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>font-variant: <br />&nbsp;&nbsp;&nbsp;normal <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;[
                  [small-caps |&nbsp;all-small-caps]
                  ||&nbsp;[common-ligatures
                  |&nbsp;no-common-ligatures]
                  ||&nbsp;[discretionary-ligatures
                  |&nbsp;no-discretionary-ligatures]
                  ||&nbsp;[historical-ligatures
                  |&nbsp;no-historical-ligatures]
                  ||&nbsp;[contextual |&nbsp;no-contextual] <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;[lining-nums
                  |&nbsp;oldstyle-nums]
                  ||&nbsp;[proportional-nums
                  |&nbsp;tabular-nums]
                  ||&nbsp;[diagonal-fractions
                  |&nbsp;stacked-fractions] ||&nbsp;ordinal
                  ||&nbsp;slashed-zero <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;
                  <span className="ext">prince-no-kerning</span>{" "}
                  ||&nbsp;
                  <span className="ext">
                    prince-opentype(&nbsp;[ <i>feature</i>{" "}
                    ]+&nbsp;) ]
                  </span></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-variant-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    &lt;span style="font-family: SpecialFont;
                    font-variant:
                    prince-opentype(aalt(2))"&gt;<br />
                    &nbsp;&nbsp;&amp;amp;<br />
                    &lt;/span&gt;
                  </code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-variant: prince-opentype(onum, ccmp,
                    liga)
                  </code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-variant: historical-ligatures
                    all-small-caps;
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-variant-comments">Comments</div>
            <p>
              The <code>prince-opentype()</code> function takes
              a comma-separated list of OpenType features.
              Microsoft has a list of the OpenType feature names
              <a
                href="https://www.microsoft.com/typography/otspec/featurelist.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              Some OpenType features like <code>aalt</code>{" "}
              (access all alternates) can be used to select one
              of many optional glyphs, eg. a font might provide
              three different ampersand glyphs and allow the
              author to choose which one. An optional integer
              parameter is how you do this, however it requires
              intimate details of exactly which font is being
              used and what glyphs it provides.
            </p>
            <p>
              The OpenType <code>feature</code> can be written
              either in function form (<code>feature(N)</code>)
              or in concatenated form (<code>featureN</code>).
            </p>
            <p>
              The keyword <code>prince-no-kerning</code>{" "}
              disables the <code>kern</code>OpenType feature,
              which defines font kerning. The property{" "}
              <a href="#prop-font-kerning">font-kerning</a> is
              the better way of achieving the same.
            </p>
            <p>
              This property can be used as a shorthand for the
              properties{" "}
              <a href="#prop-font-variant-caps">
                font-variant-caps
              </a>
              ,{" "}
              <a href="#prop-font-variant-ligatures">
                font-variant-ligatures
              </a>{" "}
              and{" "}
              <a href="#prop-font-variant-numeric">
                font-variant-numeric
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-font-variant-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/cookbook#typographic-ligatures">
                  Typographic Ligatures
                </a>
              </li>
              <li>
                <a href="/doc/styling#opentype-features-in-prince">
                  OpenType Features in Prince
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-variant-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-variant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-variant-caps">
          font-variant-caps{" "}
          <a
            href="#prop-font-variant-caps"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-font-variant-caps-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-variant-caps: normal |&nbsp;small-caps
                    |&nbsp;all-small-caps
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-variant-caps-comments">
              Comments
            </div>
            <p>
              The value <code>small-caps</code> enables the
              display of small capitals, i.e. the OpenType
              feature <code>smcp</code>.
            </p>
            <p>
              The value <code>all-small-caps</code> enables the
              display of small capitals for both uppercase and
              lowercase letters, i.e. the OpenType features{" "}
              <code>c2pc</code> and <code>smcp</code>.
            </p>
            <p>
              The property{" "}
              <a href="#prop-font-variant">font-variant</a> can
              be used as a shorthand for this property.
            </p>
          </div>
          <div>
            <div id="prop-font-variant-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#opentype-features-in-prince">
                  OpenType Features in Prince
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-variant-caps-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-fonts-3/#font-variant-caps-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-variant-ligatures">
          font-variant-ligatures{" "}
          <a
            href="#prop-font-variant-ligatures"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-font-variant-ligatures-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-variant-ligatures: normal |&nbsp;none
                    |&nbsp;[ [common-ligatures
                    |&nbsp;no-common-ligatures]
                    ||&nbsp;[discretionary-ligatures
                    |&nbsp;no-discretionary-ligatures ]
                    ||&nbsp;[ historical-ligatures
                    |&nbsp;no-historical-ligatures ] ||&nbsp;[
                    contextual |&nbsp;no-contextual] ]
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-variant-ligatures-comments">
              Comments
            </div>
            <p>
              This property allows for fine-tuning of various
              ligature types.
            </p>
            <p>
              The value <code>common-ligatures</code> enables
              display of common ligatures, i.e. the OpenType
              features <code>liga</code> and <code>clig</code>.
              Note that for OpenType fonts, common ligatures are
              enabled by default.
            </p>
            <p>
              The value <code>discreationary-ligatures</code>{" "}
              enables the display of discretionary ligatures,
              i.e. the OpenTypes feature <code>dlig</code>.
            </p>
            <p>
              The value <code>historical-ligatures</code>{" "}
              enables the display of historical ligatures, i.e.
              the OpenType feature <code>hlig</code>.
            </p>
            <p>
              The value <code>contextual</code> enables the
              context of contextual alternatives, i.e. the
              OpenType feature <code>calt</code>.
            </p>
            <p>
              The values starting with <code>no-*</code> disable
              the display of the features.
            </p>
            <p>
              The property{" "}
              <a href="#prop-font-variant">font-variant</a> can
              be used as a shorthand for this property.
            </p>
          </div>
          <div>
            <div id="prop-font-variant-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#opentype-features-in-prince">
                  OpenType Features in Prince
                </a>
              </li>
              <li>
                <a href="/doc/cookbook#typographic-ligatures">
                  Typographic Ligatures
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-variant-ligatures-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-fonts-3/#font-variant-ligatures-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-variant-numeric">
          font-variant-numeric{" "}
          <a
            href="#prop-font-variant-numeric"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-font-variant-numeric-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-variant-numeric: normal |&nbsp;[
                    [lining-nums | oldstyle-nums]
                    ||&nbsp;[proportional-nums | tabular-nums]
                    ||&nbsp;[diagonal-fractions |
                    stacked-fractions] ||&nbsp;ordinal
                    ||&nbsp;slashed-zero ]
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-font-variant-numeric-comments">
              Comments
            </div>
            <p>
              This property specifies control over numeric
              forms.
            </p>
            <p>
              The value <code>lining-nums</code> enables the
              display of lining numerals, i.e. the OpenTypes
              feature <code>lnum</code>.
            </p>
            <p>
              The value <code>oldstyle-nums</code> enables the
              display of old-style numerals, i.e. the OpenTypes
              feature <code>onum</code>.
            </p>
            <p>
              The value <code>proportional-nums</code> enables
              the display of proportional numerals, i.e. the
              OpenTypes feature <code>pnum</code>.
            </p>
            <p>
              The value <code>tabular-nums</code> enables the
              display of tabular numerals, i.e. the OpenTypes
              feature <code>tnum</code>.
            </p>
            <p>
              The value <code>diagonal-fractions</code> enables
              the display of lining diagonal fractions, i.e. the
              OpenTypes feature <code>frac</code>.
            </p>
            <p>
              The value <code>stacked-fractions</code> enables
              the display of lining stacked fractions, i.e. the
              OpenTypes feature <code>afrc</code>.
            </p>
            <p>
              The value <code>ordinal</code> enables the display
              of letter forms used with ordinal numbers (like
              e.g. "1<sup>st</sup>", i.e. the OpenTypes feature{" "}
              <code>ordn</code>.
            </p>
            <p>
              The value <code>slashed-zero</code> enables the
              display of lining numerals, i.e. the OpenTypes
              feature <code>zero</code>.
            </p>
            <p>
              The property{" "}
              <a href="#prop-font-variant">font-variant</a> can
              be used as a shorthand for this property.
            </p>
          </div>
          <div>
            <div id="prop-font-variant-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#opentype-features-in-prince">
                  OpenType Features in Prince
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-variant-numeric-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-fonts-3/#font-variant-numeric-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-font-weight">
          font-weight{" "}
          <a href="#prop-font-weight" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-font-weight-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    font-weight: normal |&nbsp;bold
                    |&nbsp;bolder |&nbsp;lighter |&nbsp;100
                    |&nbsp;200 |&nbsp;300 |&nbsp;400 |&nbsp;500
                    |&nbsp;600 |&nbsp;700 |&nbsp;800 |&nbsp;900
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-font-weight-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-font-weight-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/fonts.html#propdef-font-weight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-footnote-display">
          footnote-display{" "}
          <a
            href="#prop-footnote-display"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-footnote-display-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    footnote-display: block |&nbsp;inline
                    |&nbsp;compact
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>block</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>footnote elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-footnote-display-comments">
              Comments
            </div>
            <p>
              This property provides a convenient way of
              determining whether footnotes should be displayed
              as a block element or an inline element.
            </p>
            <p>
              The value <code>compact</code> leaves it up to
              Prince to determine whether to display the
              footnote as a block or inline element: if two or
              more footnotes fit on one line, they will be
              treated as inline elements to take up less space.
            </p>
          </div>
          <div>
            <div id="prop-footnote-display-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-gcpm-3/#propdef-footnote-display"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Generated Content for Paged Media Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-footnote-style-position"
        >
          footnote-style-position*{" "}
          <a
            href="#prop-footnote-style-position"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-footnote-style-position-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    footnote-style-position: outside
                    |&nbsp;inside
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>outside</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>footnote elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-footnote-style-position-comments">
              Comments
            </div>
            <p>
              For information about the use of the{" "}
              <code>footnote-style-position</code>property see
              the documentation for{" "}
              <a href="/doc/styling#footnotes">Footnotes</a>.
            </p>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-height">
          height <a href="#prop-height" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-height-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>height: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i> |&nbsp;min-content
                  |&nbsp;max-content</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements except non-replaced inline
                        elements, table columns, and column
                        groups
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-height-comments">Comments</div>
            <p className="note">
              The values <code>min-content</code> and{" "}
              <code>max-content</code> do not affect auto table
              layout.
            </p>
          </div>
          <div>
            <div id="prop-height-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#the-height-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-sizing-3/#sizing-values"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Intrinsic &amp; Extrinsic Sizing Module
                  Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-hyphens">
          hyphens{" "}
          <a href="#prop-hyphens" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-hyphens-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    hyphens: none |&nbsp;manual |&nbsp;auto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>manual</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-hyphens-comments">Comments</div>
            <p>
              This property defines if hyphenation is allowed to
              create more wrapping points in a line of text.
            </p>
          </div>
          <div>
            <div id="prop-hyphens-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-hyphens-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#hyphens-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-hyphenate-patterns">
          hyphenate-patterns*{" "}
          <a
            href="#prop-hyphenate-patterns"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-hyphenate-patterns-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>hyphenate-patterns: none |&nbsp;url(&nbsp;
                  <i>patterns-url</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-hyphenate-patterns-comments">
              Comments
            </div>
            <p>
              This property is used to point to a hyphenation
              dictionary. Normally this is selected
              automatically, based on the current language.
            </p>
            <p>
              The <code>url()</code> argument can take local
              paths or remote HTTP URLs as argument.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-hyphenate-patterns">
                <code>prince-hyphenate-patterns</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-hyphenate-patterns-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-hyphenate-after">
          hyphenate-after*{" "}
          <a
            href="#prop-hyphenate-after"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-hyphenate-after-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>hyphenate-after: <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-hyphenate-after-comments">
              Comments
            </div>
            <p>
              This property specifies the minimum number of
              letters in a word that may be moved to the next
              line when the word is hyphenated.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-hyphenate-after">
                <code>prince-hyphenate-after</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-hyphenate-after-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-hyphenate-before">
          hyphenate-before*{" "}
          <a
            href="#prop-hyphenate-before"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-hyphenate-before-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>hyphenate-before: <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-hyphenate-before-comments">
              Comments
            </div>
            <p>
              This property specifies the minimum number of
              letters in a word that may be left at the end of a
              line when the word is hyphenated.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-hyphenate-before">
                <code>prince-hyphenate-before</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-hyphenate-before-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-hyphenate-character">
          hyphenate-character*{" "}
          <a
            href="#prop-hyphenate-character"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-hyphenate-character-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    hyphenate-character: auto |&nbsp;"string"
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-hyphenate-character-comments">
              Comments
            </div>
            <p>
              This property specifies the character that is
              shown at the end of a line when the word is
              hyphenated.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-hyphenate-character">
                <code>prince-hyphenate-character</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-hyphenate-character-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-hyphenate-lines">
          hyphenate-lines*{" "}
          <a
            href="#prop-hyphenate-lines"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-hyphenate-lines-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>hyphenate-lines: no-limit |&nbsp;
                  <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>no-limit</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-hyphenate-lines-comments">
              Comments
            </div>
            <p>
              This property specifies the maximum number of
              consecutive lines that may end with a hyphenated
              word.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-hyphenate-limit-lines">
                <code>prince-hyphenate-limit-lines</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-hyphenate-lines-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-hyphenate-lines-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-4/#hyphenate-line-limits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-image-resolution">
          image-resolution*{" "}
          <a
            href="#prop-image-resolution"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-image-resolution-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>image-resolution: <i>dpi</i> |&nbsp;normal
                  |&nbsp;auto [ , normal |&nbsp;<i>dpi</i> ]?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>image elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-image-resolution-comments">
              Comments
            </div>
            <p>
              This property determines the resolution of an
              image. The value <code>normal</code>means 96dpi,
              or else the current CSS DPI setting. A custom DPI
              value can also be specified. The value{" "}
              <code>auto</code> means to check the original
              resolution of the image. One can specify a second
              value, as for example <code>auto, normal</code>or{" "}
              <code>auto, 300dpi</code> in order to check the
              original resolution of the image first, and to
              fall back on the second value if the image doesn't
              contain resolution information.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-image-resolution">
                <code>prince-image-resolution</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-image-resolution-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#image-size">
                  Image Size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-image-orientation">
          image-orientation{" "}
          <a
            href="#prop-image-orientation"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-image-orientation-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    image-orientation: none |&nbsp;from-image
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-image-orientation-comments">
              Comments
            </div>
            <p>
              This property adds support for the orientation
              field in the EXIF data of JPEG and TIFF images.
            </p>
            <p className="note">
              The property applies only to content images (e.g.
              replaced elements and generated content), not
              decorative images (such as{" "}
              <code>background-image</code>).
            </p>
          </div>
          <div>
            <div id="prop-image-orientation-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-images-3/#propdef-image-orientation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Images Module Level 3 - Editor's Draft
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-justify-content">
          justify-content{" "}
          <a
            href="#prop-justify-content"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-justify-content-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    justify-content: flex-start |&nbsp;flex-end
                    |&nbsp;center |&nbsp;space-between
                    |&nbsp;space-around
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>flex-start</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>flex containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-justify-content-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#justify-content-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-left">
          left <a href="#prop-left" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-left-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>left: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>positioned elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-left-comments">Comments</div>
            <p>
              This property determines the left offset for
              positioned elements (ie. elements with a{" "}
              <a href="#prop-position">position</a>value of{" "}
              <code>relative</code>, <code>absolute</code> or
              <code>fixed</code>).
            </p>
          </div>
          <div>
            <div id="prop-left-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#propdef-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-letter-spacing">
          letter-spacing{" "}
          <a
            href="#prop-letter-spacing"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-letter-spacing-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>letter-spacing: normal |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-letter-spacing-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#letter-spacing-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-line-stacking-strategy">
          line-stacking-strategy{" "}
          <a
            href="#prop-line-stacking-strategy"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-line-stacking-strategy-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    line-stacking-strategy: inline-line-height
                    |&nbsp;block-line-height |&nbsp;max-height
                    |&nbsp;grid-height
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>inline-line-height</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block-level elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-line-stacking-strategy-comments">
              Comments
            </div>
            <p>
              This property allows to choose whether individual
              lines should have their height determined based on
              their content, or whether all lines in a paragraph
              should have the same height, or a compromise where
              their heights are determined by their content and
              then rounded up to a multiple of the paragraph
              line height.
            </p>
            <p>
              The behavior define by{" "}
              <code>inline-line-height</code> is the default.
            </p>
            <p>
              The value <code>block-line-height</code> uses the
              line-height of the block element and ignores the
              actual height of the content on those lines, so
              lines will always have the same spacing regardless
              of whether they contain spans with larger font
              size of superscripts/subscripts.
            </p>
            <p>
              The value <code>grid-height</code> is like{" "}
              <code>inline-line-height</code>but each line gets
              rounded up to an integer multiple of the block
              line-height.
            </p>
            <p>
              Finally, the <code>max-height</code> value works
              like <code>inline-line-height</code>, but it
              ignores the{" "}
              <a href="#prop-line-height">line-height</a>{" "}
              property value for inline elements.
            </p>
          </div>
          <div>
            <div id="prop-line-stacking-strategy-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#paragraph-formatting">
                  Paragraph formatting
                </a>
              </li>
              <li>
                <a href="#prop-line-height">line-height</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-line-stacking-strategy-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/2002/WD-css3-linebox-20020515/#line-stacking-strategy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS3 module: line (WD 15 May 2002)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-line-height">
          line-height{" "}
          <a href="#prop-line-height" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-line-height-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>line-height: normal |&nbsp;none |&nbsp;
                  <i>number</i> |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-line-height-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#paragraph-formatting">
                  Paragraph formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-line-height-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#propdef-line-height"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-link">
          link* <a href="#prop-link" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-link-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>link: none |&nbsp;url(&nbsp;<i>target-url</i>
                  &nbsp;) |&nbsp;attr(&nbsp;<i>target-attr</i>
                  &nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-link-comments">Comments</div>
            <p>
              This property makes an element into a link to the
              specified URL.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-link">
                <code>prince-link</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-link-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-links">
                  PDF Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-list-style">
          list-style{" "}
          <a href="#prop-list-style" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-list-style-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>list-style:{" "}
                  <i>
                    <a href="#prop-list-style-image">
                      list-style-image
                    </a>
                  </i>{" "}
                  ||&nbsp;
                  <i>
                    <a href="#prop-list-style-position">
                      list-style-position
                    </a>
                  </i>{" "}
                  ||&nbsp;
                  <i>
                    <a href="#prop-list-style-type">
                      list-style-type
                    </a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>outside disc</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>list items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-list-style-comments">Comments</div>
            <p>
              The <code>list-style</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-list-style-image">
                  list-style-image
                </a>
              </li>
              <li>
                <a href="#prop-list-style-position">
                  list-style-position
                </a>
              </li>
              <li>
                <a href="#prop-list-style-type">
                  list-style-type
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-list-style-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#lists">Lists</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-list-style-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-list-style-image">
          list-style-image{" "}
          <a
            href="#prop-list-style-image"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-list-style-image-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>list-style-image: none |&nbsp;url(&nbsp;
                  <i>image-url</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>list items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-list-style-image-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#lists">Lists</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-list-style-image-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-image"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-list-style-position">
          list-style-position{" "}
          <a
            href="#prop-list-style-position"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-list-style-position-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    list-style-position: outside |&nbsp;inside
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>outside</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>list items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-list-style-position-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#lists">Lists</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-list-style-position-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-list-style-type">
          list-style-type{" "}
          <a
            href="#prop-list-style-type"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-list-style-type-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    list-style-type: box |&nbsp;check
                    |&nbsp;circle |&nbsp;diamond |&nbsp;disc
                    |&nbsp;hyphen |&nbsp;square |&nbsp;decimal
                    |&nbsp;decimal-leading-zero
                    |&nbsp;lower-roman |&nbsp;upper-roman
                    |&nbsp;lower-alpha |&nbsp;lower-latin
                    |&nbsp;upper-alpha |&nbsp;upper-latin
                    |&nbsp;lower-hexadecimal
                    |&nbsp;upper-hexadecimal |&nbsp;binary
                    |&nbsp;octal |&nbsp;asterisks
                    |&nbsp;arabic-indic |&nbsp;lower-greek
                    |&nbsp;upper-greek |&nbsp;lower-norwegian
                    |&nbsp;upper-norwegian |&nbsp;lower-russian
                    |&nbsp;upper-russian |&nbsp;lower-ukrainian
                    |&nbsp;upper-ukrainian
                    |&nbsp;lower-belarusian
                    |&nbsp;upper-belarusian
                    |&nbsp;lower-bulgarian
                    |&nbsp;upper-bulgarian |&nbsp;lower-serbian
                    |&nbsp;upper-serbian |&nbsp;persian
                    |&nbsp;urdu |&nbsp;japanese-informal
                    |&nbsp;japanese-formal |&nbsp;cjk-decimal
                    |&nbsp;simp-chinese-informal
                    |&nbsp;simp-chinese-formal
                    |&nbsp;trad-chinese-informal
                    |&nbsp;trad-chinese-formal
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>disc</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>list items</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-list-style-type-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#lists">Lists</a>
              </li>
              <li>
                <a href="/doc/gen-content#counters-and-numbering">
                  Counters and Numbering
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-list-style-type-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/generate.html#propdef-list-style-type"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-margin">
          margin <a href="#prop-margin" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-margin-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin: [ auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i> ]{"{"}1..4{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-margin-comments">Comments</div>
            <p>
              The <code>margin</code> property is a shorthand
              for setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-margin-bottom">margin-bottom</a>
              </li>
              <li>
                <a href="#prop-margin-inside">margin-inside</a>
              </li>
              <li>
                <a href="#prop-margin-left">margin-left</a>
              </li>
              <li>
                <a href="#prop-margin-outside">
                  margin-outside
                </a>
              </li>
              <li>
                <a href="#prop-margin-right">margin-right</a>
              </li>
              <li>
                <a href="#prop-margin-top">margin-top</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-margin-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-margin-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#margin-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-margin-bottom">
          margin-bottom{" "}
          <a href="#prop-margin-bottom" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-margin-bottom-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin-bottom: auto |&nbsp;<i>length</i>{" "}
                  |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-margin-bottom-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-margin-bottom-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#margin-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-margin-inside">
          margin-inside*{" "}
          <a href="#prop-margin-inside" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-margin-inside-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin-inside: auto |&nbsp;<i>length</i>{" "}
                  |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-margin-inside-comments">Comments</div>
            <p>
              The <code>margin-inside</code> property overrides
              the value of the<code>margin-right</code> property
              if the element is on a left-facing page and
              overrides the value of the{" "}
              <code>margin-left</code> property if the element
              is on a right-facing page. The result is a
              horizontal margin on the side of the element that
              is on the "inside" of the two-page spread.
            </p>
          </div>
          <div>
            <div id="prop-margin-inside-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-margin-left">
          margin-left{" "}
          <a href="#prop-margin-left" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-margin-left-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin-left: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-margin-left-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-margin-left-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#margin-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-margin-outside">
          margin-outside*{" "}
          <a
            href="#prop-margin-outside"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-margin-outside-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin-outside: auto |&nbsp;<i>length</i>{" "}
                  |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-margin-outside-comments">
              Comments
            </div>
            <p>
              The <code>margin-outside</code> property overrides
              the value of the<code>margin-left</code> property
              if the element is on a left-facing page and
              overrides the value of the{" "}
              <code>margin-right</code> property if the element
              is on a right-facing page. The result is a
              horizontal margin on the side of the element that
              is on the "outside" of the two-page spread.
            </p>
          </div>
          <div>
            <div id="prop-margin-outside-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-margin-right">
          margin-right{" "}
          <a href="#prop-margin-right" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-margin-right-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin-right: auto |&nbsp;<i>length</i>{" "}
                  |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-margin-right-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-margin-right-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#margin-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-margin-top">
          margin-top{" "}
          <a href="#prop-margin-top" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-margin-top-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>margin-top: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except elements with table
                        display types other than table-caption,
                        table and inline-table
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-margin-top-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#margin">Margin</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-margin-top-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#margin-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-marker-start">
          marker-start{" "}
          <a href="#prop-marker-start" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-marker-start-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>marker-start: none |&nbsp;url(&nbsp;
                  <i>marker-url</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-marker-start-comments">Comments</div>
            <p>
              The <code>marker-start</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-marker-start-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#MarkerStartProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-marker-mid">
          marker-mid{" "}
          <a href="#prop-marker-mid" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-marker-mid-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>marker-mid: none |&nbsp;url(&nbsp;
                  <i>marker-url</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-marker-mid-comments">Comments</div>
            <p>
              The <code>marker-mid</code> property only applies
              to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-marker-mid-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#MarkerMidProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-marker-end">
          marker-end{" "}
          <a href="#prop-marker-end" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-marker-end-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>marker-end: none |&nbsp;url(&nbsp;
                  <i>marker-url</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-marker-end-comments">Comments</div>
            <p>
              The <code>marker-end</code> property only applies
              to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-marker-end-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#MarkerEndProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-marks">
          marks <a href="#prop-marks" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-marks-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    marks: none |&nbsp;[ crop ||&nbsp;cross ]
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-marks-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} marks: crop {"}"}</code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} marks: crop cross {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-marks-comments">Comments</div>
            <p>
              This CSS at-rule descriptor, used with the
              <a href="/doc/css-refs#at-page">
                <code>@page</code>
              </a>{" "}
              at-rule, adds crop and/or cross marks to the page.
            </p>
            <p>
              Specifying <code>crop</code> and/or{" "}
              <code>cross</code> for the <code>marks</code>{" "}
              property will result in 6pt of bleed area being
              added to all four sides of the page and additional
              trim area to contain the crop marks.
            </p>
          </div>
          <div>
            <div id="prop-marks-seealso">See Also</div>
            <ul>
              <li>
                <a href="#prop-prince-mark-length">
                  prince-mark-length
                </a>
              </li>
              <li>
                <a href="#prop-prince-mark-offset">
                  prince-mark-offset
                </a>
              </li>
              <li>
                <a href="#prop-prince-mark-width">
                  prince-mark-width
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-marks-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-page-3/#marks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Paged Media Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-mask">
          mask <a href="#prop-mask" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-mask-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>mask: url(&nbsp;<i>mask</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-mask-comments">Comments</div>
            <p>
              The <code>mask</code> property is used to
              partially or fully hide an element by masking it
              with a provided image.
            </p>
          </div>
          <div>
            <div id="prop-mask-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-max-height">
          max-height{" "}
          <a href="#prop-max-height" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-max-height-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>max-height: none |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements but non-replaced inline
                        elements, table columns, and column
                        groups
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-max-height-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#min-max-heights"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-max-width">
          max-width{" "}
          <a href="#prop-max-width" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-max-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>max-width: none |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements but non-replaced inline
                        elements, table rows, and row groups
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-max-width-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#min-max-widths"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-min-height">
          min-height{" "}
          <a href="#prop-min-height" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-min-height-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>min-height: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements but non-replaced inline
                        elements, table columns, and column
                        groups
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-min-height-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#min-max-heights"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#min-size-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-min-width">
          min-width{" "}
          <a href="#prop-min-width" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-min-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>min-width: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements but non-replaced inline
                        elements, table rows, and row groups
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-min-width-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#min-max-widths"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#min-size-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-object-fit">
          object-fit{" "}
          <a href="#prop-object-fit" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-object-fit-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    object-fit: fill |&nbsp;contain |&nbsp;cover
                    |&nbsp;none |&nbsp;scale-down
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>fill</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>replaced elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-object-fit-comments">Comments</div>
            <p>
              This property specifies how the contents of a
              replaced element, such as an image, should be
              resized to fit its container.
            </p>
          </div>
          <div>
            <div id="prop-object-fit-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-images-3/#the-object-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Images Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-object-position">
          object-position{" "}
          <a
            href="#prop-object-position"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-object-position-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>object-position: <br />
                  &nbsp;&nbsp;&nbsp;[ [ left |&nbsp;center
                  |&nbsp;right ] ||&nbsp;[ top |&nbsp;center
                  |&nbsp;bottom ] ]  <br />&nbsp;&nbsp;&nbsp;|&nbsp;[
                  left |&nbsp;center |&nbsp;right |&nbsp;
                  <i>length</i> |&nbsp;<i>percent</i> ] [ top
                  |&nbsp;center |&nbsp;bottom |&nbsp;
                  <i>length</i> |&nbsp;<i>percent</i> ]? <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;[ [ left |&nbsp;right
                  ] [ <i>length</i> |&nbsp;<i>percent</i> ]
                  &amp;&amp;&nbsp;[ top |&nbsp;bottom ] [{" "}
                  <i>length</i> |&nbsp;<i>percent</i> ] ]</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>50% 50%</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>replaced elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-object-position-comments">
              Comments
            </div>
            <p>
              This property specifies how the contents of a
              replaced element, such as an image, are positioned
              in its container.
            </p>
          </div>
          <div>
            <div id="prop-object-position-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-images-3/#the-object-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Images Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-opacity">
          opacity{" "}
          <a href="#prop-opacity" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-opacity-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>opacity: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-opacity-comments">Comments</div>
            <p>Opacity is a number between 0 and 1.</p>
          </div>
          <div>
            <div id="prop-opacity-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-color/#transparency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Color Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-order">
          order <a href="#prop-order" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-order-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>order: <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        flex items and absolutely-positioned
                        children of flex containers
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-order-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-flexbox-1/#order-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Flexible Box Layout Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-orphans">
          orphans{" "}
          <a href="#prop-orphans" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-orphans-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>orphans: <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block container elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-orphans-comments">Comments</div>
            <p>
              If a paragraph is split over two pages or columns,
              this property determines the minimum number of
              lines that must be left at the bottom of the first
              page or column.
            </p>
            <p>
              Please note that the initial value has been
              changed from <code>2</code> to <code>1</code>.
            </p>
          </div>
          <div>
            <div id="prop-orphans-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#widows-and-orphans">
                  Widows and orphans
                </a>
              </li>
              <li>
                <a href="#prop-widows">widows</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-orphans-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/page.html#break-inside"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-break-3/#widows-orphans"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fragmentation Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-overflow">
          overflow{" "}
          <a href="#prop-overflow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-overflow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    overflow: visible |&nbsp;hidden |&nbsp;clip
                    |&nbsp;scroll |&nbsp;auto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>visible</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        non-replaced block-level elements and
                        non-replaced inline-block elements
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-overflow-comments">Comments</div>
            <p>
              This property determines the visibility of content
              that overflows outside the boundaries of an
              element.
            </p>
            <p>
              Please note that the value <code>scroll</code>{" "}
              does not actually scroll, but establishes a new
              block formatting context instead - other than
              that, it is treated the same as{" "}
              <code>visible</code>.
            </p>
          </div>
          <div>
            <div id="prop-overflow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visufx.html#overflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://drafts.csswg.org/css-overflow-3/#propdef-overflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Overflow Module Level 3 Draft
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-overflow-wrap">
          overflow-wrap{" "}
          <a href="#prop-overflow-wrap" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-overflow-wrap-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    overflow-wrap: normal |&nbsp;break-word
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-overflow-wrap-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>part {"{"} overflow-wrap: break-word; {"}"} <br />
                  supplier, item {"{"} overflow-wrap: normal; {"}"} <br />
                  &lt;part&gt;&lt;supplier&gt;xyz&lt;/supplier&gt;&lt;item&gt;12345&lt;/item&gt;&lt;/part&gt;</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-overflow-wrap-comments">Comments</div>
            <p>
              This property controls wrapping behavior of last
              resort: whether it is better for a word to
              overflow its container, or to be broken at an
              arbitrary point (subject to{" "}
              <code>white-space</code>, and not splitting within
              a grapheme cluster), without adding a hyphen.
            </p>
            <p>
              The value <code>normal</code> allows text
              containing no other wrap opportunities to
              overflow.
            </p>
            <p>
              This feature is most commonly used for non-words
              such as URIs, part codes, or cryptographic hashes.
              For such purposes,{" "}
              <code>overflow-wrap:break-word</code> can be
              compared with <code>word-break:break-all</code>:
              the latter is more willing to break the word
              (preferring to break than to leave an under-full
              line or advance past a CSS2-style float), but only
              breaks between alpha-numeric grapheme clusters
              rather than between any pair of grapheme clusters.
            </p>
            <p>
              The element whose <code>overflow-wrap</code>{" "}
              property controls whether such a wrap opportunity
              exists at a given boundary is the closest ancestor
              that “strictly contains” the boundary, i.e. that
              contains text from both sides of the boundary.
              Thus, components of a wrappable string can be kept
              on one line by styling each component with{" "}
              <code>overflow-wrap:normal</code>even if two
              components are directly adjacent to each other, as
              seen in the above example.
            </p>
          </div>
          <div>
            <div id="prop-overflow-wrap-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#paragraph-formatting">
                  Paragraph formatting
                </a>
              </li>
              <li>
                <a href="#prop-word-break">word-break</a>
              </li>
              <li>
                <a href="#prop-prince-wrap-inside">
                  prince-wrap-inside
                </a>
              </li>
              <li>
                <a href="#prop-white-space">white-space</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-overflow-wrap-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#overflow-wrap-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-padding">
          padding{" "}
          <a href="#prop-padding" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-padding-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>padding: [ <i>length</i> |&nbsp;<i>percent</i>{" "}
                  ]{"{"}1..4{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except table-row-group,
                        table-header-group, table-footer-group,
                        table-row, table-column-group and
                        table-column
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-padding-comments">Comments</div>
            <p>
              The <code>padding</code> property is a shorthand
              for setting the following CSS properties:
            </p>
            <ul>
              <li>
                <a href="#prop-padding-bottom">
                  padding-bottom
                </a>
              </li>
              <li>
                <a href="#prop-padding-left">padding-left</a>
              </li>
              <li>
                <a href="#prop-padding-right">padding-right</a>
              </li>
              <li>
                <a href="#prop-padding-top">padding-top</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-padding-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#padding">Padding</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-padding-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#padding-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-padding-bottom">
          padding-bottom{" "}
          <a
            href="#prop-padding-bottom"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-padding-bottom-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>padding-bottom: <i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except table-row-group,
                        table-header-group, table-footer-group,
                        table-row, table-column-group and
                        table-column
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-padding-bottom-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#padding">Padding</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-padding-bottom-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#padding-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-padding-left">
          padding-left{" "}
          <a href="#prop-padding-left" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-padding-left-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>padding-left: <i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except table-row-group,
                        table-header-group, table-footer-group,
                        table-row, table-column-group and
                        table-column
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-padding-left-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#padding">Padding</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-padding-left-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#padding-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-padding-right">
          padding-right{" "}
          <a href="#prop-padding-right" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-padding-right-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>padding-right: <i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except table-row-group,
                        table-header-group, table-footer-group,
                        table-row, table-column-group and
                        table-column
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-padding-right-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#padding">Padding</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-padding-right-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#padding-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-padding-top">
          padding-top{" "}
          <a href="#prop-padding-top" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-padding-top-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>padding-top: <i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements, except table-row-group,
                        table-header-group, table-footer-group,
                        table-row, table-column-group and
                        table-column
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-padding-top-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#padding">Padding</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-padding-top-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/box.html#padding-properties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-page">
          page <a href="#prop-page" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-page-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>page: auto |&nbsp;<i>name</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-page-comments">Comments</div>
            <p>
              This property determines which named page, if any,
              the current element should be placed on. See the
              documentation for{" "}
              <a href="/doc/paged#selecting-pages">
                Selecting pages
              </a>
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-page-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-page/#using-named-pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Paged Media Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-page-break-after">
          page-break-after{" "}
          <a
            href="#prop-page-break-after"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-page-break-after-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    page-break-after: auto |&nbsp;always
                    |&nbsp;avoid |&nbsp;left |&nbsp;right
                    |&nbsp;verso |&nbsp;recto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        block-level elements in the normal flow
                        of the root element
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-page-break-after-comments">
              Comments
            </div>
            <p>
              This property can be used to force or suppress
              page breaks after an element. Prince expands the
              property with the values <code>verso</code> and
              <code>recto</code>.
            </p>
            <p className="note">
              This property is deprecated. Use the property{" "}
              <a href="#prop-break-after">break-after</a>
              instead. See the documentation for{" "}
              <a href="/doc/paged#page-breaks">Page breaks</a>{" "}
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-page-break-after-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-break-after">break-after</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-page-break-after-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/page.html#propdef-page-break-after"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-page-break-before">
          page-break-before{" "}
          <a
            href="#prop-page-break-before"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-page-break-before-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    page-break-before: auto |&nbsp;always
                    |&nbsp;avoid |&nbsp;left |&nbsp;right
                    |&nbsp;verso |&nbsp;recto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        block-level elements in the normal flow
                        of the root element
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-page-break-before-comments">
              Comments
            </div>
            <p>
              This property can be used to force or suppress
              page breaks before an element. Prince expands the
              property with the values <code>verso</code> and
              <code>recto</code>.
            </p>
            <p className="note">
              This property is deprecated. Use the property{" "}
              <a href="#prop-break-before">break-before</a>
              instead. See the documentation for{" "}
              <a href="/doc/paged#page-breaks">Page breaks</a>{" "}
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-page-break-before-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-break-before">break-before</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-page-break-before-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/page.html#propdef-page-break-before"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-page-break-inside">
          page-break-inside{" "}
          <a
            href="#prop-page-break-inside"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-page-break-inside-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    page-break-inside: auto |&nbsp;avoid
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        block-level elements in the normal flow
                        of the root element
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-page-break-inside-comments">
              Comments
            </div>
            <p>
              This property can be used to suppress page breaks
              inside an element.
            </p>
            <p className="note">
              This property is deprecated. Use the property{" "}
              <a href="#prop-break-inside">break-inside</a>
              instead. See the documentation for{" "}
              <a href="/doc/paged#page-breaks">Page breaks</a>{" "}
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-page-break-inside-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-break-inside">break-inside</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-page-break-inside-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/page.html#propdef-page-break-before"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-page-group">
          page-group*{" "}
          <a href="#prop-page-group" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-page-group-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>page-group: start |&nbsp;auto</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-page-group-comments">Comments</div>
            <p>
              This property determines whether the first page of
              this element matches the :first page class
              selector.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-page-group">
                <code>prince-page-group</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-page-group-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-groups">Page groups</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-position">
          position{" "}
          <a href="#prop-position" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-position-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>position: static |&nbsp;relative
                  |&nbsp;absolute |&nbsp;fixed
                  |&nbsp;running(&nbsp;<i>name</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>static</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-position-comments">Comments</div>
            <p>
              The <code>running()</code> function removes the
              element from the normal document flow and makes it
              available to be placed in a page region with the
              <code>element()</code> function of the{" "}
              <a href="#prop-content">content</a>property. See
              also{" "}
              <a href="/doc/gen-content#taking-elements-from-the-document">
                Taking elements from the document
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-position-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-regions">
                  Page regions
                </a>
              </li>
              <li>
                <a href="/doc/gen-content#taking-elements-from-the-document">
                  Taking elements from the document
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-position-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#propdef-position"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-gcpm-3/#running-syntax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Generated Content for Paged Media Module
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-alt-text">
          prince-alt-text*{" "}
          <a
            href="#prop-prince-alt-text"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-alt-text-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-alt-text: auto |&nbsp;none
                    |&nbsp;"string"
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-alt-text-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>span {"{"} prince-alt-text: attr(aria-label); {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-alt-text-comments">
              Comments
            </div>
            <p>
              This property can be used to tell Prince what to
              show as an alternate text.
            </p>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-background-image-resolution"
        >
          prince-background-image-resolution*{" "}
          <a
            href="#prop-prince-background-image-resolution"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-background-image-resolution-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-background-image-resolution: <i>dpi</i>{" "}
                  |&nbsp;normal |&nbsp;auto [ , normal |&nbsp;
                  <i>dpi</i> ]?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>background image elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-background-image-resolution-comments">
              Comments
            </div>
            <p>
              This property determines the resolution of a
              background image. The value <code>normal</code>
              means 96dpi, or else the current CSS DPI setting.
              A custom DPI value can also be specified. The
              value <code>auto</code> means to check the
              original resolution of the image. One can specify
              a second value, as for example{" "}
              <code>auto, normal</code>or{" "}
              <code>auto, 300dpi</code> in order to check the
              original resolution of the image first, and to
              fall back on the second value if the image doesn't
              contain resolution information.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-background-image-resolution">
                <code>background-image-resolution</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-background-image-resolution-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#image-size">
                  Image Size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-bookmark-label"
        >
          prince-bookmark-label*{" "}
          <a
            href="#prop-prince-bookmark-label"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-bookmark-label-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-bookmark-label: none |&nbsp;
                  <i>content</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>content()</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-bookmark-label-comments">
              Comments
            </div>
            <p>
              This property is used to determine the text
              content of the PDF bookmark generated by the
              current element.
            </p>
            <p>
              Several ways of creating content are here defined
              by means of functions - the detailed explanation
              can be found in the{" "}
              <a href="/doc/gen-content#generated-content-functions">
                Generated Content Functions
              </a>
              section.
            </p>
            <p className="note">
              Even though the initial value for this property is
              <code>content()</code>, no PDF bookmark will be
              generated by default as the initial value for the{" "}
              <a href="#prop-prince-bookmark-level">
                prince-bookmark-level
              </a>
              property is <code>none</code>.
            </p>
            <p>
              See the documentation for{" "}
              <a href="/doc/prince-output#pdf-bookmarks">
                PDF Bookmarks
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-bookmark-label">
                <code>bookmark-label</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-bookmark-label-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/gen-content#generated-content-functions">
                  Generated Content Functions
                </a>
              </li>
              <li>
                <a href="/doc/prince-output#bookmark-labels">
                  Bookmark labels
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-prince-bookmark-label-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#'bookmark-label'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-bookmark-level"
        >
          prince-bookmark-level*{" "}
          <a
            href="#prop-prince-bookmark-level"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-bookmark-level-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-bookmark-level: none |&nbsp;
                  <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-bookmark-level-comments">
              Comments
            </div>
            <p>
              This property is used to determine the numeric
              level in the bookmark hierarchy of the PDF
              bookmark generated by the current element. See the
              documentation for{" "}
              <a href="/doc/prince-output#pdf-bookmarks">
                PDF Bookmarks
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-bookmark-level">
                <code>bookmark-level</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-bookmark-level-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#bookmark-levels">
                  Bookmark levels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-prince-bookmark-level-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#'bookmark-level'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-bookmark-state"
        >
          prince-bookmark-state*{" "}
          <a
            href="#prop-prince-bookmark-state"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-bookmark-state-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-bookmark-state: open |&nbsp;closed
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>open</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-bookmark-state-comments">
              Comments
            </div>
            <p>
              This property is used to determine whether the
              bookmark tree item is open or closed when the PDF
              is first viewed. In this way you can close each
              chapter and hide the subsections for documents
              that are very long, or you can choose to have a
              deep bookmark tree.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-bookmark-state">
                <code>bookmark-state</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-bookmark-state-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#bookmark-levels">
                  Bookmark levels
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-prince-bookmark-state-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#'bookmark-state'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-bookmark-target"
        >
          prince-bookmark-target*{" "}
          <a
            href="#prop-prince-bookmark-target"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-bookmark-target-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-bookmark-target: self |&nbsp;url(&nbsp;
                  <i>target-url</i>&nbsp;) |&nbsp;attr(&nbsp;
                  <i>target-attr</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>self</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-bookmark-target-comments">
              Comments
            </div>
            <p>
              This property is used to determine the link target
              for the PDF bookmark generated by the current
              element. See the documentation for{" "}
              <a href="/doc/prince-output#pdf-bookmarks">
                PDF Bookmarks
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-bookmark-target">
                <code>bookmark-target</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-bookmark-target-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#bookmark-targets">
                  Bookmark targets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-caption-page">
          prince-caption-page*{" "}
          <a
            href="#prop-prince-caption-page"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-caption-page-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-caption-page: first |&nbsp;following
                    |&nbsp;all
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>first</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-caption-page-comments">
              Comments
            </div>
            <p>
              This property determines whether table captions
              will be displayed on the first page of a table, or
              only on following pages, or repeated on every page
              that a table appears on.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-caption-page">
                <code>caption-page</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-caption-page-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#table-captions">
                  Table captions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-expansion-text"
        >
          prince-expansion-text*{" "}
          <a
            href="#prop-prince-expansion-text"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-expansion-text-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-expansion-text: auto |&nbsp;none
                    |&nbsp;"string"
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>inline elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-expansion-text-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>abbr {"{"} prince-expansion-text: attr(title); {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-expansion-text-comments">
              Comments
            </div>
            <p>
              This property can be used for specific elements, such as e.g. <code>abbr</code> and <code>acronym</code>,{" "}
              to tell Prince what to show as an expansion text, which is crucial when producing tagged PDF files.
            </p>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-fallback-cmyk-profile"
        >
          prince-fallback-cmyk-profile*{" "}
          <a
            href="#prop-prince-fallback-cmyk-profile"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-fallback-cmyk-profile-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-fallback-cmyk-profile: url(&nbsp;
                  <i>filename</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-fallback-cmyk-profile-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-output-intent: url("AdobeRGB1998.icc"); <br />
                  &nbsp;&nbsp;prince-fallback-cmyk-profile: url("ISOcoated_v2_eci.icc"); <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-fallback-cmyk-profile-comments">
              Comments
            </div>
            <p>
              This property is used inside a
              <a href="/doc/css-refs#at-prince-pdf">
                <code>@prince-pdf</code>
              </a>
              at-rule to determine a fallback CMYK profile to be
              used for uncalibrated (untagged) CMYK colors or
              images, if it is not possible to use the output
              intent ICC profile (see{" "}
              <a href="#prop-prince-pdf-output-intent">
                prince-pdf-output-intent
              </a>
              ).
            </p>
            <p>
              CMYK colors are treated as uncalibrated in either
              of the following three cases: conversion of an
              untagged CMYK image to another color space,
              conversion of a device dependent CMYK color, or
              when a PDF Profile requires that only device
              independent color is present, in which case both
              untagged CMYK images and device dependent CMYK
              colors are treated as uncalibrated CMYK colors.
            </p>
          </div>
          <div>
            <div id="prop-prince-fallback-cmyk-profile-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-prince-pdf-output-intent">
                  prince-pdf-output-intent
                </a>
              </li>
              <li>
                <a href="/doc/graphics#color-management">
                  Color Management
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-filter-resolution"
        >
          prince-filter-resolution*{" "}
          <a
            href="#prop-prince-filter-resolution"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-filter-resolution-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-filter-resolution: <i>dpi</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>96dpi</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements, @prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-filter-resolution-comments">
              Comments
            </div>
            <p>
              This property is used to specify the resolution
              used when rasterizing to images for applying CSS
              and SVG filters. It can be used for individual
              elements, or inside a
              <a href="/doc/css-refs#at-prince-pdf">
                <code>@prince-pdf</code>
              </a>
              at-rule. In this latter case, it affects all
              filters in the document.
            </p>
          </div>
          <div>
            <div id="prop-prince-filter-resolution-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#filters">Filters</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-flow">
          prince-flow*{" "}
          <a href="#prop-prince-flow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-prince-flow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-flow: normal |&nbsp;static(&nbsp;
                  <i>name</i>, [ start |&nbsp;current ]?&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-flow-comments">Comments</div>
            <p>
              This property is used to remove elements from the
              normal flow of the document, to be placed in a
              page region with{" "}
              <a href="#prop-content">content</a>: flow(), in
              order to create running page headers and footers.
            </p>
            <p>
              The optional <code>start</code> argument (default
              is <code>current</code>) makes the fetched content
              available, as if it were fetched from the start of
              the document.
            </p>
            <p>
              See the documentation for{" "}
              <a href="/doc/gen-content#taking-elements-from-the-document">
                Taking elements from the document
              </a>{" "}
              for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-flow">
                <code>flow</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-flow-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-regions">
                  Page regions
                </a>
              </li>
              <li>
                <a href="/doc/gen-content#taking-elements-from-the-document">
                  Taking elements from the document
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-prince-flow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#flowing-content-to-a-named-area:-'flow'"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-footnote-policy"
        >
          prince-footnote-policy*{" "}
          <a
            href="#prop-prince-footnote-policy"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-footnote-policy-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-footnote-policy: auto
                    |&nbsp;keep-with-line |&nbsp;keep-with-block
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>footnote elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-footnote-policy-comments">
              Comments
            </div>
            <p>
              This property determines whether a footnote should
              always be displayed on the same page as its
              footnote call is located on, or whether it may
              slip to the next page. The value{" "}
              <code>keep-with-line</code> instructs Prince to
              keep the footnote on the same page as the line
              with the footnote call, while{" "}
              <code>keep-with-block</code>tells Prince to keep
              it together with the whole paragraph with the
              footnote call.
            </p>
            <p className="note">
              The property must be applied to the paragraph in
              which the footnote occurs, not to the footnote
              element itself.
            </p>
          </div>
          <div>
            <div id="prop-prince-footnote-policy-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#footnotes">Footnotes</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-forced-breaks">
          prince-forced-breaks*{" "}
          <a
            href="#prop-prince-forced-breaks"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-forced-breaks-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-forced-breaks: short |&nbsp;full
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>short</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-forced-breaks-comments">
              Comments
            </div>
            <p>
              This property controls whether a line ended by a
              “preserved newline” (such as introduced by{" "}
              <code>&lt;br&gt;</code>) should preferably appear
              to be a normal full line (as if ended only by
              normal line wrapping), or whether being shorter
              than a normal full line is actually preferable,
              for example to mark a deliberate break.
            </p>
            <p>
              The difference is particularly marked in justified
              text, where lines ended by{" "}
              <code>prince-forced-breaks:full</code> are subject
              to justification like most other lines.
            </p>
            <p>
              (Limitation: At the time of writing, this property
              only affects justified text.)
            </p>
            <p>
              This property only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-prince-forced-breaks-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-for-books#line-breaking">
                  Line breaking
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#the-property-prince-forced-breaks">
                  The property prince-forced-breaks
                </a>
              </li>
              <li>
                <a href="#prop-text-align-last">
                  text-align-last
                </a>
              </li>
              <li>
                <a href="#prop-white-space">white-space</a>
              </li>
              <li>
                <a href="#prop-prince-wrap-inside">
                  prince-wrap-inside
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-hyphenate-patterns"
        >
          prince-hyphenate-patterns*{" "}
          <a
            href="#prop-prince-hyphenate-patterns"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-hyphenate-patterns-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-hyphenate-patterns: none
                  |&nbsp;url(&nbsp;<i>patterns-url</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-hyphenate-patterns-comments">
              Comments
            </div>
            <p>
              This property is used to point to a hyphenation
              dictionary. Normally this is selected
              automatically, based on the current language.
            </p>
            <p>
              The <code>url()</code> argument can take local
              paths or remote HTTP URLs as argument.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-hyphenate-patterns">
                <code>hyphenate-patterns</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-hyphenate-patterns-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-hyphenate-after"
        >
          prince-hyphenate-after*{" "}
          <a
            href="#prop-prince-hyphenate-after"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-hyphenate-after-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-hyphenate-after: <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-hyphenate-after-comments">
              Comments
            </div>
            <p>
              This property specifies the minimum number of
              letters in a word that may be moved to the next
              line when the word is hyphenated.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-hyphenate-after">
                <code>hyphenate-after</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-hyphenate-after-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-hyphenate-before"
        >
          prince-hyphenate-before*{" "}
          <a
            href="#prop-prince-hyphenate-before"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-hyphenate-before-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-hyphenate-before: <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-hyphenate-before-comments">
              Comments
            </div>
            <p>
              This property specifies the minimum number of
              letters in a word that may be left at the end of a
              line when the word is hyphenated.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-hyphenate-before">
                <code>hyphenate-before</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-hyphenate-before-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-hyphenate-character"
        >
          prince-hyphenate-character*{" "}
          <a
            href="#prop-prince-hyphenate-character"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-hyphenate-character-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-hyphenate-character: auto
                    |&nbsp;"string"
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-hyphenate-character-comments">
              Comments
            </div>
            <p>
              This property specifies the character that is
              shown at the end of a line when the word is
              hyphenated.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-hyphenate-character">
                <code>hyphenate-character</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-hyphenate-character-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-hyphenate-limit-lines"
        >
          prince-hyphenate-limit-lines*{" "}
          <a
            href="#prop-prince-hyphenate-limit-lines"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-hyphenate-limit-lines-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-hyphenate-limit-lines: no-limit |&nbsp;
                  <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>no-limit</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-hyphenate-limit-lines-comments">
              Comments
            </div>
            <p>
              This property specifies the maximum number of
              consecutive lines that may end with a hyphenated
              word.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-hyphenate-lines">
                <code>hyphenate-lines</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-hyphenate-limit-lines-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-prince-hyphenate-limit-lines-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-4/#hyphenate-line-limits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-hyphenate-lines"
        >
          prince-hyphenate-lines*{" "}
          <a
            href="#prop-prince-hyphenate-lines"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-hyphenate-lines-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-hyphenate-lines: no-limit |&nbsp;
                  <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>no-limit</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-hyphenate-lines-comments">
              Comments
            </div>
            <p>
              This property specifies the maximum number of
              consecutive lines that may end with a hyphenated
              word.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-hyphenate-limit-lines">
                <code>prince-hyphenate-limit-lines</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-hyphenate-lines-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#hyphenation">
                  Hyphenation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-prince-hyphenate-lines-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-4/#hyphenate-line-limits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-image-magic">
          prince-image-magic*{" "}
          <a
            href="#prop-prince-image-magic"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-image-magic-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-image-magic: none |&nbsp;[
                  snap-to-integer-coords
                  ||&nbsp;ignore-icc-profile ||&nbsp;[
                  jpeg-verbatim |&nbsp;recompress-jpeg(&nbsp;
                  <i>percent</i>&nbsp;) ] ||&nbsp;[
                  convert-to-jpeg |&nbsp;convert-to-jpeg(&nbsp;
                  <i>percent</i>&nbsp;) ] ]</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>image elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-image-magic-comments">
              Comments
            </div>
            <p>
              This property performs various image-related,
              Prince-specific tasks that do not fit into other
              existing CSS properties. It applies magic to
              images!
            </p>
            <p>
              The <code>snap-to-integer-coords</code> value can
              be used to avoid blurring of images in some PDF
              viewers.
            </p>
            <p>
              The <code>ignore-icc-profile</code> value causes
              Prince to ignore any ICC color profile embedded in
              the image.
            </p>
            <p>
              The <code>jpeg-verbatim</code> value inhibits the
              normal stripping that Prince performs, where
              unnecessary metadata is removed from JPEG images
              when they are embedded in the PDF file.
            </p>
            <p>
              When <code>recompress-jpeg(quality%)</code> is
              specified for this property, Prince will
              recompress JPEG images to the specified percentage
              to save space when embedding them in the PDF
              output.
            </p>
            <p>
              The <code>convert-to-jpeg</code> keyword or the{" "}
              <code>convert-to-jpeg(quality%)</code>function
              convert non-JPEG images to JPEG, so that they take
              less space (but may look blurry).
            </p>
            <p className="note">
              Several of the values can be combined, to perform
              more than one magic on images.
            </p>
          </div>
          <div>
            <div id="prop-prince-image-magic-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#image-size">
                  Image Size
                </a>
              </li>
              <li>
                <a href="/doc/cookbook#image-magic">
                  Image Magic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-image-resolution"
        >
          prince-image-resolution*{" "}
          <a
            href="#prop-prince-image-resolution"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-image-resolution-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-image-resolution: <i>dpi</i>{" "}
                  |&nbsp;normal |&nbsp;auto [ , normal |&nbsp;
                  <i>dpi</i> ]?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>image elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-image-resolution-comments">
              Comments
            </div>
            <p>
              This property determines the resolution of an
              image. The value <code>normal</code>means 96dpi,
              or else the current CSS DPI setting. A custom DPI
              value can also be specified. The value{" "}
              <code>auto</code> means to check the original
              resolution of the image. One can specify a second
              value, as for example <code>auto, normal</code>or{" "}
              <code>auto, 300dpi</code> in order to check the
              original resolution of the image first, and to
              fall back on the second value if the image doesn't
              contain resolution information.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-image-resolution">
                <code>image-resolution</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-image-resolution-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#image-size">
                  Image Size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-linebreak-magic"
        >
          prince-linebreak-magic*{" "}
          <a
            href="#prop-prince-linebreak-magic"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-linebreak-magic-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-linebreak-magic: none |&nbsp;auto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-linebreak-magic-comments">
              Comments
            </div>
            <p>
              This property enables line-breaking in certain
              situations even in the absence of whitespace. For
              example, after slashes in long URLs. It can be
              disabled for situations in which more precise
              control over line-breaking behavior is preferred.
            </p>
          </div>
          <div>
            <div id="prop-prince-linebreak-magic-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#paragraph-formatting">
                  Paragraph formatting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-line-break-choices"
        >
          prince-line-break-choices*{" "}
          <a
            href="#prop-prince-line-break-choices"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-line-break-choices-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-line-break-choices: body
                    |&nbsp;heading |&nbsp;title
                    |&#160;body-gready |&nbsp;body-lookahead
                    |&#160;heading-gready |&nbsp;heading-lookahead
                    |&#160;title-gready |&nbsp;title-lookahead |&nbsp;fast
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>body</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-line-break-choices-comments">
              Comments
            </div>
            <p>
              This property is used for fine tuning the line
              breaking approach.
            </p>
            <p>
              The keyword <code>title</code> is intended for
              title pages of books or chapters, where phrasing
              considerations are of prime consideration even at
              the cost of extremely unbalanced lines.
            </p>
            <p>
              The keyword <code>heading</code>, on the other
              hand, is closer to<code>body</code>, differing
              mainly in that it's less likely to hyphenate, and
              is more willing to make the first line(s) a little
              shorter if doing so avoids a short last line.
            </p>
            <p>
              The <code>\*-greedy</code> keywords decide on line
              breaks solely based on the current line and on the
              length of the next word, never going back to change
              a decision on a line in the light of line-breaknig
              issues encountered later.
            </p>
            <p>
              The <code>\*-lookahead</code> keywords, on the other
              hand, enable paragraph-at-a-time line-breaking not
              just based on what seems best for the current line,
              but also considering the effect on future lines.
            </p>
            <p>
              The keyword <code>fast</code> can be used for
              quick web-browers–style line breaking, useful for
              testing the effect of styling changes that don't
              depend on good line breaking.
            </p>
            <p>
              For more details, please see{" "}
              <a href="/doc/prince-for-books#line-breaking">
                Line breaking
              </a>
              .
            </p>
            <p>
              This property only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              .
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-text-wrap">
                <code>prince-text-wrap</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-line-break-choices-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-for-books#line-breaking">
                  Line breaking
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#the-property-prince-line-break-choices">
                  The property prince-line-break-choices
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-link">
          prince-link*{" "}
          <a href="#prop-prince-link" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-prince-link-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-link: none |&nbsp;url(&nbsp;
                  <i>target-url</i>&nbsp;) |&nbsp;attr(&nbsp;
                  <i>target-attr</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-link-comments">Comments</div>
            <p>
              This property makes an element into a link to the
              specified URL.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-link">
                <code>link</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-link-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-links">
                  PDF Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-mark-length">
          prince-mark-length*{" "}
          <a
            href="#prop-prince-mark-length"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-mark-length-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-mark-length: <i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>24pt</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-mark-length-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} prince-mark-length: 2cm {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-mark-length-comments">
              Comments
            </div>
            <p>
              This CSS at-rule descriptor can be used to specify
              the length of crop marks, beginning after the
              offset from the page area and extending towards
              the edge of the paper.
            </p>
          </div>
          <div>
            <div id="prop-prince-mark-length-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-marks">marks</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-mark-offset">
          prince-mark-offset*{" "}
          <a
            href="#prop-prince-mark-offset"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-mark-offset-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-mark-offset: auto |&nbsp;[{" "}
                  <i>length</i> ]{"{"}1..4{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-mark-offset-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} prince-mark-offset: 6pt {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-mark-offset-comments">
              Comments
            </div>
            <p>
              This CSS at-rule descriptor can be used to specify
              the offset between crop and cross marks and the
              page area.
            </p>
          </div>
          <div>
            <div id="prop-prince-mark-offset-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-marks">marks</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-mark-width">
          prince-mark-width*{" "}
          <a
            href="#prop-prince-mark-width"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-mark-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-mark-width: <i>width</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0.1pt</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-mark-width-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} prince-mark-width: 1pt {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-mark-width-comments">
              Comments
            </div>
            <p>
              This CSS at-rule descriptor can be used to specify
              the line width of the crop and cross marks.
            </p>
          </div>
          <div>
            <div id="prop-prince-mark-width-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-marks">marks</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-n-lines">
          prince-n-lines*{" "}
          <a
            href="#prop-prince-n-lines"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-n-lines-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-n-lines: auto |&nbsp;<i>integer</i>? [
                  longer |&nbsp;shorter ] |&nbsp;change |&nbsp;
                  <i>integer</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        "paragraphs": block container boxes that
                        establish inline formatting contexts
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-n-lines-comments">
              Comments
            </div>
            <p>
              This property is for use in the pagination phase
              of typesetting, for ensuring that page ends are
              even while avoiding widows and other awkward
              breaks.
            </p>
            <p>
              Values other than the initial value of{" "}
              <code>auto</code> request that the paragraph
              occupy the given number of lines; where values
              other than a simple integer are relative to the
              number of lines that the paragraph would have
              occupied if this property still had its initial
              value (<code>auto</code>).
            </p>
            <p>
              The value <code>change</code> means to make the
              paragraph either a line longer or shorter,
              whichever will be deemed to look better. This
              value is provided for the common case that a page
              break opportunity exists both at a line earlier
              and at a line later than where the page end would
              naturally fall, as would typically be the case if
              the only relevant restriction arises from{" "}
              <code>widows:2</code> or <code>orphans:2</code> or
              a minor heading that occupies two body lines worth
              of height. Thus, this tends to be the most
              commonly used value for this property, other than
              leaving at its initial value.
            </p>
            <p>
              A simple integer value is the least convenient
              value to use (since choosing the desired number
              requires counting the existing number of lines,
              and since this property is most commonly used on
              long paragraphs). Its value lies in the fact that
              the result is not subject to variation in "the
              number of lines that the paragraph would otherwise
              have had", as can occur if this paragraph spans a
              page end, and a subsequent styling change causes
              some earlier content to change in size, affecting
              what is the last line before the break, and if
              this in turn affects line-breaking decisions made
              to avoid having a hyphenation at the end of a
              page.
            </p>
            <p>
              This property only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-prince-n-lines-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/prince-for-books#spread-balancing">
                  Spread Balancing
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#the-property-prince-n-lines">
                  The property prince-n-lines
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-page-fill">
          prince-page-fill*{" "}
          <a
            href="#prop-prince-page-fill"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-page-fill-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-page-fill: prefer-balance
                    |&nbsp;prefer-fill
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>prefer-fill</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-page-fill-comments">
              Comments
            </div>
            <p>
              This property determines whether Prince should
              balance text layout on page spreads.
            </p>
            <p>
              This property only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-prince-page-fill-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-for-books#spread-balancing">
                  Spread Balancing
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#the-property-prince-n-lines">
                  The property prince-n-lines
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-page-group">
          prince-page-group*{" "}
          <a
            href="#prop-prince-page-group"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-page-group-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-page-group: start |&nbsp;auto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-page-group-comments">
              Comments
            </div>
            <p>
              This property determines whether the first page of
              this element matches the :first page class
              selector.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-page-group">
                <code>page-group</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-page-group-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/paged#page-groups">Page groups</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-color-conversion"
        >
          prince-pdf-color-conversion*{" "}
          <a
            href="#prop-prince-pdf-color-conversion"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-color-conversion-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-color-conversion: auto
                    |&nbsp;none
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-color-conversion-comments">
              Comments
            </div>
            <p>
              As a property,{" "}
              <code>prince-pdf-color-conversion</code>is applied
              to elements in order to convert the colors of the
              elements to the output intent color space, if
              provided. The value <code>none</code>can be used
              to prevent color conversion for individual
              elements if the document itself is converted.
            </p>
            <p className="note">
              The same property, used as a descriptor in the{" "}
              <code>@prince-pdf</code>at-rule, has a different
              syntax - see{" "}
              <a href="#prop-prince-pdf-color-conversion-syntax2">
                below
              </a>
              .
            </p>
          </div>
        </div>
        <div>
          <div>
            <div id="prop-prince-pdf-color-conversion-syntax2">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-color-conversion: none
                  |&nbsp;[&nbsp;output-intent |&nbsp;full
                  |&nbsp;url(&nbsp;<i>color-profile</i>
                  &nbsp;)&nbsp;]
                  [&nbsp;[&nbsp;absolute-colorimetric
                  |&nbsp;relative-colorimetric
                  |&nbsp;relative-colorimetric-bpc
                  |&nbsp;perceptual |&nbsp;perceptual-bpc
                  |&nbsp;saturation |&nbsp;saturation-bpc&nbsp;]
                  ||&nbsp;no-embed&nbsp;]?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>output-intent</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-color-conversion-comments2">
              Comments
            </div>
            <p>
              As a descriptor inside the
              <a href="/doc/css-refs#at-prince-pdf">
                <code>@prince-pdf</code>
              </a>
              at-rule, <code>prince-pdf-color-conversion</code>{" "}
              is used to convert the colors of the PDF to the
              output intent color space, or to a color profile
              of choice.
            </p>
            <p>
              When used with the default value{" "}
              <code>output-intent</code>, it functions like the
              <a href="/doc/command-line#cl-convert-colors">
                <code>--convert-colors</code>
              </a>
              command-line option - the colors are converted to
              the output intent color profile.
            </p>
            <p className="note">
              The value <code>full</code> is a deprecated
              synonym for <code>output-intent</code>.
            </p>
            <p>
              The <code>url()</code> function allows for an ICC
              color profile to convert to, different from the
              output-intent.
            </p>
            <p>
              The optional second argument comprises the
              rendering intent: Black point compensation ("BPC")
              will most commonly be used with a
              relative-colorimetric rendering intent. Prince
              however also accepts black point compensation with
              perceptual and saturation rendering intents
              because "there are atypical profiles [...] in
              which BPC may actually be beneficial for
              Perceptual or Saturation processing" (quoted from
              the in-depth analysis{" "}
              <a
                href="http://www.color.org/WP40-Black_Point_Compensation_2010-07-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Black-point compensation: theory and application
              </a>
              ).
            </p>
            <p>
              Prince also allows for the additional{" "}
              <code>no-embed</code> keyword, which causes the
              color conversion target ICC profile to not be
              embedded in the output PDF, unless required by the
              PDF profile. The converted colors will be left
              device dependent or else implicitly mapped to the
              output intent color space.
            </p>
            <p className="note">
              When the descriptor is used as a property, applied
              to single elements, it has a different syntax -
              see{" "}
              <a href="#prop-prince-pdf-color-conversion">
                above
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-color-conversion-seealso2">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color-conversion">
                  Color conversion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-color-options"
        >
          prince-pdf-color-options*{" "}
          <a
            href="#prop-prince-pdf-color-options"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-color-options-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-color-options: auto
                    |&nbsp;use-true-black |&nbsp;use-rich-black
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-color-options-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{" }prince-pdf-color-options:
                  use-rich-black; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-color-options-comments">
              Comments
            </div>
            <p>
              This property may be used to control the encoding
              of RGB blacks and grays: when{" "}
              <code>use-true-black</code> is used, they are
              encoded in the /DeviceGray colorspace in the PDF,
              instead of /DeviceRGB, whereas{" "}
              <code>use-rich-black</code> disables this behavior
              and keeps all the colors in RGB. Currently, auto
              is equivalent to <code>use-true-black</code>.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-color-options-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#rich-black-and-true-black">
                  Rich black and true black
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-destination"
        >
          prince-pdf-destination*{" "}
          <a
            href="#prop-prince-pdf-destination"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-destination-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-destination: none |&nbsp;"name"
                  |&nbsp;attr(&nbsp;<i>attr</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-destination-comments">
              Comments
            </div>
            <p>
              This property may be used to create "named
              destinations" (<code>nameddest</code>) in
              generated PDF files which can be linked to from
              other documents.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-destination-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-links">
                  PDF Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-display-doc-title"
        >
          prince-pdf-display-doc-title*{" "}
          <a
            href="#prop-prince-pdf-display-doc-title"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-display-doc-title-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-display-doc-title: true
                    |&nbsp;false
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>false</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-display-doc-title-comments">
              Comments
            </div>
            <p>
              This property may be used to control whether the
              document file name or the document title is
              displayed in the PDF.
            </p>
            <p>
              Prince will force it to true for the PDF/UA-1
              profile, which requires it, and also for PDF/A-1a
              and PDF/A-3a which technically do not require it
              but users may still expect it - or they will see a
              warning if they run the Adobe accessibility
              checker on their PDFs.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-display-doc-title-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-pages">
                  PDF Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-duplex">
          prince-pdf-duplex*{" "}
          <a
            href="#prop-prince-pdf-duplex"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-duplex-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-duplex: auto |&nbsp;simplex
                    |&nbsp;duplex-flip-short-edge
                    |&nbsp;duplex-flip-long-edge
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-duplex-comments">
              Comments
            </div>
            <p>
              This property may be used inside the
              <a href="/doc/css-refs#at-prince-pdf">
                <code>@prince-pdf</code>
              </a>
              at-rule to set the <code>Duplex</code> property in
              the<code>PDFViewerPreferences</code> dictionary.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-duplex-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-printing">
                  PDF Printing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-event-scripts"
        >
          prince-pdf-event-scripts*{" "}
          <a
            href="#prop-prince-pdf-event-scripts"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-event-scripts-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-event-scripts: <br />
                  &nbsp;&nbsp;&nbsp;none <br />
                  &nbsp;&nbsp;&nbsp;|&nbsp;[ [ will-close
                  |&nbsp;will-save |&nbsp;did-save
                  |&nbsp;will-print |&nbsp;did-print ] [
                  "JavaScript" |&nbsp;<i>url</i> ] ]#</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>""</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-event-scripts-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-event-scripts: will-close url("onclose.js"), will-print url("onprint.js"); <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-event-scripts-comments">
              Comments
            </div>
            <p>
              This property can be used to include JavaScript
              code that will be executed in the PDF when
              printing, saving, and closing the PDF, known as
              "Document Action" scripts.
            </p>
            <p className="note">
              Please be advised that these scripts are dependent
              on the PDF viewer, and in many cases might only
              work in Adobe Acrobat products.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-event-scripts-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-actions">
                  PDF Actions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-link-type">
          prince-pdf-link-type*{" "}
          <a
            href="#prop-prince-pdf-link-type"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-link-type-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-link-type: [ auto |&nbsp;file ]?
                    [ same-window |&nbsp;new-window ]?
                    |&nbsp;web
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-link-type-comments">
              Comments
            </div>
            <p>
              This property controls whether relative links
              should be embedded in the PDF as web (URL) links
              or file links (by default they will be resolved
              against the base URL of the input document), and
              whether to open the links in the same or a new
              window.
            </p>
            <p>
              Note however that the optional link target
              keywords <code>same-window</code>and{" "}
              <code>new-window</code> only affect links to local
              PDF files.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-link-type-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-links">
                  PDF Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-open-action"
        >
          prince-pdf-open-action*{" "}
          <a
            href="#prop-prince-pdf-open-action"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-open-action-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-open-action: none |&nbsp;[ print
                  |&nbsp;command(&nbsp;<i>ident</i>&nbsp;)
                  |&nbsp;zoom(&nbsp;fit-page |&nbsp;fit-width
                  |&nbsp;fit-height |&nbsp;<i>percent</i>&nbsp;)
                  ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-open-action-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-open-action: zoom(fit-page) print; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-open-action-comments">
              Comments
            </div>
            <p>
              This property specifies a space-separated list of
              actions to perform when the PDF file is opened,
              like eg. popping up the print dialog box
              automatically, or setting the default zoom level
              for PDF documents. Any arbitrary identifier can be
              specified, although these may be PDF viewer
              specific; Acrobat can take just about any menu
              item.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-open-action-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-actions">
                  PDF Actions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-output-intent"
        >
          prince-pdf-output-intent*{" "}
          <a
            href="#prop-prince-pdf-output-intent"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-output-intent-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-output-intent: auto
                  |&nbsp;url(&nbsp;<i>filename</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-output-intent-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-output-intent: url("ISOcoated_v2_eci.icc"); <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-output-intent-comments">
              Comments
            </div>
            <p>
              This property is used inside a{" "}
              <a href="/doc/css-refs#at-prince-pdf">
                <code>@prince-pdf</code>
              </a>
              at-rule to select the intended output color space
              of the generated PDF file.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-output-intent-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="#prop-prince-fallback-cmyk-profile">
                  prince-fallback-cmyk-profile
                </a>
              </li>
              <li>
                <a href="/doc/graphics#color-management">
                  Color Management
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-page-colorspace"
        >
          prince-pdf-page-colorspace*{" "}
          <a
            href="#prop-prince-pdf-page-colorspace"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-page-colorspace-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-page-colorspace: auto |&nbsp;none
                    |&nbsp;rgb |&nbsp;cmyk |&nbsp;gray
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-colorspace-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-page-colorspace: cmyk; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-colorspace-comments">
              Comments
            </div>
            <p>
              This CSS at-rule descriptor can control the
              colorspace of pages in the PDF file, which affects
              blending of transparent content. The keyword
              <code>auto</code> uses the output intent color
              space or the destination color space when color
              conversion is enabled, or falls back to
              <code>rgb</code> in the absence of a specified
              output intent.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-page-colorspace-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#page-color-space">
                  Page color space
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-page-label"
        >
          prince-pdf-page-label*{" "}
          <a
            href="#prop-prince-pdf-page-label"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-page-label-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-page-label: auto |&nbsp;
                  <i>content</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-label-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-page-label: counter(page, lower-roman) <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-label-comments">
              Comments
            </div>
            <p>
              This CSS at-rule descriptor can be used to set the
              page label that will be displayed in the PDF
              viewer.
            </p>
            <p>
              Several ways of creating content are here defined
              by means of functions - the detailed explanation
              can be found in the{" "}
              <a href="/doc/gen-content#generated-content-functions">
                Generated Content Functions
              </a>
              section.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-page-label-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/gen-content#generated-content-functions">
                  Generated Content Functions
                </a>
              </li>
              <li>
                <a href="/doc/prince-output#pdf-pages">
                  PDF Pages
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-page-layout"
        >
          prince-pdf-page-layout*{" "}
          <a
            href="#prop-prince-pdf-page-layout"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-page-layout-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-page-layout: auto
                    |&nbsp;single-page |&nbsp;two-page
                    |&nbsp;two-page-left |&nbsp;two-page-right
                    |&nbsp;one-column |&nbsp;two-column
                    |&nbsp;two-column-left
                    |&nbsp;two-column-right
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-layout-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-page-layout: two-column; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-layout-comments">
              Comments
            </div>
            <p>
              This property can be used to set the default page
              layout for the PDF file when it is opened. For
              example, whether the PDF pages should be displayed
              in one or two columns.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-page-layout-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-pages">
                  PDF Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-page-mode">
          prince-pdf-page-mode*{" "}
          <a
            href="#prop-prince-pdf-page-mode"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-page-mode-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-page-mode: auto
                    |&nbsp;show-attachments
                    |&nbsp;show-bookmarks |&nbsp;fullscreen
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-mode-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-page-mode: show-bookmarks; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-page-mode-comments">
              Comments
            </div>
            <p>
              This property can be used to set the default page
              mode for the PDF file when it is opened. For
              example, whether the bookmarks panel should be
              displayed, and whether the viewer should be
              fullscreen.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-page-mode-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-pages">
                  PDF Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-paper-tray"
        >
          prince-pdf-paper-tray*{" "}
          <a
            href="#prop-prince-pdf-paper-tray"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-paper-tray-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-paper-tray: auto
                    |&nbsp;pick-tray-by-pdf-size
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-paper-tray-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-paper-tray: pick-tray-by-pdf-size; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-paper-tray-comments">
              Comments
            </div>
            <p>
              This property controls the PickTrayByPDFSize flag
              in generated PDF files, which specifies whether
              the PDF page size is used to select the input
              paper tray. (See the checkbox in the Acrobat print
              dialog).
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-paper-tray-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-printing">
                  PDF Printing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-pdf-print-scaling"
        >
          prince-pdf-print-scaling*{" "}
          <a
            href="#prop-prince-pdf-print-scaling"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-print-scaling-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-print-scaling: auto |&nbsp;none
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-print-scaling-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-print-scaling: none; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-print-scaling-comments">
              Comments
            </div>
            <p>
              This property can be used to disable print scaling
              for the PDF file when it is printed.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-print-scaling-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-printing">
                  PDF Printing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-profile">
          prince-pdf-profile*{" "}
          <a
            href="#prop-prince-pdf-profile"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-profile-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-profile: none |&nbsp;"Profile"
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-profile-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-profile: "PDF/X-3:2003"; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-profile-comments">
              Comments
            </div>
            <p>
              PDF Profiles are used to optimize the PDF file for
              its specific use - for more details and the
              supported PDF profiles, see{" "}
              <a href="/doc/prince-output#pdf-versions-and-profiles">
                PDF Versions and Profiles
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-profile-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-versions-and-profiles">
                  PDF Versions and Profiles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-script">
          prince-pdf-script*{" "}
          <a
            href="#prop-prince-pdf-script"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-script-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-script: "JavaScript" |&nbsp;
                  <i>url</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>""</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@prince-pdf at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-script-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} <br />
                  &nbsp;&nbsp;prince-pdf-script: "this.print();"; <br />
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-script-comments">
              Comments
            </div>
            <p>
              This property can be used to include JavaScript
              code that will be executed when the PDF file is
              opened. A common use case is to activate the
              "Print" dialog automatically. The script can be
              located in an external JavaScript file, referenced
              with the <code>url()</code> function.
            </p>
            <p className="note">
              Please be advised that these scripts are dependent
              on the PDF viewer, and in many cases might only
              work in Adobe Acrobat products.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-script-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-actions">
                  PDF Actions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-tag-type">
          prince-pdf-tag-type*{" "}
          <a
            href="#prop-prince-pdf-tag-type"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-tag-type-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-pdf-tag-type: auto |&nbsp;Part
                    |&nbsp;Art |&nbsp;Sect |&nbsp;Div
                    |&nbsp;Index |&nbsp;BlockQuote
                    |&nbsp;Caption |&nbsp;TOC |&nbsp;TOCI
                    |&nbsp;P |&nbsp;H1 |&nbsp;H2 |&nbsp;H3
                    |&nbsp;H4 |&nbsp;H5 |&nbsp;H6 |&nbsp;OL
                    |&nbsp;UL |&nbsp;LI |&nbsp;Lbl |&nbsp;DL
                    |&nbsp;DL-Div |&nbsp;DT |&nbsp;DD
                    |&nbsp;Span |&nbsp;Quote |&nbsp;Table
                    |&nbsp;BibEntry |&nbsp;Code |&nbsp;Figure
                    |&nbsp;Formula |&nbsp;Artifact
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-tag-type-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>ul.toc {"{"}  prince-pdf-tag-type: TOC; {"}"} <br />
                  ul.toc li {"{"} prince-pdf-tag-type: TOCI; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-tag-type-comments">
              Comments
            </div>
            <p>
              This property is used to influence tagged PDF for
              XML vocabularies or when using custom HTML
              classes. The possible values are PDF tag types.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-tag-type-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#pdf-tags">
                  PDF Tags
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-pdf-xmp">
          prince-pdf-xmp*{" "}
          <a
            href="#prop-prince-pdf-xmp"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-pdf-xmp-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-pdf-xmp: url(&nbsp;<i>filename</i>
                  &nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>""</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-xmp-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@prince-pdf {"{"} prince-pdf-xmp: url("xmp-file.xmp"); {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-pdf-xmp-comments">
              Comments
            </div>
            <p>
              This property can be used inside a{" "}
              <a href="/doc/css-refs#at-prince-pdf">
                <code>@prince-pdf</code>
              </a>
              rule to add XMP metadata to a PDF file. Currently
              it takes an XMP file as input and includes data
              from the &lt;x:xmpmeta&gt; element and its
              contents (the xpacket processing instructions are
              ignored, as Prince generates those itself when it
              produces the PDF file).
            </p>
            <p className="note">
              This property requires either a URL pointing to an
              XMP file, or an encoded <code>data:</code> URL.
            </p>
          </div>
          <div>
            <div id="prop-prince-pdf-xmp-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-output#xmp-metadata">
                  XMP Metadata
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-rotate-body">
          prince-rotate-body*{" "}
          <a
            href="#prop-prince-rotate-body"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-rotate-body-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-rotate-body: portrait |&nbsp;landscape
                  |&nbsp;<i>angle</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0deg</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-rotate-body-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} prince-rotate-body: landscape; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-rotate-body-comments">
              Comments
            </div>
            <p>
              This CSS at-rule descriptor can be used to rotate
              the page body, eg. to fit landscape content on a
              portrait page, while leaving the headers and
              footers where they are.
            </p>
            <p>
              Please see the <a href="#prop-size">size</a>{" "}
              property for determining the default orientation
              of the page.
            </p>
          </div>
          <div>
            <div id="prop-prince-rotate-body-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#printing-wide-content-sideways">
                  Printing wide content sideways
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-shrink-to-fit">
          prince-shrink-to-fit*{" "}
          <a
            href="#prop-prince-shrink-to-fit"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-shrink-to-fit-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-shrink-to-fit: none |&nbsp;auto
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-shrink-to-fit-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} prince-shrink-to-fit: auto {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-shrink-to-fit-comments">
              Comments
            </div>
            <p>
              Specifying a value of <code>auto</code> will
              result in wide web pages being scaled down in size
              to fit the paper width.
            </p>
          </div>
          <div>
            <div id="prop-prince-shrink-to-fit-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/cookbook#printing-wide-content-sideways">
                  Printing wide content sideways
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-table-column-span"
        >
          prince-table-column-span*{" "}
          <a
            href="#prop-prince-table-column-span"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-table-column-span-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-table-column-span: <i>number</i>{" "}
                  |&nbsp;attr(&nbsp;<i>colspan</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table cells</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-table-column-span-comments">
              Comments
            </div>
            <p>
              This property applies to table cells and
              determines the number of table columns spanned by
              the table cell. See the{" "}
              <a href="/doc/styling#tables">Tables</a>
              documentation for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-table-column-span">
                <code>table-column-span</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-table-column-span-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#tables">
                  Tables
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary
          className="ext"
          id="prop-prince-table-row-span"
        >
          prince-table-row-span*{" "}
          <a
            href="#prop-prince-table-row-span"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-table-row-span-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-table-row-span: <i>number</i>{" "}
                  |&nbsp;attr(&nbsp;<i>rowspan</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table cells</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-table-row-span-comments">
              Comments
            </div>
            <p>
              This property applies to table cells and
              determines the number of table rows spanned by the
              table cell. See the{" "}
              <a href="/doc/styling#tables">Tables</a>
              documentation for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-table-row-span">
                <code>table-row-span</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-table-row-span-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#tables">
                  Tables
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-text-justify">
          prince-text-justify*{" "}
          <a
            href="#prop-prince-text-justify"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-text-justify-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-text-justify: auto |&nbsp;prince-cjk
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-text-justify-comments">
              Comments
            </div>
            <p>
              This property defines how to treat justified text.
              The value <code>prince-cjk</code>allows space to
              be inserted between CJK characters when justifying
              even if there aren't any space characters.
            </p>
          </div>
          <div>
            <div id="prop-prince-text-justify-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#paragraph-formatting">
                  Paragraph formatting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-text-replace">
          prince-text-replace*{" "}
          <a
            href="#prop-prince-text-replace"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-text-replace-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-text-replace: none |&nbsp;[ "search"
                    "replace" ]+
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-text-replace-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>body {"{"} prince-text-replace: "s" "\017F" "\017F\20" "s\20"; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-text-replace-comments">
              Comments
            </div>
            <p>
              This property can be used to replace a character
              string with another one. In the above example, all
              occurrences of "s" are replaced with the "long s",
              except if in the end of a word, where the
              replacement is reversed.
            </p>
          </div>
          <div>
            <div id="prop-prince-text-replace-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/characters">Character Entities</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-text-wrap">
          prince-text-wrap*{" "}
          <a
            href="#prop-prince-text-wrap"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-text-wrap-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-line-break-choices: body
                    |&nbsp;heading |&nbsp;title
                    |&#160;body-gready |&nbsp;body-lookahead
                    |&#160;heading-gready |&nbsp;heading-lookahead
                    |&#160;title-gready |&nbsp;title-lookahead |&nbsp;fast
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>body</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-text-wrap-comments">
              Comments
            </div>
            <p>
              This property is used for fine tuning the line
              breaking approach.
            </p>
            <p>
              The keyword <code>title</code> is intended for
              title pages of books or chapters, where phrasing
              considerations are of prime consideration even at
              the cost of extremely unbalanced lines.
            </p>
            <p>
              The keyword <code>heading</code>, on the other
              hand, is closer to<code>body</code>, differing
              mainly in that it's less likely to hyphenate, and
              is more willing to make the first line(s) a little
              shorter if doing so avoids a short last line.
            </p>
            <p>
              The <code>\*-greedy</code> keywords decide on line
              breaks solely based on the current line and on the
              length of the next word, never going back to change
              a decision on a line in the light of line-breaknig
              issues encountered later.
            </p>
            <p>
              The <code>\*-lookahead</code> keywords, on the other
              hand, enable paragraph-at-a-time line-breaking not
              just based on what seems best for the current line,
              but also considering the effect on future lines.
            </p>
            <p>
              The keyword <code>fast</code> can be used for
              quick web-browers–style line breaking, useful for
              testing the effect of styling changes that don't
              depend on good line breaking.
            </p>
            <p>
              For more details, please see{" "}
              <a href="/doc/prince-for-books#line-breaking">
                Line breaking
              </a>
              .
            </p>
            <p>
              This property only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              .
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-line-break-choices">
                <code>prince-line-break-choices</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
          <div>
            <div id="prop-prince-text-wrap-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-for-books#line-breaking">
                  Line breaking
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#the-property-prince-line-break-choices">
                  The property prince-line-break-choices
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-tooltip">
          prince-tooltip*{" "}
          <a
            href="#prop-prince-tooltip"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-tooltip-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-tooltip: transparent |&nbsp;none
                  |&nbsp;normal |&nbsp;<i>content</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>transparent</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-tooltip-examples">
              Examples
            </div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>*[title] {"{"} prince-tooltip: attr(title); {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-tooltip-comments">
              Comments
            </div>
            <p>
              The <code>prince-tooltip</code> property can be
              used to create a tooltip when hovering an element
              in the PDF file. The keyword <code>none</code>{" "}
              actually "suppresses" tooltips, which means that
              it will not show any tooltip for objects
              underneath the selected element, that might have a
              tooltip. An empty string, or some content that
              evaluates to an empty string, is treated
              equivalent to <code>none</code>, rather than
              showing an empty tooltip.
            </p>
            <p>
              Several ways of creating content are here defined
              by means of functions - the detailed explanation
              can be found in the{" "}
              <a href="/doc/gen-content#generated-content-functions">
                Generated Content Functions
              </a>
              section.
            </p>
            <p className="note">
              Tooltips are not a standard PDF feature, and they
              may only work in Adobe Reader and Adobe Acrobat
              and may not be visible in other PDF viewers, such
              as web browsers.
            </p>
          </div>
          <div>
            <div id="prop-prince-tooltip-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/gen-content#generated-content-functions">
                  Generated Content Functions
                </a>
              </li>
              <li>
                <a href="/doc/gen-content">Generated Content</a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-trim">
          prince-trim*{" "}
          <a href="#prop-prince-trim" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-prince-trim-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>prince-trim: auto |&nbsp;[ <i>length</i> ]
                  {"{"}1..4{"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-trim-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} prince-trim: 60mm; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-trim-comments">Comments</div>
            <p>
              This CSS at-rule descriptor can be used to specify
              the size of the trim area of the page when crop
              marks are enabled.
            </p>
          </div>
          <div>
            <div id="prop-prince-trim-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-style">Page style</a>
              </li>
              <li>
                <a href="#prop-bleed">bleed</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-prince-wrap-inside">
          prince-wrap-inside*{" "}
          <a
            href="#prop-prince-wrap-inside"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-prince-wrap-inside-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    prince-wrap-inside: auto |&nbsp;phrase
                    |&nbsp;avoid
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-prince-wrap-inside-comments">
              Comments
            </div>
            <p>
              <code>prince-wrap-inside:phrase</code> is for
              marking up a phrase that one would weakly prefer
              to keep on a single line.
            </p>
            <p>
              It adds to Prince's perceived cost of breaking
              within that phrase, but only a small cost,
              comparable to the cost of hyphenating a compound
              adjective such as ‘midyear’.
            </p>
            <p>
              <code>prince-wrap-inside:avoid</code> is a
              stronger directive: it avoids breaking the text to
              which the property is applied even if it causes
              the affected text to be <em>unusually</em> tight,
              or the previous line to be unusually loose; but{" "}
              <em>not</em> if either line would become{" "}
              <em>truly exceptionally</em> tightly or loosely
              spaced.
            </p>
            <p>
              (Limitation: At the time of writing,{" "}
              <code>prince-wrap-inside</code> only affects
              justified text.)
            </p>
            <p>
              This property only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              .
            </p>
          </div>
          <div>
            <div id="prop-prince-wrap-inside-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/prince-for-books#line-breaking">
                  Line breaking
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#the-property-prince-wrap-inside">
                  The property prince-wrap-inside
                </a>
              </li>
              <li>
                <a href="#prop-prince-forced-breaks">
                  prince-forced-breaks
                </a>
              </li>
              <li>
                <a href="#prop-white-space">white-space</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-right">
          right <a href="#prop-right" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-right-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>right: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>positioned elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-right-comments">Comments</div>
            <p>
              This property determines the right offset for
              positioned elements (ie. elements with a{" "}
              <a href="#prop-position">position</a>value of{" "}
              <code>relative</code>, <code>absolute</code> or
              <code>fixed</code>).
            </p>
          </div>
          <div>
            <div id="prop-right-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#propdef-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-size">
          size <a href="#prop-size" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-size-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>size: <i>paper-size</i> |&nbsp;<i>length</i>{" "}
                  <i>length</i> [ landscape |&nbsp;portrait ]?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>Letter</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@page at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-size-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} size: A4; {"}"}</code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} size: A4 landscape; {"}"}</code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} size: Letter; {"}"}</code>
                </div>
              </div>
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@page {"{"} size: 10cm 5cm; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-size-comments">Comments</div>
            <p>
              This CSS at-rule descriptor, used with the
              <a href="/doc/css-refs#at-page">
                <code>@page</code>
              </a>{" "}
              at-rule, defines the size and orientation of the
              page. Please see also the
              <a href="#prop-prince-rotate-body">
                prince-rotate-body
              </a>{" "}
              property to control the orientation of selected
              pages.
            </p>
          </div>
          <div>
            <div id="prop-size-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#page-size">Page size</a>
              </li>
              <li>
                <a href="/doc/page-size-keywords">
                  Page Size Keywords
                </a>
              </li>
              <li>
                <a href="#prop-prince-rotate-body">
                  prince-rotate-body
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-size-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css3-page/#page-size-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Paged Media Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-src">
          src <a href="#prop-src" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-src-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>src: [ url(&nbsp;<i>filename</i>&nbsp;) [
                  format(&nbsp;[ "format" ]+&nbsp;) ]?
                  |&nbsp;local(&nbsp;<i>name</i>&nbsp;) |&nbsp;
                  <span className="ext">
                    prince-lookup(&nbsp;<i>name</i>&nbsp;)
                  </span>{" "}
                  ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>n/a</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@font-face at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-src-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@font-face {"{"} font-family: MyFontA; src: local("Local_Font_A"); {"}"} <br />
                  @font-face {"{"} font-family: MyFontB; src: prince-lookup("MyFontA"); {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-src-comments">Comments</div>
            <p>
              This CSS at-rule descriptor, used with the
              <a href="/doc/css-refs#at-font-face">
                <code>@font-face</code>
              </a>{" "}
              at-rule, specifies the resource containing font
              data. It is required for the{" "}
              <code>@font-face</code>rule to be valid.
            </p>
            <p>
              Prince supports WOFF (Web Open Font Format),
              TrueType and OpenType font formats, expressed
              respectively by the <code>woff</code>,{" "}
              <code>truetype</code> and<code>opentype</code>{" "}
              format hints with the optional{" "}
              <code>format()</code>function.
            </p>
            <p>
              The <code>local()</code> function searches for
              locally installed system fonts, while{" "}
              <code>prince-lookup()</code> will also find fonts
              defined by other <code>@font-face</code> rules.
            </p>
          </div>
          <div>
            <div id="prop-src-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#fonts">Fonts</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-src-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-fonts-3/#src-desc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stop-color">
          stop-color{" "}
          <a href="#prop-stop-color" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-stop-color-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stop-color: color</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>black</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stop-color-comments">Comments</div>
            <p>
              The <code>stop-color</code> property only applies
              to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stop-color-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-stop-color-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/pservers.html#StopColorProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stop-opacity">
          stop-opacity{" "}
          <a href="#prop-stop-opacity" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-stop-opacity-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stop-opacity: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stop-opacity-comments">Comments</div>
            <p>
              The <code>stop-opacity</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stop-opacity-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/pservers.html#StopOpacityProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-string-set">
          string-set{" "}
          <a href="#prop-string-set" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-string-set-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>string-set: none |&nbsp;[ <i>ident</i>{" "}
                  <i>content</i> ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-string-set-comments">Comments</div>
            <p>
              This property can be used to create a named
              string, which may then be referenced from the{" "}
              <a href="#prop-content">content</a> property to
              create generated content. Typically this is
              achieved with the <code>content()</code> function,
              which retrieves the text of the selected element.
            </p>
            <p>
              But any other means of generating content, as
              described in the
              <a href="/doc/gen-content#generated-content-functions">
                Generated Content Functions
              </a>{" "}
              section, are available. See also
              <a href="/doc/paged#page-regions">Page regions</a>{" "}
              for more details.
            </p>
          </div>
          <div>
            <div id="prop-string-set-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/gen-content#generated-content-functions">
                  Generated Content Functions
                </a>
              </li>
              <li>
                <a href="#prop-content">content</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-string-set-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-gcpm-3/#setting-named-strings-the-string-set-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Generated Content for Paged Media Module
                </a>
              </li>
              <li>
                <a
                  href="https://books.spec.whatwg.org/#named-strings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke">
          stroke <a href="#prop-stroke" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stroke: none |&nbsp;<i>color</i>{" "}
                  |&nbsp;url(&nbsp;<i>paint-server</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-comments">Comments</div>
            <p>
              The <code>stroke</code> property only applies to
              SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-dasharray">
          stroke-dasharray{" "}
          <a
            href="#prop-stroke-dasharray"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-dasharray-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stroke-dasharray: none |&nbsp;[ <i>length</i>{" "}
                  |&nbsp;<i>percent</i> ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-dasharray-comments">
              Comments
            </div>
            <p>
              The <code>stroke-dasharray</code> property only
              applies to SVG elements. It takes{" "}
              <a
                href="https://www.w3.org/TR/SVG/types.html#DataTypeList"
                target="_blank"
                rel="noopener noreferrer"
              >
                a comma or whitespace separated list
              </a>{" "}
              of lengths or percentages as argument.
            </p>
          </div>
          <div>
            <div id="prop-stroke-dasharray-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG/types.html#DataTypeList"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Type List
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-stroke-dasharray-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-dashoffset">
          stroke-dashoffset{" "}
          <a
            href="#prop-stroke-dashoffset"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-dashoffset-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stroke-dashoffset: <i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-dashoffset-comments">
              Comments
            </div>
            <p>
              The <code>stroke-dashoffset</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-dashoffset-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeDashoffsetProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-linecap">
          stroke-linecap{" "}
          <a
            href="#prop-stroke-linecap"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-linecap-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    stroke-linecap: butt |&nbsp;round
                    |&nbsp;square
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>butt</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-linecap-comments">
              Comments
            </div>
            <p>
              The <code>stroke-linecap</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-linecap-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-linejoin">
          stroke-linejoin{" "}
          <a
            href="#prop-stroke-linejoin"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-linejoin-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    stroke-linejoin: miter |&nbsp;round
                    |&nbsp;bevel
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>miter</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-linejoin-comments">
              Comments
            </div>
            <p>
              The <code>stroke-linejoin</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-linejoin-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-miterlimit">
          stroke-miterlimit{" "}
          <a
            href="#prop-stroke-miterlimit"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-miterlimit-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stroke-miterlimit: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>4</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-miterlimit-comments">
              Comments
            </div>
            <p>
              The <code>stroke-miterlimit</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-miterlimit-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-opacity">
          stroke-opacity{" "}
          <a
            href="#prop-stroke-opacity"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-opacity-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stroke-opacity: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-opacity-comments">
              Comments
            </div>
            <p>
              The <code>stroke-opacity</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-opacity-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeOpacityProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-stroke-width">
          stroke-width{" "}
          <a href="#prop-stroke-width" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-stroke-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>stroke-width: <i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-stroke-width-comments">Comments</div>
            <p>
              The <code>stroke-width</code> property only
              applies to SVG elements.
            </p>
          </div>
          <div>
            <div id="prop-stroke-width-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/painting.html#StrokeWidthProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-table-baseline">
          table-baseline{" "}
          <a
            href="#prop-table-baseline"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-table-baseline-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>table-baseline: <i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table and inline-table elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-table-column-span">
          table-column-span*{" "}
          <a
            href="#prop-table-column-span"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-table-column-span-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>table-column-span: <i>number</i>{" "}
                  |&nbsp;attr(&nbsp;<i>colspan</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table cells</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-table-column-span-comments">
              Comments
            </div>
            <p>
              This property applies to table cells and
              determines the number of table columns spanned by
              the table cell. See the{" "}
              <a href="/doc/styling#tables">Tables</a>
              documentation for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-table-column-span">
                <code>prince-table-column-span</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-table-layout">
          table-layout{" "}
          <a href="#prop-table-layout" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-table-layout-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>table-layout: auto |&nbsp;fixed</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table and inline-table elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-table-layout-comments">Comments</div>
            <p>
              This property determines whether a table uses
              automatic table layout or fixed table layout. See
              the <a href="/doc/styling#tables">Tables</a>
              documentation for more details.
            </p>
          </div>
          <div>
            <div id="prop-table-layout-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/tables.html#width-layout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary className="ext" id="prop-table-row-span">
          table-row-span*{" "}
          <a
            href="#prop-table-row-span"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-table-row-span-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>table-row-span: <i>number</i>{" "}
                  |&nbsp;attr(&nbsp;<i>rowspan</i>&nbsp;)</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>table cells</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-table-row-span-comments">
              Comments
            </div>
            <p>
              This property applies to table cells and
              determines the number of table rows spanned by the
              table cell. See the{" "}
              <a href="/doc/styling#tables">Tables</a>
              documentation for more details.
            </p>
            <p className="note">
              The property{" "}
              <a href="#prop-prince-table-row-span">
                <code>prince-table-row-span</code>
              </a>{" "}
              can be used as an alias.
            </p>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-tab-size">
          tab-size{" "}
          <a href="#prop-tab-size" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-tab-size-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>tab-size: <i>number</i> |&nbsp;<i>length</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>8</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-tab-size-comments">Comments</div>
            <p>
              This property determines the tab-size for
              preserved tab characters (U+0009). An integer
              defines number of spaces in a tab, a length
              represents the width of a tab.
            </p>
            <p>
              Please note that Prince replaces preserved tab
              characters with the specified number of spaces,
              but does not create actual "tab stops" aligned to
              the left edge of the block.
            </p>
          </div>
          <div>
            <div id="prop-tab-size-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#tab-size-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-align">
          text-align{" "}
          <a href="#prop-text-align" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-text-align-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-align: left |&nbsp;right |&nbsp;inside
                    |&nbsp;outside |&nbsp;center |&nbsp;justify
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>left</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-align-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/text.html#alignment-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://figures.spec.whatwg.org/#aligning-text-inside-and-outside-pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Figures
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-align-last">
          text-align-last{" "}
          <a
            href="#prop-text-align-last"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-align-last-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-align-last: left |&nbsp;right
                    |&nbsp;inside |&nbsp;outside |&nbsp;center
                    |&nbsp;justify
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>left</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-align-last-comments">
              Comments
            </div>
            <p>
              This property allows the last line of an element
              to receive its own alignment style.
            </p>
          </div>
          <div>
            <div id="prop-text-align-last-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#text-align-last-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
              <li>
                <a
                  href="https://figures.spec.whatwg.org/#aligning-text-inside-and-outside-pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Figures
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-anchor">
          text-anchor{" "}
          <a href="#prop-text-anchor" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-text-anchor-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-anchor: start |&nbsp;middle |&nbsp;end
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>start</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>SVG elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-anchor-comments">Comments</div>
            <p>
              The <code>text-anchor</code> property only applies
              to SVG text elements.
            </p>
          </div>
          <div>
            <div id="prop-text-anchor-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/SVG11/text.html#TextAnchorProperty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVG 1.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-decoration">
          text-decoration{" "}
          <a
            href="#prop-text-decoration"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-decoration-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-decoration: none |&nbsp;[ underline
                    ||&nbsp;overline ||&nbsp;line-through ]
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-decoration-comments">
              Comments
            </div>
            <p>
              The <code>text-decoration</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-text-line-through-color">
                  text-line-through-color
                </a>
              </li>
              <li>
                <a href="#prop-text-line-through-style">
                  text-line-through-style
                </a>
              </li>
              <li>
                <a href="#prop-text-overline-color">
                  text-overline-color
                </a>
              </li>
              <li>
                <a href="#prop-text-overline-style">
                  text-overline-style
                </a>
              </li>
              <li>
                <a href="#prop-text-underline-color">
                  text-underline-color
                </a>
              </li>
              <li>
                <a href="#prop-text-underline-style">
                  text-underline-style
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-text-decoration-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-text-decoration-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/text.html#lining-striking-props"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-indent">
          text-indent{" "}
          <a href="#prop-text-indent" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-text-indent-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-indent: <i>length</i> |&nbsp;
                  <i>percent</i> hanging?</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>0</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block containers</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-indent-comments">Comments</div>
            <p>
              This property determines the indentation of the
              first line of text in the element. If the{" "}
              <code>hanging</code> keyword is added after the
              length, a hanging indent will be created by
              applying the indentation to every line of text but
              the first.
            </p>
          </div>
          <div>
            <div id="prop-text-indent-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#text-indent-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-line-through">
          text-line-through{" "}
          <a
            href="#prop-text-line-through"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-line-through-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-line-through: <i>color</i> ||&nbsp;
                  <i>
                    <a href="#prop-text-line-through-style">
                      text-line-through-style
                    </a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-line-through-comments">
              Comments
            </div>
            <p>
              The <code>text-line-through</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-text-line-through-color">
                  text-line-through-color
                </a>
              </li>
              <li>
                <a href="#prop-text-line-through-style">
                  text-line-through-style
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-line-through-color">
          text-line-through-color{" "}
          <a
            href="#prop-text-line-through-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-line-through-color-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-line-through-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-line-through-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-line-through-style">
          text-line-through-style{" "}
          <a
            href="#prop-text-line-through-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-line-through-style-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-line-through-style: none |&nbsp;solid
                    |&nbsp;dashed |&nbsp;dotted
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
        </div>
      </details>
      <details>
        <summary id="prop-text-overflow">
          text-overflow{" "}
          <a href="#prop-text-overflow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-text-overflow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-overflow: clip |&nbsp;ellipsis
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>clip</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block container elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-overflow-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-ui-3/#text-overflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Basic User Interface Module Level 3 (CSS3
                  UI)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-overline">
          text-overline{" "}
          <a href="#prop-text-overline" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-text-overline-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-overline: <i>color</i> ||&nbsp;
                  <i>
                    <a href="#prop-text-overline-style">
                      text-overline-style
                    </a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-overline-comments">Comments</div>
            <p>
              The <code>text-overline</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-text-overline-color">
                  text-overline-color
                </a>
              </li>
              <li>
                <a href="#prop-text-overline-style">
                  text-overline-style
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-overline-color">
          text-overline-color{" "}
          <a
            href="#prop-text-overline-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-overline-color-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-overline-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-overline-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-overline-style">
          text-overline-style{" "}
          <a
            href="#prop-text-overline-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-overline-style-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-overline-style: none |&nbsp;solid
                    |&nbsp;dashed |&nbsp;dotted
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
        </div>
      </details>
      <details>
        <summary id="prop-text-shadow">
          text-shadow{" "}
          <a href="#prop-text-shadow" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-text-shadow-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-shadow: none |&nbsp;[ <i>color</i>?
                  &amp;&amp;&nbsp;<i>length</i>
                  {"{"}2..3{"}"} ]#</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-shadow-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-text-shadow-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-decor-3/#text-shadow-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Decoration Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-transform">
          text-transform{" "}
          <a
            href="#prop-text-transform"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-transform-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-transform: none |&nbsp;lowercase
                    |&nbsp;uppercase |&nbsp;capitalize
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-transform-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#text-formatting">
                  Text formatting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-text-transform-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/text.html#caps-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-underline">
          text-underline{" "}
          <a
            href="#prop-text-underline"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-underline-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-underline: <i>color</i> ||&nbsp;
                  <i>
                    <a href="#prop-text-underline-style">
                      text-underline-style
                    </a>
                  </i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-text-underline-comments">
              Comments
            </div>
            <p>
              The <code>text-underline</code> property is a
              shorthand for setting the following CSS
              properties:
            </p>
            <ul>
              <li>
                <a href="#prop-text-underline-color">
                  text-underline-color
                </a>
              </li>
              <li>
                <a href="#prop-text-underline-style">
                  text-underline-style
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-underline-color">
          text-underline-color{" "}
          <a
            href="#prop-text-underline-color"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-underline-color-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>text-underline-color: <i>color</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>CurrentColor</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-text-underline-color-seealso">
              See Also
            </div>
            <ul>
              <li>
                <a href="/doc/graphics#color">Color</a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-text-underline-style">
          text-underline-style{" "}
          <a
            href="#prop-text-underline-style"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-text-underline-style-syntax">
              Syntax
            </div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    text-underline-style: none |&nbsp;solid
                    |&nbsp;dashed |&nbsp;dotted
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
        </div>
      </details>
      <details>
        <summary id="prop-top">
          top <a href="#prop-top" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-top-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>top: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>positioned elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-top-comments">Comments</div>
            <p>
              This property determines the top offset for
              positioned elements (ie. elements with a{" "}
              <a href="#prop-position">position</a>value of{" "}
              <code>relative</code>, <code>absolute</code> or
              <code>fixed</code>).
            </p>
          </div>
          <div>
            <div id="prop-top-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#propdef-top"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-transform">
          transform{" "}
          <a href="#prop-transform" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-transform-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>transform: none |&nbsp;[ rotate(&nbsp;
                  <i>angle</i>&nbsp;) |&nbsp;translate(&nbsp;
                  <i>offset</i>, <i>offset</i>?&nbsp;)
                  |&nbsp;translatex(&nbsp;<i>offset</i>&nbsp;)
                  |&nbsp;translatey(&nbsp;<i>offset</i>&nbsp;)
                  |&nbsp;translate3d(&nbsp;<i>offset</i>,{" "}
                  <i>offset</i>, <i>offset</i>&nbsp;)
                  |&nbsp;scale(&nbsp;<i>number</i>,{" "}
                  <i>number</i>?&nbsp;) |&nbsp;scalex(&nbsp;
                  <i>number</i>&nbsp;) |&nbsp;scaley(&nbsp;
                  <i>number</i>&nbsp;) |&nbsp;skewx(&nbsp;
                  <i>angle</i>&nbsp;) |&nbsp;skewy(&nbsp;
                  <i>angle</i>&nbsp;) ]+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>none</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>transformable elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-transform-comments">Comments</div>
            <p>
              Please note that the function{" "}
              <code>translate3d()</code> is supported if the Z
              (third) coordinate is zero, thus making it
              equivalent to the 2D <code>translate()</code>.
            </p>
            <p>
              Also note that this property currently does not
              affect SVG elements - they need to use their own{" "}
              <code>transform</code> attribute instead.
            </p>
          </div>
          <div>
            <div id="prop-transform-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-transforms-1/#transform-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Transforms Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-transform-origin">
          transform-origin{" "}
          <a
            href="#prop-transform-origin"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-transform-origin-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>transform-origin: [ center |&nbsp;left
                  |&nbsp;right |&nbsp;top |&nbsp;bottom |&nbsp;
                  <i>percent</i> |&nbsp;<i>length</i> ]{"{"}1..2
                  {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>50% 50%</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>transformable elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-transform-origin-comments">
              Comments
            </div>
            <p>
              If only one term is given, then the second is
              assumed to be <code>center</code>. In particular,
              if only a percentage or length is given, then it
              is assumed to be the horizontal coordinate.
            </p>
            <p>
              Either one or two coordinates can be given, and if
              both values are given as keywords, order doesn't
              matter; but if two coordinates are given and
              either coordinate is a length or percentage, then
              the horizontal component must come first: so{" "}
              <code>top 50%</code> is not valid, but{" "}
              <code>top</code> and<code>top center</code> and{" "}
              <code>50% top</code> are all valid and equivalent.
            </p>
          </div>
          <div>
            <div id="prop-transform-origin-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-transforms-1/#transform-origin-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Transforms Module Level 1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-unicode-bidi">
          unicode-bidi{" "}
          <a href="#prop-unicode-bidi" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-unicode-bidi-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    unicode-bidi: normal |&nbsp;embed
                    |&nbsp;bidi-override
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-unicode-bidi-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#propdef-unicode-bidi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-unicode-range">
          unicode-range{" "}
          <a href="#prop-unicode-range" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-unicode-range-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>unicode-range: <i>urange</i>+</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>U+0-10FFFF</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>@font-face at-rule</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-unicode-range-examples">Examples</div>
            <div className="example">
              <div className="programlisting">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>@font-face {"{"} unicode-range: U+0025-00FF; {"}"}</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-unicode-range-comments">Comments</div>
            <p>
              This CSS at-rule descriptor, used with the
              <a href="/doc/css-refs#at-font-face">
                <code>@font-face</code>
              </a>{" "}
              at-rule, defines the set of Unicode codepoints
              that may be supported by the font face for which
              it is declared. The descriptor value is a
              comma-delimited list of Unicode range
              (&lt;urange&gt;) values. The union of these ranges
              defines the set of codepoints that serves as a
              hint for user agents when deciding whether or not
              to download a font resource needed for the test
              content of a particular page.
            </p>
          </div>
          <div>
            <div id="prop-unicode-range-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-fonts-3/#descdef-font-face-unicode-range"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fonts Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-vertical-align">
          vertical-align{" "}
          <a
            href="#prop-vertical-align"
            className="self-link"
          />
        </summary>
        <div>
          <div>
            <div id="prop-vertical-align-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>vertical-align: baseline |&nbsp;sub
                  |&nbsp;super |&nbsp;top |&nbsp;text-top
                  |&nbsp;middle |&nbsp;bottom |&nbsp;text-bottom
                  |&nbsp;<i>length</i> |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>baseline</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        inline-level and table-cell elements
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-vertical-align-spec">
              Specification
            </div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-visibility">
          visibility{" "}
          <a href="#prop-visibility" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-visibility-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>visibility: visible |&nbsp;hidden</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>visible</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-visibility-comments">Comments</div>
            <p>
              This property can be used to make the content of
              an element invisible.
            </p>
            <p className="note">
              Unlike using <code>display: none</code>, the
              element will still take up space on the page and
              its descendants may still have visible content.
            </p>
          </div>
          <div>
            <div id="prop-visibility-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visufx.html#visibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-white-space">
          white-space{" "}
          <a href="#prop-white-space" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-white-space-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    white-space: normal |&nbsp;pre
                    |&nbsp;pre-wrap |&nbsp;pre-line
                    |&nbsp;nowrap
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-white-space-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/text.html#white-space-prop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-widows">
          widows <a href="#prop-widows" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-widows-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>widows: <i>integer</i> |&nbsp;
                  <span className="ext">
                    <i>percent</i>
                  </span></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>1</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>block container elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-widows-comments">Comments</div>
            <p>
              If a paragraph is split over two pages or columns,
              this property determines the minimum number of
              lines that must be left at the top of the second
              page or column.
            </p>
            <p>
              The percentage value only applies to{" "}
              <a href="/doc/prince-for-books">
                Prince for Books
              </a>
              , and indicates that one widow line is accepted,
              as long as the line width is at least the given
              percentage value of the available page width, to
              avoid the worst case of having a widow line that
              is only one or two words long. For more details
              see{" "}
              <a href="/doc/prince-for-books#fractional-widows">
                Fractional Widows
              </a>
              .
            </p>
            <p>
              Please note that the initial value has been
              changed from <code>2</code> to <code>1</code>.
            </p>
          </div>
          <div>
            <div id="prop-widows-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/paged#widows-and-orphans">
                  Widows and orphans
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books">
                  Prince for Books
                </a>
              </li>
              <li>
                <a href="/doc/prince-for-books#fractional-widows">
                  Fractional Widows
                </a>
              </li>
              <li>
                <a href="#prop-orphans">orphans</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-widows-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/page.html#break-inside"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-break-3/#widows-orphans"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Fragmentation Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-width">
          width <a href="#prop-width" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-width-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>width: auto |&nbsp;<i>length</i> |&nbsp;
                  <i>percent</i> |&nbsp;min-content
                  |&nbsp;max-content</code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements but non-replaced inline
                        elements, table rows, and row groups
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-width-comments">Comments</div>
            <p className="note">
              The values <code>min-content</code> and{" "}
              <code>max-content</code> do not affect auto table
              layout.
            </p>
          </div>
          <div>
            <div id="prop-width-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visudet.html#the-width-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/css-sizing-3/#sizing-values"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Intrinsic &amp; Extrinsic Sizing Module
                  Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-word-break">
          word-break{" "}
          <a href="#prop-word-break" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-word-break-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    word-break: normal |&nbsp;keep-all
                    |&nbsp;break-all
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div id="prop-word-break-comments">Comments</div>
            <p className="note">
              Prince does not support the value{" "}
              <code>break-word</code>. Use the value{" "}
              <code>break-all</code> or the property{" "}
              <a href="#prop-overflow-wrap">overflow-wrap</a>
              with the value <code>break-word</code> instead.
            </p>
          </div>
          <div>
            <div id="prop-word-break-seealso">See Also</div>
            <ul>
              <li>
                <a href="/doc/styling#paragraph-formatting">
                  Paragraph formatting
                </a>
              </li>
              <li>
                <a href="#prop-overflow-wrap">overflow-wrap</a>
              </li>
            </ul>
          </div>
          <div>
            <div id="prop-word-break-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#word-break-property"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-word-spacing">
          word-spacing{" "}
          <a href="#prop-word-spacing" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-word-spacing-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>word-spacing: normal |&nbsp;<i>length</i>{" "}
                  |&nbsp;<i>percent</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>normal</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>all elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-word-spacing-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/css-text-3/#propdef-word-spacing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Text Module Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-writing-mode">
          writing-mode{" "}
          <a href="#prop-writing-mode" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-writing-mode-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>
                    writing-mode: horizontal-tb
                    |&nbsp;vertical-rl
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>horizontal-tb</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>
                        all elements except table row groups,
                        table column groups, table rows, and
                        table columns
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-writing-mode-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://drafts.csswg.org/css-writing-modes-3/#block-flow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Writing Modes Level 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
      <details>
        <summary id="prop-z-index">
          z-index{" "}
          <a href="#prop-z-index" className="self-link" />
        </summary>
        <div>
          <div>
            <div id="prop-z-index-syntax">Syntax</div>
            <div className="example">
              <div className="syntax-block">
                <div className="mdxCodeBlock_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-">
                  <code>z-index: auto |&nbsp;<i>number</i></code>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="example">
              <div className="syntax-block">
                <table className="property-table">
                  <tbody>
                    <tr>
                      <th scope="row">Initial value</th>
                      <td>
                        <code>auto</code>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applies to</th>
                      <td>positioned elements</td>
                    </tr>
                    <tr>
                      <th scope="row">Inherited</th>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div />
          <div>
            <div id="prop-z-index-spec">Specification</div>
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/CSS2/visuren.html#z-index"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  </div>
</div>
  );
}

export default CssProperties;
