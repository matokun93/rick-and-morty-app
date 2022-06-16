import { Formik, Form } from "formik"
import { useState } from "react"
import { useCredentials } from "../../Contexts/CredentialsContext"
import TextInput from '../TextInput/TextInput'
import './LoginSection.css'

const LoginSection = () => {
    const [action, setAction] = useState('login')
    const { login, register, loadingCredentials, credentialsError } = useCredentials()

    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required *'
        }
        if (!values.password) {
            errors.password = 'Required *'
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
        <div className="login-section">
            <div className="form-container">
                {action === 'login' ? <h1>Sign in</h1> : <h1>Sign Up</h1>}
                <p>You need to be logged to see the content</p>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={validate}
                    onSubmit={values => enter(values.email, values.password)}
                >
                    <Form>
                        <TextInput name='email' label='Email' type='email' />
                        <TextInput name='password' label='Password' type='password' />
                        <button type='submit'>Submit</button>
                    </Form>
                </Formik>
                {action === 'login'
                    ? <p>You don't have an account yet?  <button className="form-button" onClick={() => changeAction('register')}>Sign up</button></p>
                    : <p>You already have an account?  <button className="form-button" onClick={() => changeAction('login')}>Sign in</button></p>
                }
            </div>
            {loadingCredentials && <div className='loading'>Loading ...</div>}
            {credentialsError && <div className='error'>Error when loading</div>}
        </div>
    )
}

export default LoginSection 