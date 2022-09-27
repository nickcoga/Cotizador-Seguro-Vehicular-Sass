import React, { Fragment } from "react";
import ButtonReturn from "../../shared/buttonReturn/ButtonReturn";
import Header from "../../shared/header/Header";
import Stepper from "../../shared/stepper/Stepper";
import FormCarData from "./components/FormCarData";

export default function CarData({
  user,
  year,
  setYear,
  brand,
  setBrand,
  enabledIndex,
  setEnabledIndex,
}) {
  return (
    <Fragment>
      <Header />
      <Stepper enabledIndex={enabledIndex} setEnabledIndex={setEnabledIndex} />
      <ButtonReturn
        enabledIndex={enabledIndex}
        setEnabledIndex={setEnabledIndex}
      />
      <FormCarData
        user={user}
        year={year}
        setYear={setYear}
        brand={brand}
        setBrand={setBrand}
        setEnabledIndex={setEnabledIndex}
      />
    </Fragment>
  );
}
