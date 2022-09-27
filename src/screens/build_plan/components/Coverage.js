import classes from "./Coverage.module.scss";
import PersonCard from "../../../assets/person_card.svg";

export default function Coverage({ plate, year, brand }) {
  return (
    <div className={classes.content}>
      <p className={classes.content__title}>Mira las coberturas</p>
      <p className={classes.content__subtitle}>
        Conoce las coberturas para tu plan
      </p>
      <div className={classes.content__card}>
        <div className={classes.content__card__containerText}>
          <p className={classes.content__card__containerText__textPlate}>
            {" "}
            Placa: {plate}{" "}
          </p>
          <div className={classes.content__card__containerText__contentSubText}>
            <p>
              {brand} {year}{" "}
            </p>
            <p>Modelo</p>
          </div>
          <p className={classes.content__card__containerText__editText}>
            Editar
          </p>
        </div>
        <div className={classes.content__card__imageContainer}>
          <img
            className={classes.content__card__imageContainer__personCard}
            src={PersonCard}
            alt="PersonCard.svg"
          />
        </div>
      </div>
    </div>
  );
}
