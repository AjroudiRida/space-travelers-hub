import { Route, Routes } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
