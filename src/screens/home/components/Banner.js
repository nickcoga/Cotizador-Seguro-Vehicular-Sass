import classes from "./Banner.module.scss";
import LadyCarMobile from "../../../assets/lady_car_mobile.svg";
import HomeBackground from "../../../assets/home_background.svg";
import LadyCarDesktop from "../../../assets/lady_car_desktop.svg";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__contentText}>
        <div className={classes.banner__text}>¡Nuevo!</div>
        <h1 className={classes.banner__title}>
          Seguro <span className={classes.banner__subtitle1}>Vehicular</span>
        </h1>
        <h1 className={classes.banner__subtitle2}>Tracking</h1>
        <p className={classes.banner__paragraph}>
          Cuentanos donde le haras seguimiento a tu seguro
        </p>
      </div>

      <div className={classes.banner__contentImage}>
        <img
          className={classes.banner__contentImage__lady_car_mobile}
          src={LadyCarMobile}
          alt="Lady with car"
        />
        <img
          className={classes.banner__contentImage__home_background}
          src={HomeBackground}
          alt="Home"
        />
        <img
          className={classes.banner__contentImage__lady_car_desktop}
          src={LadyCarDesktop}
          alt="Lady with car"
        />
      </div>

      <div className={classes.banner__copyright}>
        © 2020 RIMAC Seguros y Reaseguros.
      </div>
    </div>
  );
}
