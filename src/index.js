import React from 'react';
import ReactDOM from 'react-dom';
import LoginClass from './public/login/login';
import HomeClass from './public/home/home';

ReactDOM.render(
  <React.StrictMode>  
    <HomeClass isDark='false' />
  </React.StrictMode>,
  document.getElementById('root')
);
