import React, { useState } from 'react';
import styles from './NotesPopup.module.css';

function NotesPopup({ groupNamesParent, setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      'groupNames',
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popup__title}>Create New Notes Group</div>
      <div className={styles.popup__input}>
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type='text'
          placeholder='Enter Group Name...'
        />
      </div>
      <div className={styles.popup__color__input}>
        <span>Group Color</span>
        <div className={styles.popup__color__input__color}>
          <div
            className={`${styles.popup__color__input__color__1} ${
              bgColor === 'rgb(179, 139, 250)' ? styles.highlight : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`${styles.popup__color__input__color__2} ${
              bgColor === 'rgb(255, 121, 242)' ? styles.highlight : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`${styles.popup__color__input__color__3} ${
              bgColor === 'rgb(67, 230, 252)' ? styles.highlight : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`${styles.popup__color__input__color__4} ${
              bgColor === 'rgb(241, 149, 118)' ? styles.highlight : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`${styles.popup__color__input__color__5} ${
              bgColor === 'rgb(0, 71, 255)' ? styles.highlight : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`${styles.popup__color__input__color__6} ${
              bgColor === 'rgb(102, 145, 255)' ? styles.highlight : null
            }`}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <div className={styles.popup__close}>
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default NotesPopup;
