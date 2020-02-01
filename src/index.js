import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './Redux/state';

ReactDOM.render(<App state ={store.getState()} />, document.getElementById('root'));
