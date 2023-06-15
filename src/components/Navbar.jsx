import { NavLink } from "react-router-dom";
import '../Navbar.css';

function Navbar() {
  return (
   
    <nav className="navbar">
         <h2 style={{color: 'black'}}>Book search app</h2>
      <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/fav" className="nav-link" activeClassName="active">Favourites</NavLink>
      
    </nav>
  );
}

export default Navbar;