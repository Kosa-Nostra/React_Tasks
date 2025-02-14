import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  
	function doSmth(index) {
	  let copy = [...notes];
	  copy[index] = copy[index] ** 2;
	  setNotes(copy);
	}
  
	return (
	  <div>
		<ul>
		  {notes.map((note, index) => (
			<li key={index} onClick={() => doSmth(index)}>
			  {note}
			</li>
		  ))}
		</ul>
	  </div>
	);
  }
  
export default App;