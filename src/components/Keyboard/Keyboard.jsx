import React from 'react';
import './Keyboard.css';
import Keys from './Keys/Keys';

const Keyboard = (props) => {
	// debugger;
	return (
		<div className="KeyboardKeys">		
			<Keys state={props.state}/>
			<button className="KeyboardKey KeyboardKeyExtraWide"><i class="material-icons">space_bar</i></button>
		</div>

	)
}

export default Keyboard;