
let store = {
	// _callSubscriber() {
	// 	console.log('State changed')
	// },

	_state: {
		keys: [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "br",
			"q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "|", "br",
			"keyboard_capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "input", "br",
			"z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift", "EN/RU", "br", "space_bar"
		],
		shiftKeys: [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "br",
			"Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "|", "br",
			"keyboard_capslock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "input", "br",
			"Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift", "EN/RU", "br", "space_bar"
		],
		rusKeys: [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "br",
			"й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "|", "br",
			"keyboard_capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "input", "br",
			"я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "shift", "EN/RU", "br", "space_bar"
		],
		shiftRusKeys: [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "br",
			"Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "|", "br",
			"keyboard_capslock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "input", "br",
			"Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "/", "shift", "EN/RU", "br", "space_bar"
		],
		text: "",
		capslock: false,
		language: true
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	addKey(text) {
		store._state.text += text;
		store._callSubscriber(store);
	},
	addSpace() {
		store._state.text += " ";
		store._callSubscriber(store);
	},
	deleteKey() {
		store._state.text = store._state.text.slice(0, -1);
		store._callSubscriber(store);
	},
	capsLock() {
		store._state.capslock = !store._state.capslock;
		store._callSubscriber(store);
	},
	changeLanguage() {
		store._state.language = !store._state.language;
		store._callSubscriber(store);
	}
}

// export const deleteKey = () => {
// 	store._state.text = store._state.text.slice(0, -1);
// 	store._callSubscriber(store._state);
// }

// export const capsLock = () => {
// 	store._state.capslock = !store._state.capslock;
// 	store._callSubscriber(store._state);
// }

// export const addKey = (text) => {
// 	store._state.text += text;
// 	store._callSubscriber(store._state);
// }

// export const addSpace = () => {
// 	store._state.text += " ";
// 	store._callSubscriber(store._state);
// }

export default store;