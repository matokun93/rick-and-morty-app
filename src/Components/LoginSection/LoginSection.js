import { Formik, Form } from "formik"
import { useState } from "react"
import { useCredentials } from "../../Contexts/CredentialsContext"
import TextInput from '../TextInput/TextInput'

const LoginSection = () => {
    const [action, setAction] = useState('login')
    const { login, register } = useCredentials()

    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Requerido'
        } else if (values.email.length < 5) {
            errors.email = 'El nombre es muy corto'
        }
        return errors
    }

    const changeAction = (action) => {
        setAction(action)
    }

    const enter = (email, password) => {
        action === 'login' ? login(email, password) : register(email, password)
    }

    return (
        <div className="form-container">
            {action === 'login' ? <h1>Sign in</h1> : <h1>Sign Up</h1>}
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
            {action === 'login'
                ? <p>You don't have an account yet? <button onClick={() => changeAction('register')}>Sign up</button></p>
                : <p>You already have an account? <button onClick={() => changeAction('login')}>Sign in</button></p>
            }
        </div>
    )
}

export default LoginSection 