import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Prince Documentation`}
      description="Prince Documentation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main id="entry">
        <p>In the documentation section you can find:</p>
        <ul>
          <li>the <a href="/doc/installing/">Installation Guide</a>,</li>
          <li>the <a href="/doc/intro-userguide/">User Guide</a> for the latest version, and</li>
          <li>the <a href="/doc/css-props/">Reference Guide</a>.</li>
        </ul>
        <details id="version-nav">
          <summary>
            Alternatively, you can <b>choose</b> the User Guide by Prince version.
          </summary>
          <div id="section-nav"><ul>
            <li class="curr"><a href="/doc/intro-userguide">User Guide for Prince 14 (current)</a></li>
            <li><a href="/doc/13/intro-userguide">User Guide for Prince 13</a></li>
            <li><a href="/doc/12/doc-prince/">User Guide for Prince 12</a></li>
            <li><a href="/doc/11/">User Guide for Prince 11</a></li>
            <li><a href="/doc/10/">User Guide for Prince 10</a></li>
            <li><a href="/doc/9.0/">User Guide for Prince 9.0</a></li>
            <li><a href="/doc/8.1/">User Guide for Prince 8.1</a></li>
            <li><a href="/doc/7.1/">User Guide for Prince 7.1</a></li>
            <li><a href="/doc/6.0/">User Guide for Prince 6.0</a></li>
            <li><a href="/doc/5.1/">User Guide for Prince 5.1</a></li>
          </ul></div>
        </details>
      </main>
    </Layout>
  );
}

export default Home;
