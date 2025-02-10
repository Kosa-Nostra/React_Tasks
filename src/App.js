import React from 'react';

function App() {
	const isAuth = false;
	
	return <div>
		{!isAuth &&<p>пожалуйста авторизируйтесь</p>}
	</div>;
}
export default App;