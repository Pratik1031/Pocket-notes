import React from 'react';
import styles from './DesktopView.module.css';
import DesktopSidebar from '../../components/SideBar/DesktopSidebar';
import DesktopHome from '../../components/Main/DesktopHome';
import DesktopNotes from '../../components/Notes/DesktopNotes';
import usePocketContext from '../../hooks/usePocketContext';

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className={styles.desktop}>
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
