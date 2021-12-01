import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import Layout from './Layout';


ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);