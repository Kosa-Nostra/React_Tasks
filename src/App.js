import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}

function App() {
  return (
    <div>
     <p>В этих компонентах данные передаются вниз (из родителя в дочерние компоненты) через props, а изменения данных поднимаются вверх через колбэк-функции.</p>
    </div>
  );
}

export default App;
