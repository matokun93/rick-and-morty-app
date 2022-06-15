import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { APIDataProvider } from './Contexts/APIDataContext';
import { CredentialsProvider } from './Contexts/CredentialsContext'
import { OptionsProvider } from './Contexts/OptionsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CredentialsProvider>
      <OptionsProvider>
        <APIDataProvider>
          <App />
        </APIDataProvider>
      </OptionsProvider>
    </CredentialsProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
