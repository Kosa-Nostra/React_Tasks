import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() 
{
	const [name, setName] = useState('Name');
	const [surn, setSurn] = useState('Surn');
	const [age, setAge] = useState('Age');
	return <p>
	<span>{name}</span>
	<span>{surn}</span>
	<span>{age}</span>
</p>;
}
export default App;