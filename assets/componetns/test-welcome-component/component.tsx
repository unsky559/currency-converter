import * as React from 'react';
import styles from './style.module.scss';

const TestWelcomeComponent = () => {
  const welcomeText = 'TypeScriptReactStarter wish you good coding time ^-^';
  return (
    <h1 className={styles.welcomeText}>{welcomeText}</h1>
  );
};

export default TestWelcomeComponent;
