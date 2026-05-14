import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const navLinkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav className="navbar navbar-expand-lg app-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Nutrient App</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/search">Search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/food">Food</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/week-plan">Week Plan</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
