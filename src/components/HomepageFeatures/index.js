import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // TODO: Add features after release.
  {
    title: '',
    image: '',
    description: (
      <>

      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
