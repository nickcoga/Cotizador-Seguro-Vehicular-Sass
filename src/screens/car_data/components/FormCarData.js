import { Fragment, useState } from "react";
import yearOptions from "../../../constants/YearOptions.js";
import Brands from "../../../constants/Brands.js";
import { helpers } from "../../../helpers/index.js";
import { useNavigate } from "react-router-dom";
import Car from "../../../assets/car.svg";
import classes from "./FormCarData.module.scss";
import Select from "../../../shared/select/Select.js";
import Button from "../../../shared/button/Button.js";

export default function FormCarData({
  user,
  year,
  setYear,
  brand,
  setBrand,
  setEnabledIndex,
}) {
  let navigate = useNavigate();
  const [sum, setSum] = useState(14300);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabledIndex(2);
    navigate(`/buildplan`);
  };

  const handleDecrement = () => {
    if (sum > 12500) setSum(sum - 100);
  };

  const handleIncrement = () => {
    if (sum < 16500) setSum(sum + 100);
  };

  return (
    <Fragment>
      <form
        className={classes.formCarData}
        id="form-cardata"
        onSubmit={handleSubmit}
      >
        <p className={classes.formCarData__textName}>
          ¡Hola,{" "}
          <span className={classes.formCarData__nameRed}> {user.name}! </span>
        </p>
        <p className={classes.formCarData__textDesciption}>
          Completa los datos de tu auto
        </p>

        <div className={classes.formCarData__content}>
          <Select
            label="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            options={yearOptions}
          />
          <Select
            label="Marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            options={Brands}
          />

          <p className={classes.formCarData__content__text}>
            ¿Tu auto es a gas?
          </p>
        </div>

        <div className={classes.formCarData__contentRadioButtons}>
          <input
            className="radio"
            id="radio-button-yes"
            type="radio"
            name="radio_option"
            value="yes"
          />
          <label htmlFor="radio-button-yes">Si</label>
          <input
            id="radio-button-no"
            type="radio"
            name="radio_option"
            value="no"
            defaultChecked
          />
          <label htmlFor="radio-button-no">No</label>
        </div>

        <div className={classes.formCarData__contentSum}>
          <label>Indica la suma asegurada</label>
          <div className={classes.formCarData__contentSum__sum}>
            <label>MIN $12.500</label>
            <label>|</label>
            <label>MAX $16.500</label>
          </div>
          <div className={classes.formCarData__contentSum__inputNumber}>
            <span
              className={classes.formCarData__contentSum__inputNumber__span}
              onClick={handleDecrement}
            >
              {" "}
              —{" "}
            </span>
            <div>
              <div>$ </div>
              <input
                className={classes.formCarData__contentSum__inputNumber__input}
                type="number"
                value={sum}
                readOnly
              />
              <div>{helpers.largeNumberFormatter(sum)}</div>
            </div>
            <span onClick={handleIncrement}> + </span>
          </div>
          <div className={classes.formCarData__contentSum__conteinerButton}>
            <Button showarrow type="submit" form="form-cardata">
              CONTINUAR
            </Button>
          </div>
        </div>
      </form>

      <hr className={classes.line} />

      <div className={classes.copyRight}>
        © 2020 RIMAC Seguros y Reaseguros.
      </div>

      <div className={classes.contentRight}>
        <label className={classes.contentRight__label}>AYUDA</label>
        <button className={classes.contentRight__helpButton}>
          <img src={Car} alt="Car.svg" />
          <div className={classes.contentRight__helpButton___textHelpButton}>
            <div>¿No encuentras el modelo?</div>
            <div
              className={classes.contentRight__helpButton__textHelpButtonColor}
            >
              CLIC AQUÍ
            </div>
          </div>
        </button>
      </div>
    </Fragment>
  );
}
