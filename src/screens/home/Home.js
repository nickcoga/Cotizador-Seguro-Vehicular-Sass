import { Fragment } from "react";
import Header from "../../shared/header/Header";
import Banner from "./components/Banner";
import FormLogin from "./components/FormLogin";

export default function Home({ setUser, plate, setPlate }) {
  return (
    <Fragment>
      <Header />
      <Banner />
      <FormLogin setUser={setUser} plate={plate} setPlate={setPlate} />
    </Fragment>
  );
}
