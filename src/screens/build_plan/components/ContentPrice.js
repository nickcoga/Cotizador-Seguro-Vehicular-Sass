import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ContentPrice.module.scss";
import Flexible from "../../../assets/flexible_vehicular.svg";
import Check from "../../../assets/check.svg";
import { helpers } from "../../../helpers/index.js";
import {
  basePrice,
  stolenTirePrice,
  shockPrice,
  totalLossPrice,
} from "../../../constants/Prices";
import Button from "../../../shared/button/Button";

export default function ContentPrice({ toggle1, toggle2, toggle3 }) {
  let navigate = useNavigate();
  const [sum, setSum] = useState(basePrice);

  useEffect(() => {
    setSum(
      basePrice +
        (toggle1 ? stolenTirePrice : 0) +
        (toggle2 ? shockPrice : 0) +
        (toggle3 ? totalLossPrice : 0)
    );
  }, [toggle1, toggle2, toggle3]);

  const handlerClick = () => {
    navigate("/thanks");
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__content}>
        <div className={classes.container__content__price}>
          <div>${helpers.fixDecimalsFormatter(sum)} </div>
          <p>mensuales</p>
        </div>

        <div className={classes.container__content__contentLogo}>
          <div>
            <img src={Flexible} alt="Flexible Vehicular" />
          </div>
        </div>
      </div>

      <hr className={classes.container__line} />

      <div className={classes.container__contentDetails}>
        <p>El precio incluye:</p>

        <div className={classes.container__contentDetails__list}>
          <div>
            <img src={Check} alt="Check" />
            <label>Llanta de repuesto</label>
          </div>
          <div>
            <img src={Check} alt="Check" />
            <label>Analisis de motor</label>
          </div>
          <div>
            <img src={Check} alt="Check" />
            <label>Aros gratis</label>
          </div>
        </div>

        <div className={classes.container__contentDetails__contentButton}>
          <Button onClick={handlerClick}>Lo quiero</Button>
        </div>
      </div>
    </div>
  );
}
