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
		{id: id(), name: 'Ayder', surn: 'Muzhdabaev', age: '18'},
		{id: id(), name: 'John', surn: 'Sent', age: '34'},
		{id: id(), name: 'Kosa', surn: 'Nostra', age: '20'},
	];

	return <div>
		<td>
			<tr>
				<User name={users[0].name} surn={users[0].surn} age={users[0].age} />
			</tr>
			<tr>
				<User name={users[1].name} surn={users[1].surn} age={users[1].age} />
			</tr>
			<tr>
				<User name={users[2].name} surn={users[2].surn} age={users[2].age} />
			</tr>
		</td>
	</div>;
}

export default App;