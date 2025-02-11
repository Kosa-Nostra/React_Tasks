import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [name, setName] = useState('prod');
	
	function clickHandler() {
		setName('xxxx');
	}
	
	return <div>
		<span>{name}</span>
		<button onClick={clickHandler}>btn</button>
	</div>;
}
export default App;