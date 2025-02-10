import React from 'react';

function App() {
	const obj = {name: 'john', surname: 'smit'};
	return <div>
		<p>
	name: {obj.name}, 
	surname: {obj.surname},
</p>
	</div>;
}

export default App;