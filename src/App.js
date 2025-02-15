import React from 'react';
import Product from './Product'
import User from './User';
import Employee from './Employee';

function App() {
	return <div>
		<Employee name="test1" surn="test1" secn="test1" salary="10000$" />
		<Employee name="test2" surn="test2" secn="test2" salary="10000$" />
		<Employee name="test3" surn="test3" secn="test3" salary="10000$" />
	</div>;
}

export default App;