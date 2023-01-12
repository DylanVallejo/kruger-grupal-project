import { NavLink } from "react-router-dom";
import logo from '../images/home.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <NavLink className="nav-home" to="/" activeClassName="active" exact>
                <img src={logo} alt="" className="home-logo" width="50px" height="50px" />
            </NavLink>
            <NavLink className="nav-birth" to="/birth" activeClassName="active">
                Su nacimiento
            </NavLink>
            <NavLink className="nav-agregar" to="/agregar" activeClassName="active">
                Agregar
            </NavLink>
            <NavLink className="nav-stars" to="/my-stars" activeClassName="active">
                Mis Estrellas
            </NavLink>
            <NavLink className="nav-family-stars" to="/family-stars" activeClassName="active">
                Estrellas Familiares
            </NavLink>
            <NavLink className="nav-one-star" to="/one-star" activeClassName="active">
                Una estrella
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