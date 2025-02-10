import React from 'react';

function App() {
	function getDigitsSum(number) {
		let sum = 0;
		while (number > 0) {
		  sum += number % 10;
		  number = Math.floor(number / 10);
		}
		return sum;
	  }
	const sum = getDigitsSum(12345);
	
	return <div>
		<p>
			{getDigitsSum(12345)}
		</p>
	</div>
}
export default App;