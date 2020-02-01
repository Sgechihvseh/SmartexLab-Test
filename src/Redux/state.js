
let store = {
	_callSubscriber(){
		console.log('State changed')
	},

	_state: {
		keys: [
		"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "br",
		"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|", "br",
		"capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "input", "br",
		"z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift", "br",
		],
		text: ""
		},
	
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

export const deleteKey = () => {
	store._state.text = store._state.text.slice(0, -1);
	store._callSubscriber(store._state)
}

export const addText = (text) => {
	store._state.text += text;
	store._callSubscriber(store._state)
}

export default store;