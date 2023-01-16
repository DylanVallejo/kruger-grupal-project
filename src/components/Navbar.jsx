import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "./Profile";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ set }) => {
  const { user } = UserAuth();
  return (
    <>
      <nav
        className={`hidden w-screen md:flex items-center justify-between px-4 ${styles.navbar}`}
      >
        <NavLink className="text-white text-2xl" to="/">
          <AiFillHome />
        </NavLink>

        <div className="flex items-center gap-4 justify-around">
          <div className={styles.navElements}>
            <NavLink className={styles.navBirth} to="/birth">
              Busca tu imagen
            </NavLink>
            <NavLink className={styles.navAgregar} to="/agregar">
              Agregar
            </NavLink>
            {Object.entries(user).length !== 0 && (
              <>
                <NavLink className={styles.navStars} to="/my-stars">
                  Mis Estrellas
                </NavLink>
              </>
            )}

            <NavLink className={styles.navAbout} to="/about">
              About
            </NavLink>
            <NavLink className={styles.navContact} to="/contact">
              Contact
            </NavLink>
          </div>
          <Profile />
        </div>
      </nav>

      {/* Nav for mobile */}
      <nav className="md:hidden h-12 bg-[#07052c] w-screen flex justify-between items-center px-4">
        <button className="text-3xl">
          <NavLink className="text-white" to="/">
            <AiFillHome />
          </NavLink>
        </button>
        <button className="text-4xl text-white" onClick={set}>
          <GiHamburgerMenu className="ml-40" />
        </button>
      </nav>
    </>
  );
};
export const NavMobile = () => {
  const { user } = UserAuth();

  return (
    <nav className="bg-teal-400 h-screen">
      <div className="flex flex-col justify-around text-black">
        <NavLink
          to="/birth"
          className="border py-4 text-xl text-center uppercase"
        >
          Su nacimiento
        </NavLink>
        <NavLink
          to="/agregar"
          className="border py-4 text-xl text-center uppercase"
        >
          Agregar
        </NavLink>
        {Object.entries(user).length !== 0 && (
          <>
            <NavLink
              to="/my-stars"
              className="border py-4 text-xl text-center uppercase"
            >
              Mis Estrellas
            </NavLink>
          </>
        )}

        <NavLink
          to="/about"
          className="border py-4 text-xl text-center uppercase"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="border py-4 text-xl text-center uppercase"
        >
          Contact
        </NavLink>
      </div>
      <Profile addstyles="border rounded bg-none border-[0] shadow-none flex items-center justify-center gap-2 text-xl text-center text-black font-semibold" />
    </nav>
  );
};
export default Navbar;
