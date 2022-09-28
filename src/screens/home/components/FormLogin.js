import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../../shared/inputText/InputText";
import InputTextSelect from "../../../shared/inputTextSelect/InputTextSelect";
import classes from "./FormLogin.module.scss";
import typeDocs from "../../../constants/TypeDocs.js";
import UsersService from "../../../services/users_services";
import Button from "../../../shared/button/Button";
import Checkbox from "../../../shared/checkbox/Checkbox";

export default function FormLogin({ setUser, plate, setPlate }) {
  const [phone, setPhone] = useState("");
  const [nroDoc, setNroDoc] = useState("");
  const [typeDoc, setTypeDoc] = useState("Dni");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usersService = new UsersService();
    const [user] = await usersService.show(nroDoc, typeDoc);
    setUser(user);
    // TODO: handle error when user doesn't exist in db.json

    navigate(`/cardata/${user.id}`);
  };

  return (
    <form className={classes.form} id="form1" onSubmit={handleSubmit}>
      <h2 className={classes.form__title}>Dejanos tus datos</h2>
      <div className={classes.form__contentInputs}>
        <InputTextSelect
          required
          options={typeDocs}
          placeholderInput="Nro. de Doc"
          valueInput={nroDoc}
          valueSelect={typeDoc}
          onChangeInput={(e) => setNroDoc(e.target.value)}
          onChangeSelect={(e) => setTypeDoc(e.target.value)}
        />
        <InputText
          required
          label=""
          placeholder="Celular"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputText
          required
          label=""
          placeholder="Placa"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />
      </div>
      <label className={classes.form__label}>
        <Checkbox />
        <div>
          Acepto la{" "}
          <a
            className={classes.form__link}
            href="https://www.rimac.com.pe/uploads/Ley29733_proteccion_de_datos_personales.pdf"
          >
            Política de Protección de Datos Personales{" "}
          </a>
          y los{" "}
          <a
            className={classes.form__link}
            href="https://www.rimac.com/terminos-y-condiciones"
          >
            Terminos y Condiciones.
          </a>
        </div>
      </label>

      <div className={classes.form__containerButton}>
        <Button type="submit" form="form1">
          <div>COTÍZALO</div>
        </Button>
      </div>
    </form>
  );
}
