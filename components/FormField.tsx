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
      return <textarea />;
    } else if (typeInput === "select") {
      return <select />;
    } else {
      return <input type={type} />;
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
