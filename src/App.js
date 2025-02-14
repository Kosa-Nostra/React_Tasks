import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  
	function doSmth(index) {
	  let copy = [...notes];
	  copy[index] = copy[index] ** 2;
	  setNotes(copy);
	}
  
	function removeNote(index) {
	  setNotes(notes.filter((_, i) => i !== index));
	}
  
	return (
	  <div>
		<ul>
		  {notes.map((note, index) => (
			<li key={index}>
			  <span onClick={() => doSmth(index)}>{note}</span>
			  <button onClick={() => removeNote(index)}>Удалить</button>
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  
export default App;