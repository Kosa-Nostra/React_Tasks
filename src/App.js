import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [date1, setDate1] = useState("");
	const [date2, setDate2] = useState("");
	const [difference, setDifference] = useState(null);
  
	const calculateDifference = () => {
	  if (date1 && date2) {
		const d1 = new Date(date1);
		const d2 = new Date(date2);
		const diffTime = Math.abs(d2 - d1);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		setDifference(diffDays);
	  }
	};
  
	return (
	  <div>
		<input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} />
		<input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
		<button onClick={calculateDifference}>Рассчитать</button>
		{difference !== null && <p>Разница: {difference} дней</p>}
	  </div>
	);
  }
export default App;