import classes from "./InputTextSelect.module.scss";

export default function InputTextSelect({
  required,
  placeholderInput = "",
  placeholderSelect = "",
  nameInput = "",
  nameSelect = "",
  valueInput,
  valueSelect,
  showDefaultOption = false,
  options = [],
  onChangeInput,
  onChangeSelect,
  type,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.container__contentSelect}>
        <select
          className={classes.container__styledSelect}
          type="select"
          value={valueSelect}
          name={nameSelect}
          onChange={onChangeSelect}
        >
          {showDefaultOption ? (
            <option disabled value="">
              {placeholderSelect}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.container__contentInputText}>
        <input
          className={classes.container__contentInputText__styledInputText}
          type={type}
          value={valueInput}
          name={nameInput}
          onChange={onChangeInput}
          required={required}
          placeholder={placeholderInput}
        />
      </div>
    </div>
  );
}
