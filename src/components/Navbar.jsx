import { NavLink } from "react-router-dom";
import logo from '../images/home.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <NavLink className="nav-home" to="/" activeClassName="active" exact>
                    <img src={logo} alt="" className="logo" width="10px" height="10px" />
            </NavLink>
            <NavLink className="nav-birth" to="/birth" activeClassName="active">
                Su nacimiento
            </NavLink>
            <NavLink className="nav-agregar" to="/agregar" activeClassName="active">
                Agregar
            </NavLink>
            <NavLink className="nav-stars" to="/stars" activeClassName="active">
                Mis Estrellas
            </NavLink>
            <NavLink className="nav-about" to="/about" activeClassName="active">
                About
            </NavLink>
            <NavLink className="nav-contact" to="/contact" activeClassName="active">
                Contact
            </NavLink>
        </div>
    );
}

export default Navbar;