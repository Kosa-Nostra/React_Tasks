import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}
function App() {
	const [number, setNumber] = useState("");
	const [sum, setSum] = useState(null);
  
	const calculateSum = () => {
	  const digits = number.split(" ").join("").split("".trim()).map(Number);
	  const total = digits.reduce((acc, digit) => acc + digit, 0);
	  setSum(total);
	};
  
	return (
	  <div>
		<input 
		  type="text" 
		  value={number} 
		  onChange={(e) => setNumber(e.target.value)} 
		  onBlur={calculateSum} 
		/>
		{sum !== null && <p>Сумма цифр: {sum}</p>}
	  </div>
	);
  }
export default App;