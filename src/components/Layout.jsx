import React from "react";
import Navbar, { NavMobile } from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children, aditionalStyles }) => {
  const [open, setOpen] = useState(false);
  const handlerOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={`gradiente ${aditionalStyles}`}>
      <Navbar set={handlerOpen} />
      {open ? <NavMobile /> : children}
      <Footer />
    </div>
  );
};

export default Layout;
