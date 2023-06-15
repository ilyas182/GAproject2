import { NavLink } from "react-router-dom";
import '../Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/fav" className="nav-link" activeClassName="active">Favourites</NavLink>
    </nav>
  );
}

export default Navbar;