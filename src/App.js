import './App.css';
import { useAPIData } from './Contexts/APIDataContext'
import { useCredentials } from './Contexts/CredentialsContext'
import { Formik, Form, } from 'formik'
import TextInput from './Components/TextInput/TextInput'
import { useState } from 'react';

function App() {
  const [searchbarQuery, setSearchbarQuery] = useState()
  const { userLogged, login, logout, register, loadingCredentials, credentialsError } = useCredentials()
  const {
    getCharacters,
    characters,
    locations,
    episodes,
    maxPages,
    dataError,
    loadingData,
  } = useAPIData()

  const imprimir = () => {
    console.log(characters);
    console.log(locations);
    console.log(episodes);
  }

  const enter = (email, password) => {
    login(email, password)
  }

  const leave = () => {
    logout()
  }

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Requerido'
    } else if (values.email.length < 5) {
      errors.email = 'El nombre es muy corto'
    }
    return errors
  }

  const handleSearchbar = (e) => {
    setSearchbarQuery(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleSearchbar} />
      {loadingData ? <h2>loadiiiiiing</h2> : null}
      {
        credentialsError
          ? <h2>{credentialsError}</h2>
          : null
      }
      {
        userLogged
          ? <h1>logged</h1>
          : null
      }
      <button onClick={() => leave()}>salir</button>
      <button onClick={() => getCharacters()}>casdcasdc</button>
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
      <button onClick={() => imprimir()}>imprimre</button>
      <br />
      <h2>{maxPages}</h2>
      {
        searchbarQuery
          ? characters.map(character => {
            if (character.name.toLowerCase().includes(searchbarQuery.toLowerCase())) {
              return <h3 key={character.id}>{character.name}</h3>
            } else {
              return null
            }
          })
          : characters.map(character => {
            return <h3 key={character.id}>{character.name}</h3>
          })
      }
    </div>
  );
}

export default App;

