import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Composant/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebase, { FirebaseContext } from './Composant/Firebase'


ReactDOM.render(
  <FirebaseContext.Provider value={ new Firebase()}>
       <App />
  </FirebaseContext.Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
