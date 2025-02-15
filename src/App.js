import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);
	const [inputValue, setInputValue] = useState("");
  
	function handleLiClick(note) {
	  setInputValue(note);
	}
  
	return (
	  <div>
		<input 
		  type="text" 
		  value={inputValue} 
		  onChange={(e) => setInputValue(e.target.value)} 
		/>
		<ul>
		  {notes.map((note, index) => (
			<li key={index} onClick={() => handleLiClick(note)}>
			  {note}
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  
export default App;