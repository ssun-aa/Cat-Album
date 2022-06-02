import { SearchIcon, StarIcon } from 'assets/svgs/index.js';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.wrap}>
      <NavLink
        to="/"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: 'black' } : {})}
      >
        <SearchIcon />
      </NavLink>
      <NavLink
        to="/fav"
        className={styles.icon}
        style={({ isActive }) => (isActive ? { fill: 'black' } : {})}
      >
        <StarIcon />
      </NavLink>
    </div>
  );
}

export default Navigation;
