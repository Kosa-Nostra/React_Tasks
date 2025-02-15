import React from 'react';
import Product from './Product'
import User from './User';
import Employee from './Employee';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}

function App() {
	const users = [
		{id: id(), name: 'user1', surn: 'surn1', age: 30},
		{id: id(), name: 'user2', surn: 'surn2', age: 31},
		{id: id(), name: 'user3', surn: 'surn3', age: 32},
	];

	const result = users.map(user => {
		return <User key={users.id} name={users[0].name} surn={users[0].surn} age={users[0].age} />
})

	return <div>
		{result}
	</div>;
}

export default App;