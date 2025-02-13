import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}
function App() {
	const [number, setNumber] = useState("");
	const [product, setProduct] = useState(null);
  
	const calculateProduct = () => {
	  const num = parseInt(number, 10);
	  if (isNaN(num) || num <= 0) {
		setProduct(null);
		return;
	  }
	  let productValue = 1;
	  for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
		  productValue *= i;
		}
	  }
	  setProduct(productValue);
	};
  
	return (
	  <div>
		<input 
		  type="text" 
		  value={number} 
		  onChange={(e) => setNumber(e.target.value)} 
		  onBlur={calculateProduct} 
		/>
		{product !== null && <p>Произведение делителей: {product}</p>}
	  </div>
	);
  }
  
export default App;