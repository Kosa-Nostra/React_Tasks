import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}


function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  
	const addNote = () => {
	  setNotes([...notes, notes.length + 1]);
	};
  
	return (
	  <div>
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