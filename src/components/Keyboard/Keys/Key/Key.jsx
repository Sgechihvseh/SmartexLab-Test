import React from 'react';

const Key = (props) => {

	// debugger;
	switch(props.keys) {
		case "backspace" || "input":
			return <button className="KeyboardKey KeyboardKeyWide"><i class="material-icons">{props.keys}</i></button>;
		case "capslock":
			return <button className="KeyboardKey KeyboardKeyWide KeyboardKeyActivatable"><i class="material-icons">keyboard_capslock</i></button>;
		case "br":
			return <br/>;
		default:
			return <button className='KeyboardKey'>{props.keys}</button>
	}
}

export default Key;