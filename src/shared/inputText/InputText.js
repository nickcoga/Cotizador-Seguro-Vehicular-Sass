import classes from "./InputText.module.scss";

export default function InputText({
  label = "",
  caption = "",
  error = false,
  placeholder = "",
  name = "",
  value = "",
  onChange,
  required,
}) {
  return (
    <div className={classes.fieldContainer}>
      {label && <label htmlFor="name">{label}</label>}
      <div className={classes.fieldContainer__content} error={error}>
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

      {caption && <div error={error}> Caption test</div>}
    </div>
  );
}
