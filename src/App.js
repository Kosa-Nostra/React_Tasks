import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [value5, setValue5] = useState(0);
	
	function handleChange1(event) {
		setValue1(+event.target.value);
	}
	
	function handleChange2(event) {
		setValue2(+event.target.value);
	}

	function handleChange3(event) {
		setValue3(+event.target.value);
	}

	function handleChange4(event) {
		setValue4(+event.target.value);
	}

	function handleChange5(event) {
		setValue5(+event.target.value);
	}
	
	return <div>
		<input value={value1} onChange={handleChange1} />
		<input value={value2} onChange={handleChange2} />
		<input value={value3} onChange={handleChange3} />
		<input value={value4} onChange={handleChange4} />
		<input value={value5} onChange={handleChange5} />
		<p>result: {(value1 + value2 + value3 + value4 + value5)/5}</p>
	</div>
}
export default App;