import { Fragment } from "react";
import classes from "./Stepper.module.scss";
import DottepLine from "../../assets/dottep_line.svg";
import Progressbar from "../progressbar/Progressbar";

const stepTitles = ["Datos", "Arma tu plan"];

export default function Stepper({ enabledIndex, setEnabledIndex }) {
  return (
    <Fragment>
      <div className={classes.stepperDesktop}>
        {stepTitles.map((title, index) => {
          const isLastElement = stepTitles.length === index + 1;

          return (
            <div className={classes.stepperDesktop__contentOption} key={title}>
              {enabledIndex === index + 1 ? (
                <div>
                  <div
                    className={classes.stepperDesktop__contentOption__number}
                  >
                    {" "}
                    {index + 1}
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className={classes.stepperDesktop__contentOption__number2}
                  >
                    {" "}
                    {index + 1}
                  </div>
                </div>
              )}
              {isLastElement ? null : (
                <img
                  className={
                    classes.stepperDesktop__contentOption__dottep__line
                  }
                  src={DottepLine}
                  alt="Dottep Line"
                />
              )}
              <div className={classes.stepperDesktop__contentOption__option}>
                {title}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.stepperMobile}>
        <Progressbar
          enabledIndex={enabledIndex}
          setEnabledIndex={setEnabledIndex}
        />
      </div>
    </Fragment>
  );
}
