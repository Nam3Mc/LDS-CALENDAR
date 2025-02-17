import { Field, ErrorMessage } from "formik"

const TextInput = ({label, ...props}: { label: string, [key: string]: any}) => {
    return(
        <div className="flex flex-col gap-1">
            <label className="font-semibold"> {label} </label>
            <Field {...props} className="border p-2 rounded-md"/>
            <ErrorMessage name={props.name} component='div' className="text-red-500 text-sm"/>
        </div>
    )
}
export default TextInput