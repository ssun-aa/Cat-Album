import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import React from 'react';
import styles from './layout.module.scss';

function Layout() {
  return (
    <div className={styles.app}>
      <div className={styles.wrap}>
        <Outlet />
        <nav className={styles.nav}>
          <Navigation />
        </nav>
      </div>
    </div>
  );
}

export default Layout;
