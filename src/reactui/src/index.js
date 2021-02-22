import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usercreate from './pages/Usercreate';
import userCreateWithTranslate from './pages/Usercreate';
import UserLogin from './pages/UserLogin';
import './bootstrap-ovverride.scss';
import  "./i18n";
import Language from './components/Language';


ReactDOM.render(
  <React.StrictMode>
    <div>
    <UserLogin />
  <Language/>
      </div>
      </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();