import { useField } from 'formik'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <>
            <label>{label}</label>
            <input {...field}{...props} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </>
    )
}

export default TextInput