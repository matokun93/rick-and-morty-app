import { Formik } from "formik"
import TextInput from '../TextInput/TextInput'

const LogModal = () => {

    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Requerido'
        } else if (values.email.length < 5) {
            errors.email = 'El nombre es muy corto'
        }
        return errors
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={validate}
            onSubmit={values => enter(values.email, values.password)}
        >
            <Form>
                <TextInput name='email' label='Email' type='email' />
                <TextInput name='password' label='Contrasena' type='password' />
                <button type='submit'>submit</button>
            </Form>
        </Formik>
    )
}