/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    // return `${baseUrl}${docsPart}${langPart}${doc}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="copyright">
          <div className="footer-logo"><img src={this.props.config.baseUrl + this.props.config.footerIcon} alt="Prince" /><br />{this.props.config.copyright}</div>
          <div className="about-contact"><a href="/company/">About Us</a> <a href="/privacy/">Privacy Policy</a> <a href="/contact/">Contact Us</a></div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
