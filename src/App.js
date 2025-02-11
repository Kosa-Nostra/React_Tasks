import React from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; // Импортируем v4 из uuid

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() 
{
	const prods = [
		{id: id(), name: 'product1', cost: 100},
		{id: id(), name: 'product2', cost: 200},
		{id: id(), name: 'product3', cost: 300},
	];
	const res = prods.map(function(item) {
			return <p key={item.id}>{item.name} {item.cost}</p>;
	});	
	return<div>
		{res}
	</div>
}
export default App;