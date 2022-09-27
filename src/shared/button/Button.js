import classes from "./Button.module.scss";
import ChevronRight from "../../assets/chevron_right.svg";

function Button({ children, onClick, showarrow }) {
  return (
    <button onClick={onClick} showarrow={showarrow} className={classes.button}>
      {children}
      {showarrow ? <img src={ChevronRight} alt="ChevronRight.svg" /> : ""}
    </button>
  );
}

export default Button;
