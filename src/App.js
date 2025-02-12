import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [value, setValue] = useState(0);
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	function temp(value){
		return (value-32)*5/9;
	}

	return <div>
		<p>Введите температуру в Фаренгейтах:</p>
		<input value={value} onChange={handleChange} />
		<p>Вы градусах это: </p>
		<p>{temp(value)}</p>
	</div>;
}
export default App;