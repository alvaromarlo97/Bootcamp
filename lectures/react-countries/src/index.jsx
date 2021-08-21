import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Main from './components/Main/Main';
import reportWebVitals from './reportWebVitals';
import Countries from './pages/Countries';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Countries />
      <Main />
      <p>Hola Mundo</p>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
