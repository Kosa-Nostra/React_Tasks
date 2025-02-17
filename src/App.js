import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}

function App() {
  return (
    <div>
      <p>Products – контейнерный (логический) компонент</p>
      <p>Product – промежуточный компонент</p>
      <p>ProductField – презентационный (UI) компонент</p>
    </div>
  );
}

export default App;
