import React from 'react';
import PublicChrome from '../components/PublicChrome';
import GlobalOverlays from '../components/GlobalOverlays';
import styles from '../styles/App.module.css';
import LiveClassroomPortal from '../components/LiveClassroomPortal';

export default function SiteLayout({ children }) {
  return (
    <>
      <PublicChrome />
      <div id="app-container" className={`${styles.main} flex-grow flex flex-col`}>
        {children}
      </div>
      <GlobalOverlays />
      <LiveClassroomPortal />
    </>
  );
}
