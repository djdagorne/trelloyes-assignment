import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './STORE.js';

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));
 //send the info from STORE.js to App.js as properties under an object named store