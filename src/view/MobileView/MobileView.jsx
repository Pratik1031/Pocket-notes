import React, { useState, useEffect } from 'react';
import styles from './MobileView.module.css';
import MobilePopup from '../../components/Popup/MobilePopup';
import MobileNotes from '../../components/Notes/MobileNotes';
import MobileHome from '../../components/Main/MobileHome';

function MobileView() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem('groupNames') || []
  );

  useEffect(() => {
    const data = localStorage.getItem('groupNames');
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem('groupNames'));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div className={styles.mobile__sidebar}>
      <div className={styles.mobile__sidebar__title}>Pocket Notes</div>
      <div className={styles.mobile__sidebar__create__notes__btn}>
        <button onClick={handleClick}>
          <span id='add'>+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className={styles.mobile__sidebar__notes__title}>
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <MobileNotes title={title} key={index} />
          ))
        ) : (
          <MobileHome />
        )}
      </div>
      {showPopup && (
        <div className={styles.mobile__popup__overlay}>
          <MobilePopup
            onClose={handleClose}
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
          />
        </div>
      )}
    </div>
  );
}

export default MobileView;
