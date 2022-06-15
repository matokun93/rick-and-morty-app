import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { APIDataProvider } from './Contexts/APIDataContext';
import { CredentialsProvider } from './Contexts/CredentialsContext'
import { OptionsProvider } from './Contexts/OptionsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CredentialsProvider>
      <OptionsProvider>
        <APIDataProvider>
          <App />
        </APIDataProvider>
      </OptionsProvider>
    </CredentialsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
