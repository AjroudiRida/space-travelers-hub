import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/planet.png';
import './header.css';

const Header = () => (
  <header className="header">
    <nav className="nav" data-testid="menu">
      <Link className="logo-container" to="/">
        <img className="logo" src={logo} alt="logo" />
        <span className="logo-text">Space Travelers&apos; Hub</span>
      </Link>
      <ul className="menu">
        <li className="menu_item">
          <NavLink className="link_item" to="/" data-testid="rockets-link">
            Rockets
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink className="link_item" to="/missions">
            Missions
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink
            className="link_item"
            to="/profile"
            data-testid="profile-link"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr />
  </header>
);

export default Header;
