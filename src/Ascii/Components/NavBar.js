import React from "react";
import style from "../Ascii.module.css";

const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <div className={style.NavBarLogo}>Ascii Write</div>
    </nav>
  );
};

export default NavBar;
