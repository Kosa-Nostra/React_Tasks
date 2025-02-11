import React from 'react';

function App() {
	const users = [
		{id: 1,name: 'user1', surn: 'surn1', age: 30},
		{id: 2,name: 'user2', surn: 'surn2', age: 31},
		{id: 3,name: 'user3', surn: 'surn3', age: 32},
	];
	const res= users.map(function(item,){
		return <ul key={item.id}>{item.name} {item.surn} {item.age}</ul>
	});
	return<div>
		{res}
	</div>
}
export default App;