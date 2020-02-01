import React from 'react';
import { addText, deleteKey } from '../../../../Redux/state';

const Key = (props) => {
	let addtext = () => {
		addText(props.keys);
	}
	let deleteText = () => {
		deleteKey();
	}

	switch(props.keys) {
		case "backspace":
			return <button onClick = {deleteText} className="KeyboardKey KeyboardKeyWide"><i class="material-icons">{props.keys}</i></button>;
		case "input":
			return <button className="KeyboardKey KeyboardKeyWide"><i class="material-icons">{props.keys}</i></button>;
		case "capslock":
			return <button className="KeyboardKey KeyboardKeyWide KeyboardKeyActivatable"><i class="material-icons">keyboard_capslock</i></button>;
		case "br":
			return <br/>;
		default:
			return <button onClick = {addtext} className='KeyboardKey'>{props.keys}</button>
	}
}

export default Key;