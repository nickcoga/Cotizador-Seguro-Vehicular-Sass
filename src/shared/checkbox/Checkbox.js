import classes from "./Checkbox.module.scss";

export default function Checkbox({ text }) {
  return (
    <div className={classes.content}>
      <input
        className={classes.content__styledCheckbox}
        id="styled-checkbox-1"
        type="checkbox"
        value="value1"
      />
      <label htmlFor="styled-checkbox-1">{text}</label>
    </div>
  );
}
