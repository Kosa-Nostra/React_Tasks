import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);
  
	function reverseList() {
	  setNotes([...notes].reverse());
	}
  
	return (
	  <div>
		<button onClick={reverseList}>Перевернуть порядок</button>
		<ul>
		  {notes.map((note, index) => (
			<li key={index}>{note}</li>
		  ))}
		</ul>
	  </div>
	);
  }
export default App;