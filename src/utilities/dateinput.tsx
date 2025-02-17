import { Field, ErrorMessage } from 'formik';

const SelectInput = ({ label, options, ...props }: { label: string; options: string[]; [key: string]: any }) => {
  return (
    <div className="flex flex-col gap-1">
            <label className="font-semibold">{label}</label>
      <Field as="select" className="border p-2 rounded-md" {...props}>
        <option value="" label="Select option" />
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name} component="div" className="text-red-500 text-sm" />
    </div>
  );
};

export default SelectInput;