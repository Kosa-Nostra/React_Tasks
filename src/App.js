import React from 'react';
import Product from './Product'
import User from './User';
import Employee from './Employee';

function App() {
	const name1 = 'Ayder';
	const surn = 'Muzhdabaev';
	const secn = 'Kosa-Nostra';
	const salary = '52450$';

	return <div>
		<Employee name={name1} surn={surn} secn={secn}  salary={salary} />
	</div>;
}

export default App;