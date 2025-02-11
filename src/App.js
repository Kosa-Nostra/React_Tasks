import React from 'react';

function App() {
	function handleClick(event) {
		console.log(event.target); // Вывод event.target в консоль
	  }
	
	  return (
		<div>
		  <button onClick={handleClick}>Кликни меня</button>
		</div>
	  );
	}
export default App;