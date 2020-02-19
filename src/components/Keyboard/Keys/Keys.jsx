import React from 'react';
import Key from './Key/Key';

const Keys = (props) => {

	if(props.state.language){
		if(!props.state.capslock){
			let keys = props.state.keys.map(k => (<Key keys={k}/>));
			return <div>{keys}</div>
		}
		else {
			let shiftKeys = props.state.shiftKeys.map(sk => (<Key keys={sk}/>));
			return <div>{shiftKeys}</div>
		}
	} else {
		if(!props.state.capslock){
			let rusKeys = props.state.rusKeys.map(k => (<Key keys={k}/>));
			return <div>{rusKeys}</div>
		}
		else {
			let shiftRusKeys = props.state.shiftRusKeys.map(sk => (<Key keys={sk}/>));
			return <div>{shiftRusKeys}</div>
		}
	}
}

export default Keys;