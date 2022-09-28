import classes from "./Select.module.scss";

export default function Select({
  label = "",
  icon,
  showDefaultOption = false,
  placeholder = "",
  name = "",
  value,
  options = [],
  onChange,
}) {
  return (
    <div className={classes.container}>
      {label && (
        <label className={classes.container__inputLabel} htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className={classes.container__styledSelect}
        type="select"
        value={value}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
      >
        {showDefaultOption ? (
          <option disabled value="">
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {icon}
    </div>
  );
}
