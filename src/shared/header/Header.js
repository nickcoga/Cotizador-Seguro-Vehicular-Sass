import React from "react";
import classes from "./Header.module.scss";
import Logo from "../../assets/rimac_logo.svg";
import Phone from "../../assets/ic_phone.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__containerLeft}>
        <img className={classes.header__logo} src={Logo} alt="rimac_logo.svg" />
      </div>

      <div className={classes.header__containerRight}>
        <p className={classes.header__contentCuestion}>¿Tienes alguna duda?</p>
        <img className={classes.header__phone} src={Phone} alt="phone.svg" />
        <p className={classes.header__contentText}>Llámanos</p>
        <p className={classes.header__contentPhone}>(01) 411 6001</p>
      </div>
    </header>
  );
};

export default Header;
