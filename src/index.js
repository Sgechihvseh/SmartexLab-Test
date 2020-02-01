import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './Redux/state';
let rerenderEntireTree = (state) => {
ReactDOM.render(<App state ={state} />, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)