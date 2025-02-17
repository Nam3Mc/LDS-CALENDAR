import { Field, ErrorMessage } from "formik"

const TimeInput = ({ label, ...props }: { label: string; [key: string]: any }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-semibold">{label}</label>
            <Field type="time" {...props} className="border p-2 rounded-md" step="900" />
            <ErrorMessage name={props.name} component="div" className="text-red-500 text-sm" />
        </div>
    );
};

export default TimeInput