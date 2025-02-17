import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}

function App() {
  return (
    <div>
      <p>IsEdit - Стейт</p>
      <p>elem - переменная</p>
      <p>data - Стейт/Пропс</p>
    </div>
  );
}

export default App;
