import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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
          <li>the <a href="/doc/command-line/">Reference Guide</a>.</li>
        </ul>
        <p>Alternatively, you can choose the User Guide by Prince version:</p>
        <div id="section-nav">
          <ul>
            <li class="curr"><a href="/doc/intro-userguide">User Guide for Prince 13</a></li>
            <li><a href="/doc/12/doc-prince/">User Guide for Prince 12</a></li>
            <li><a href="/doc/11/">User Guide for Prince 11</a></li>
            <li><a href="/doc/10/">User Guide for Prince 10</a></li>
            <li><a href="/doc/9.0/">User Guide for Prince 9.0</a></li>
            <li><a href="/doc/8.1/">User Guide for Prince 8.1</a></li>
            <li><a href="/doc/7.1/">User Guide for Prince 7.1</a></li>
            <li><a href="/doc/6.0/">User Guide for Prince 6.0</a></li>
            <li><a href="/doc/5.1/">User Guide for Prince 5.1</a></li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
