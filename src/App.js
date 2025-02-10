import React from 'react';

function App() {
	let text;
	const isAdult = true;
	
	if (show) {
		text = <p>Вам есть 18</p>;
	} else {
		text = <p>Вам нет 18</p>;
	}
	return <div>
		{text}
	</div>;
}
export default App;