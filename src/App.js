import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}


function App() {
	const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);
	const [inputValue, setInputValue] = useState("");
  
	const addNote = () => {
	  if (inputValue.trim() !== "") {
		setNotes([...notes, inputValue]);
		setInputValue("");
	  }
	};
  
	return (
	  <div>
		<input 
		  type="text" 
		  value={inputValue} 
		  onChange={(e) => setInputValue(e.target.value)} 
		/>
		<button onClick={addNote}>Добавить</button>
		<ul>
		  {notes.map((note, index) => (
			<li key={index}>{note}</li>
		  ))}
		</ul>
	  </div>
	);
  }
export default App;