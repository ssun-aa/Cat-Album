import { TagIcon, HeartIcon, PhotoIcon } from 'assets/svgs/index.js';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.wrap}>
      <NavLink
        to="/"
        aria-label="tagSearch"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: '#AEBAE8' } : {})}
      >
        <TagIcon />
      </NavLink>
      <NavLink
        to="/create"
        aria-label="photo"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: '#AEBAE8' } : {})}
      >
        <PhotoIcon />
      </NavLink>
      <NavLink
        to="/fav"
        aria-label="favorites"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: '#AEBAE8' } : {})}
      >
        <HeartIcon />
      </NavLink>
    </div>
  );
}

export default Navigation;
