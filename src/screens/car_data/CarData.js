import React from "react";
import ButtonReturn from "../../shared/buttonReturn/ButtonReturn";
import Header from "../../shared/header/Header";
import Stepper from "../../shared/stepper/Stepper";
import FormCarData from "./components/FormCarData";
import classes from "./CardData.module.scss";

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
    <div className={classes.cardData}>
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
    </div>
  );
}
