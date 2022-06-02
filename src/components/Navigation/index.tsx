import { SearchIcon, StarIcon } from 'assets/svgs/index.js';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.wrap}>
      <NavLink
        to="/create"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: '#45495C' } : {})}
      >
        <SearchIcon />
      </NavLink>
      <NavLink
        to="/fav"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: '#45495C' } : {})}
      >
        <StarIcon />
      </NavLink>
    </div>
  );
}

export default Navigation;
