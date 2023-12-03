import React from 'react';
import styles from "./Welcome.module.css";

function Welcome({ name = 'Guest' }) {
  return <p className={styles.welcome}>Welcome, {name}!</p>;
}

export default Welcome;
