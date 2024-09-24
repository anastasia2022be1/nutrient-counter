import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Nutrient App</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
