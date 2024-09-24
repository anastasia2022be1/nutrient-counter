import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Состояние для управления видимостью меню

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed); // Переключаем состояние
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Nutrient App</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed} // Используем состояние для управления значением
          aria-label="Toggle navigation"
          onClick={handleNavToggle} // Обработчик клика
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">Search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/food">Food</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/week-plan">Week Plan</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
