import React from 'react';
import styles from './MobileNotesContent.module.css';

function MobileNotesContent({ note }) {
  return (
    <div className={styles.mobile__notes__content__body}>
      <div className={styles.mobile__notes__content__date__time__details}>
        <div className={styles.mobile__notes__content__date}>{note.date}</div>
        <div className={styles.mobile__notes__content__time}>{note.time}</div>
      </div>
      <div className={styles.mobile__notes__content__details}>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default MobileNotesContent;
