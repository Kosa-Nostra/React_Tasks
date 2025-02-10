import React from 'react';

function App() {
	let text;
	let age = 14;
	let adult= age >= 18 ? true: false;
	if(adult){
		text=<p>adult</p>
	}else{
		text=<p>not adult</p>
	}
	return <div>
		{text}
	</div>;
}
export default App;