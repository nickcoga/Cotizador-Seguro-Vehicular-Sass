import ContentCoverage from "./ContentCoverage";
import classes from "./PlanCoverage.module.scss";
import StolenTire from "../../../assets/stolen_tire.svg";
import Shock from "../../../assets/shock.svg";
import TotalLoss from "../../../assets/total_loss.svg";

export default function PlanCoverage({
  toggle1,
  toggle2,
  toggle3,
  setToggle1,
  setToggle2,
  setToggle3,
}) {
  return (
    <div className={classes.container}>
      <p className={classes.container__title}>Agregar o quitar coberturas</p>
      <div className={classes.container__contentTab}>
        <button className={classes.container__contentTab__Tab}>
          Protege a tu auto
        </button>
        <button className={classes.container__contentTab__Tab}>
          Protege a los que te rodean
        </button>
        <button className={classes.container__contentTab__Tab}>
          Mejora tu plan
        </button>
      </div>
      <ContentCoverage
        img={StolenTire}
        titleCoverage="Llanta Robada"
        toggleName="stolen_tire"
        toggle={toggle1}
        setToggle={setToggle1}
      />
      <ContentCoverage
        img={Shock}
        titleCoverage="Choque y/o pasarte la luz roja"
        toggleName="shock"
        toggle={toggle2}
        setToggle={setToggle2}
      />
      <ContentCoverage
        img={TotalLoss}
        titleCoverage="Atropello en la vía Evitamiento"
        toggleName="total_loss"
        toggle={toggle3}
        setToggle={setToggle3}
      />
    </div>
  );
}
