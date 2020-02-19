import React from 'react';
import "./App.css";
import "./Keyboard/Keyboard.css"
import Keyboard from './Keyboard/Keyboard';
const App = (props) => {
        return (
            <div>
                <h1>My React App!</h1>
				<textarea value = {props.state.text}/>
				<div className="Keyboard">
					<Keyboard state={props.state}
					deleteKey = {props.deleteKey}
					capsLock = {props.capsLock}
					addKey = {props.addKey}
					addSpace = {props.addSpace}
					changeLanguage= {props.changeLanguage}
					/>
				</div>
            </div>
        )
}

export default App;