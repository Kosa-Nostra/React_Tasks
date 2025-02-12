import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [result, setResult] = useState(0);
	
	
	function handleChange1(event) {
		setValue1(event.target.value);
	}
	
	function handleChange2(event) {
		setValue2(event.target.value);
	}
	
	function handleClick() {
		setResult(Number(value1) + Number(value2));
	}

	function handleClick1() {
		setResult(Number(value1) * Number(value2));
	}
	
	return <div>
		<input value={value1} onChange={handleChange1} />
		<input value={value2} onChange={handleChange2} />
		
		<button onClick={handleClick}>btn</button>
		<button onClick={handleClick1}>btn</button>
		<p>result: {result}</p>
	</div>;
}
export default App;