import React from 'react';

function App() {
	function func(arg1, event, arg2) {
		console.log(arg1,event, arg2);
	}
	
	return <div>
		<button onClick={event => func('eee',event, 'ggg')}>act</button>
	</div>;
}
export default App;