import {
  TagIcon,
  HeartIcon,
  PhotoIcon,
  LightIcon,
  DarkIcon,
  ChartIcon,
} from 'assets/svgs/index.js';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { themeState } from 'recoil/atom';
import styles from './navigation.module.scss';

function Navigation() {
  const [theme, settheme] = useRecoilState(themeState);
  const handleThemeClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    settheme(newTheme);
  };
  return (
    <div className={styles.wrap}>
      <button type="button" onClick={handleThemeClick} className={styles.theme}>
        {theme === 'light' ? (
          <LightIcon className={styles.themeIcon} />
        ) : (
          <DarkIcon className={styles.themeIcon} />
        )}
      </button>
      <div className={styles.navWrap}>
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
        <NavLink
          to="/chart"
          aria-label="favorites"
          className={styles.icon}
          style={({ isActive }) => (isActive ? { fill: '#AEBAE8' } : {})}
        >
          <ChartIcon />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
