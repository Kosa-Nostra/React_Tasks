import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}

function App() {
  return (
    <div>
      <h2>Список пользователей:</h2>
      <Users />
    </div>
  );
}

export default App;
