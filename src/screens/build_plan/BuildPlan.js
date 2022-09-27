import { Fragment, useState } from "react";
import ButtonReturn from "../../shared/buttonReturn/ButtonReturn";
import Header from "../../shared/header/Header";
import Stepper from "../../shared/stepper/Stepper";
import ContentPrice from "./components/ContentPrice";
import Coverage from "./components/Coverage";
import PlanCoverage from "./components/PlanCoverage";

export default function BuildPlan({
  plate,
  year,
  brand,
  enabledIndex,
  setEnabledIndex,
}) {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <Fragment>
      <Header />
      <Stepper enabledIndex={enabledIndex} setEnabledIndex={setEnabledIndex} />
      <ButtonReturn
        enabledIndex={enabledIndex}
        setEnabledIndex={setEnabledIndex}
      />
      <Coverage plate={plate} year={year} brand={brand} />
      <PlanCoverage
        toggle1={toggle1}
        toggle2={toggle2}
        toggle3={toggle3}
        setToggle1={setToggle1}
        setToggle2={setToggle2}
        setToggle3={setToggle3}
      />
      <ContentPrice toggle1={toggle1} toggle2={toggle2} toggle3={toggle3} />
    </Fragment>
  );
}
