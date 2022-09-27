import { Fragment } from "react";
import Chevronleft from "../../assets/chevron_left.svg";
import classes from "./Progressbar.module.scss";
import { useNavigate } from "react-router-dom";

export default function Progressbar({ enabledIndex, setEnabledIndex }) {
  let navigate = useNavigate();

  const handleClick = () => {
    if (enabledIndex > 1) {
      setEnabledIndex(enabledIndex - 1);
    }
    navigate(-1);
  };

  return (
    <Fragment>
      <div className={classes.contentProgress}>
        <div
          className={classes.contentProgress__circleReturn}
          onClick={handleClick}
        >
          <img src={Chevronleft} alt="Chevronleft.svg" />
        </div>
        <p className={classes.contentProgress__stepText}>
          PASO {enabledIndex} de {enabledIndex + 1}{" "}
        </p>
        <progress
          className={classes.contentProgress__progress}
          value={enabledIndex === 1 ? "50" : "100"}
          max="100"
        >
          {enabledIndex === 1 ? "50%" : "100%"}
        </progress>
      </div>
    </Fragment>
  );
}
