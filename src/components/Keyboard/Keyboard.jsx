import React from 'react';
import './Keyboard.css';
import Keys from './Keys/Keys';

const Keyboard = (props) => {
	// debugger;
	let changeText = () => {
		let key = event.target.value;
		switch (key) {
			case "backspace":
				props.deleteKey();
				break;
			// case "input":
			case "keyboard_capslock":
				props.capsLock();
				break;
			case "space_bar":
				props.addSpace();
				break;
			case "EN/RU":
				props.changeLanguage();
				break;
			default:
				props.addKey(event.target.value);
				break;
		}

	}
	return (
		<div onClick = {changeText} className="KeyboardKeys">		
			<Keys state={props.state}/>
		</div>
	)
}

export default Keyboard;