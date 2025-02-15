import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);
	const [inputValue, setInputValue] = useState("");
	const [selectedIndex, setSelectedIndex] = useState(null);
  
	function handleLiClick(note, index) {
	  setInputValue(note);
	  setSelectedIndex(index);
	}
  
	function handleBlur() {
	  if (selectedIndex !== null) {
		const updatedNotes = [...notes];
		updatedNotes[selectedIndex] = inputValue;
		setNotes(updatedNotes);
		setSelectedIndex(null);
	  }
	}
  
	return (
	  <div>
		<input 
		  type="text" 
		  value={inputValue} 
		  onChange={(e) => setInputValue(e.target.value)} 
		  onBlur={handleBlur} 
		/>
		<ul>
		  {notes.map((note, index) => (
			<li key={index} onClick={() => handleLiClick(note, index)}>
			  {note}
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
export default App;