import classes from "./InputText.module.scss";

export default function InputText({
  label = "",
  type = "",
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
          type={type}
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
