import { useField } from 'formik'
import './TextInput.css'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className='text-input'>
            <label>{label}</label>
            <input {...field}{...props} />
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </div>
    )
}

export default TextInput