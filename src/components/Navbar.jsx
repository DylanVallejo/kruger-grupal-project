import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import logo from "../images/home.png";
import Profile from "./Profile";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {

  const { user } = UserAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink className="nav-home" to="/" activeClassName="active" exact>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="flex items-center gap-4 justify-around">
          <div className={styles.navElements}>
            <NavLink
              className={styles.navBirth}
              to="/birth"
              activeClassName="active"
            >
              Su nacimiento
            </NavLink>
            <NavLink
              className={styles.navAgregar}
              to="/agregar"
              activeClassName="active"
            >
              Agregar
            </NavLink>
            {Object.entries(user).length !== 0 && (
              <>
                <NavLink
                  className={styles.navStars}
                  to="/my-stars"
                  activeClassName="active"
                >
                  Mis Estrellas
                </NavLink>
                <NavLink
                  className={styles.navFamilyStars}
                  to="/family-stars"
                  activeClassName="active"
                >
                  Estrellas Familiares
                </NavLink>
              </>
            )}

              {/* <NavLink
                className={styles.navOneStar}
                to="/one-star"
                activeClassName="active"
              >
                Una estrella
              </NavLink> */}
            <NavLink
              className={styles.navAbout}
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              className={styles.navContact}
              to="/contact"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </div>
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
