import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [Ban, setBan] = useState(false);
	
	return <div>
		<span>{Ban ? 'Вы забанены!' : 'Вы разбанены!Enjoy!'}</span>
		<button onClick={() => setBan(!Ban)}>BAN</button>
	</div>;
}
export default App;