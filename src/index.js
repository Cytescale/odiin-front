import React from 'react';
import ReactDOM from 'react-dom';
import LoginClass from './public/login/login';
import HomeClass from './public/home/home';
import Main_route from './public/main_route/main_router.js'
ReactDOM.render(
  <React.StrictMode>  
    <Main_route />
  </React.StrictMode>,
  document.getElementById('root')
);
