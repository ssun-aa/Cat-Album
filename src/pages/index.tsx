import Layout from 'layout';
import { useRecoilState } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { themeState } from 'recoil/atom';
import { useEffect } from 'react';
import Favorites from './Favorites';
import Create from './Create';
import Main from './Main';
import Chart from './Chart';

function App() {
  const [theme, settheme] = useRecoilState(themeState);

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', theme);
    settheme(theme);
  }, [settheme, theme]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="/chart" element={<Chart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
