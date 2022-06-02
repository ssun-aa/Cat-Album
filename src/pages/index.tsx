import Layout from 'layout';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from './Favorites';
import Main from './Main';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Main />} />
            <Route path="/fav" element={<Favorites />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
