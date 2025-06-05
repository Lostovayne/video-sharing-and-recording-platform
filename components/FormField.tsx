const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  const InputToRender = ({ typeInput }: { typeInput: "input" | "textarea" | "select" }) => {
    if (typeInput === "textarea") {
      return <textarea id={id} name={id} />;
    } else if (typeInput === "select") {
      return (
        <select id={id} name={id} onChange={onChange} value={value}>
          {options.map(({ label, value }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    } else {
      return <input type={type} id={id} name={id} />;
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <InputToRender typeInput={as} />
    </div>
  );
};
export default FormField;
