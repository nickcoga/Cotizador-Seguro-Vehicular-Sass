import classes from "./ButtonReturn.module.scss";
import ChevronLeft from "../../assets/chevron_left_orange.svg";
import { useNavigate } from "react-router-dom";

export default function ButtonReturn({ enabledIndex, setEnabledIndex }) {
  let navigate = useNavigate();

  const handlerClick = () => {
    if (enabledIndex > 1) {
      setEnabledIndex(enabledIndex - 1);
    }
    //this method is to return to the previous page using react router dom v6
    navigate(-1);
  };

  return (
    <div className={classes.content} onClick={handlerClick}>
      <img
        className={classes.content__circle}
        src={ChevronLeft}
        alt="Chevronleft.svg"
      />
      <div>Volver</div>
    </div>
  );
}
