import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	function countplus() {
		setCount(count + 1);
	}
	function countminus() {
		setCount(count - 1);
	}
	const [count, setCount] = useState(0);
	
	return <div>
		<span>{count}</span>
		<button onClick={() => setCount(countplus)}>+</button>
		<button onClick={() => setCount(countminus)}>-</button>
	</div>;
}
export default App;