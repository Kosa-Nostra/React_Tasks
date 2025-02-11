import React from 'react';

function App() {
	function func(event, arg) {
		console.log(event, arg);
	}
	
	return <div>
		<button onClick={event => func(event, 'ggg')}>act</button>
	</div>;
}
export default App;