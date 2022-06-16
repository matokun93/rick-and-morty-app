import { useContext, createContext, useState } from 'react'
import useLocalStorage from '../CustomHooks/useLocalStorage'
import axios from 'axios'

const CredentialsContext = createContext()

export const useCredentials = () => {
    return useContext(CredentialsContext)
}

export const CredentialsProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useLocalStorage('isLogged', false)
    const [loadingCredentials, setLoadingCredentials] = useState(false)
    const [credentialsError, setCredentialsError] = useState(false)

    const login = (email, password) => {
        setLoadingCredentials(true)
        setCredentialsError(false)
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).then(res => {
            setUserLogged(true)
            setLoadingCredentials(false)
        }).catch(e => {
            setCredentialsError(e.response.data.error)
            console.log(e.response.data.error);
        })
    }

    const logout = () => {
        setUserLogged(false)
    }

    const register = (email, password) => {
        setLoadingCredentials(true)
        setCredentialsError(false)
        axios.post('https://reqres.in/api/register', {
            email: email,
            password: password
        }).then(res => {
            setUserLogged(true)
            setLoadingCredentials(false)
        }).catch(e => {
            setCredentialsError(e.response.data.error)
            console.log(e.response.data.error);
        })
    }

    return (
        <CredentialsContext.Provider value={{
            userLogged,
            login,
            logout,
            register,
            loadingCredentials,
            credentialsError
        }}>
            {children}
        </CredentialsContext.Provider>
    )
}