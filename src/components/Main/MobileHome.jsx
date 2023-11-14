import React from 'react';
import styles from './MobileHome.module.css';
import notes from '../../assets/notes.jpg';

function MobileHome() {
  return (
    <div
      className={styles.mobile__home}
      style={{
        backgroundImage: `url(${notes})`,
      }}
    >
      Create Your First Note...
    </div>
  );
}

export default MobileHome;
