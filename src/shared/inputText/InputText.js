import classes from "./InputText.module.scss";

export default function InputText({
  label = "",
  caption = "",
  placeholder = "",
  name = "",
  value = "",
  onChange,
  required,
}) {
  return (
    <div className={classes.fieldContainer}>
      {label && <label htmlFor="name">{label}</label>}
      <div className={classes.fieldContainer__content}>
        <input
          className={classes.fieldContainer__styledInput}
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}
