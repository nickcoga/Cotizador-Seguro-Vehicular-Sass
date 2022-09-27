import { useState } from "react";
import classes from "./ContentCoverage.module.scss";
import ChevronDown from "../../../assets/chevron_down.svg";
import ChevronUp from "../../../assets/chevron_up.svg";
import Toggle from "../../../shared/toggle/Toggle";

export default function ContentCoverage({
  img,
  titleCoverage = "",
  chevronArrow,
  toggleName,
  toggle,
  setToggle,
}) {
  const [showText, setShowText] = useState(false);

  const handleChevronClick = () => {
    setShowText(!showText);
  };

  const handleCircleButtonClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__content}>
        <div className={classes.container__content__coverageOption}>
          {img.length > 0 ? <img src={img} alt="coverage icon" /> : ""}
          <p className={classes.container__content__coverageOption__text}>
            {titleCoverage}
          </p>
          <img
            className={classes.container__content__coverageOption__img}
            src={showText ? ChevronDown : ChevronUp}
            alt={`Chevron ${showText ? "down" : "up"}`}
            onClick={handleChevronClick}
          />

          <div
            className={
              classes.container__content__coverageOption__contentToggle
            }
          >
            <Toggle
              toggleName={toggleName}
              toggle={toggle}
              setToggle={setToggle}
            />
          </div>
        </div>

        <div
          className={classes.container__content__contentButton}
          onClick={handleCircleButtonClick}
        >
          {toggle ? (
            <div className={classes.container__content__contentButton__circle}>
              -
            </div>
          ) : (
            <div className={classes.container__content__contentButton__circle}>
              +
            </div>
          )}
          {toggle ? <div>QUITAR</div> : <div>AGREGAR</div>}
        </div>

        {showText ? (
          <p className={classes.container__paragraph}>
            He salido de casa a las cuatro menos cinco para ir a la academia de
            ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,
            na llego a la academia que está en el centro del pueblo en una plaza
            medio-grande y dejo donde siempre la bici atada con una pitón a un
            sitio de esos de poner las bicis y mucho más
          </p>
        ) : null}

        <div
          className={classes.container__content__seeMore}
          onClick={handleChevronClick}
        >
          <label>Ver {showText ? "menos" : "más"}</label>
          <img
            src={showText ? ChevronUp : ChevronDown}
            alt={`Chevron ${showText ? "up" : "down"}`}
          />
        </div>
      </div>
    </div>
  );
}
