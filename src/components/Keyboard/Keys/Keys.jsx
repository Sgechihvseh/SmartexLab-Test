import React from 'react';
import Key from './Key/Key';

const Keys = (props) => {

	// debugger;

	let keys = props.state.keys.map(k => (<Key keys={k}/>));

	return (
			<div>
				{keys} 
			</div>
	)
}

export default Keys;