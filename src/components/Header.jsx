import { NavLink } from "react-router-dom";

export default function Header() {
  return (
       <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/food">Food</NavLink>
      <NavLink to="/week-plan">Weekplan</NavLink>
    </nav>
  )
}
