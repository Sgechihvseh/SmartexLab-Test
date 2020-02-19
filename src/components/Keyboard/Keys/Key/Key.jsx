import React from 'react';
import { capsLock, addKey, deleteKey, addSpace } from '../../../../Redux/state';

const Key = (props) => {
	// let addtext = () => {
	// 	addKey(props.keys);
	// }
	// let deleteText = () => {
	// 	deleteKey();
	// }
	// let capslock = () => {
	// 	capsLock()
	// }
	// let space = () => {
	// 	addSpace()
	// }

	switch (props.keys) {
		case "backspace":
			return <button value = {props.keys} className="KeyboardKey KeyboardKeyWide"><i class="material-icons">{props.keys}</i></button>;
		case "input":
			return <button value = {props.keys} className="KeyboardKey KeyboardKeyWide"><i class="material-icons">{props.keys}</i></button>;
		case "keyboard_capslock":
			return <button value = {props.keys} className="KeyboardKey KeyboardKeyWide KeyboardKeyActivatable"><i class="material-icons">{props.keys}</i></button>;
		case "space_bar":
			return <button value = {props.keys} className="KeyboardKey KeyboardKeyExtraWide"><i class="material-icons">{props.keys}</i></button>
		case "br":
			return <br />;
		case "EN/RU":
			return <button value = {props.keys} className="KeyboardKey">{props.keys}</button>
		default:
			return <button value = {props.keys} className='KeyboardKey'>{props.keys}</button>
	}
}

export default Key;