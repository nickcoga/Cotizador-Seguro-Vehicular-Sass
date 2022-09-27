import classes from "./Thanks.module.scss";
import Header from "../../shared/header/Header";
import Button from "../../shared/button/Button";
import PersonBackgroundMobile from "../../assets/person_background_mobile.svg";
import PersonBackgroundDesktop from "../../assets/person_background_desktop.svg";

export default function Thanks({ user }) {
  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.container__contentImage}>
        <img
          className={classes.container__contentImage__personMobile}
          src={PersonBackgroundMobile}
          alt="Background Img"
        />
        <img
          className={classes.container__contentImage__personDesktop}
          src={PersonBackgroundDesktop}
          alt="Background Img"
        />
      </div>

      <div className={classes.container__contentText}>
        <span className={classes.container__contentText__title}>
          ¡Te damos la bienvenida!
        </span>
        <span className={classes.container__contentText__subtitle}>
          Cuenta con nosotros para proteger tu vehículo
        </span>
        <span className={classes.container__contentText__description}>
          <span className={classes.container__contentText__description__email}>
            {" "}
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
          </span>{" "}
          <span>{user.email} </span>
        </span>
        <div className={classes.container__contentText__contentButton}>
          <Button>CÓMO USAR MI SEGURO</Button>
        </div>
      </div>

      <footer className={classes.container__footer}>
        © 2020 RIMAC Seguros y Reaseguros.
      </footer>
    </div>
  );
}
