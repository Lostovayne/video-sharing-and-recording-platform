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

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {
        as === "textarea"
          ? <textarea id={id} name={id} value={value} onChange={onChange} />
          : as === "select"
            ? <select id={id} name={id} onChange={onChange} value={value}>
              {options.map(({ label, value }) => (
                <option key={label} value={value}>
                  {label}
                </option>
              ))}
            </select>
            : <input type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={onChange} />
      }
    </div>
  );
}

export default FormField;
