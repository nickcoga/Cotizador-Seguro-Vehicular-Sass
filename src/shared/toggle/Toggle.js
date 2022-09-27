import classes from "./Toggle.module.scss";

export default function Toggle({ toggleName, toggle, setToggle }) {
  const handleChange = () => {
    setToggle(!toggle);
  };
  return (
    <div className={classes.container}>
      <input
        className={classes.container__mobileToggle}
        type="checkbox"
        name={toggleName}
        id={toggleName}
        value={toggle}
        onChange={handleChange}
      />
      <label htmlFor={toggleName}></label>
    </div>
  );
}
