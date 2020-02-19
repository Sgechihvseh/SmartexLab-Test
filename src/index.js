import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './Redux/state';
let rerenderEntireTree = (store) => {
	ReactDOM.render(<App state = {store.getState()}
	deleteKey = {store.deleteKey}
	capsLock = {store.capsLock}
	addSpace = {store.addSpace}
	addKey = {store.addKey}
	changeLanguage ={store.changeLanguage}
	/>, document.getElementById('root'));
}

rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)


