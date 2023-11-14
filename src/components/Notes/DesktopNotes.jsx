import React, { useEffect, useState } from 'react';
import styles from './DesktopNotes.module.css';
import enter from '../../assets/icons/enter.png';
import usePocketContext from '../../hooks/usePocketContext';

function DesktopNotes() {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#fff');
  const [initials, setInitials] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const { notes, setNotes, selected } = usePocketContext();

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem('groupNames'));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(' ')
          .map((word) => word.charAt(0))
          .join('')
          .toUpperCase()
      );
      setSelectedTitle(
        selectedGroup.name
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      );
    }
  }, [selected, setNotes]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveNotes();
    }
  };

  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text.trim(),
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText('');
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.desktop__notes}>
      <div className={styles.desktop__notes__title}>
        <div
          className={styles.desktop__notes__title__color}
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className={styles.desktop__notes__title__text}>
          {selectedTitle}
        </div>
      </div>
      <div className={styles.desktop__notes__content}>
        {notes && notes.length > 0
          ? notes.map((note, index) => (
              <div key={index} className={styles.desktop__notes__content__note}>
                <div
                  className={
                    styles.desktop__notes__content__date__time__details
                  }
                >
                  <div className={styles.desktop__notes__content__date}>
                    {note.date}
                  </div>
                  <div className={styles.desktop__notes__content__time}>
                    {note.time}
                  </div>
                </div>
                <div className={styles.desktop__notes__content__details}>
                  <p>{note.content}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className={styles.desktop__notes__input}>
        <textarea
          value={text}
          placeholder='Enter your notes here'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt='enter' onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default DesktopNotes;
