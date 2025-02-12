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
	function birthdate(value){
		return 2025-value;
	}

	return <div>
		<p>Введите ваш возраст</p>
		<input value={value} onChange={handleChange} />
		<p>Вы родились в </p>
		<p>{birthdate(value)}</p>
	</div>;
}
export default App;