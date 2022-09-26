import classes from "./Button.module.scss";
import ChevronRight from "../../assets/chevron_right.svg";

export function Button({ children, onClick, showArrow }) {
  return (
    <button onClick={onClick} showArrow={showArrow} className={classes.button}>
      {children}
      {showArrow ? <img src={ChevronRight} alt="ChevronRight.svg" /> : ""}
    </button>
  );
}
