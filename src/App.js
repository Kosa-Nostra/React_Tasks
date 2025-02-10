import React from 'react';

function App() {
	let text;
	const isAdmin = true;
	
	if (isAdmin) {
		text = <p>ADMIN</p>;
	}
	
	return <div>
		{text}
	</div>;
}
export default App;