import React from 'react';

function App() {
	function func(arg1, arg2) {
		console.log(arg1, arg2);
	}
	
	return <div>
		<button onClick={() => func('eee', 'ggg')}>act</button>
	</div>;
}
export default App;