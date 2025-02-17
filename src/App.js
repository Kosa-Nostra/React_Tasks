import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}

function TempInp({ temp, setTemp }) {
	return (
		<div>
			<label>
				Введите температуру:
				<input
					type="number"
					value={temp}
					onChange={(event) => setTemp(event.target.value)}
				/>
			</label>
		</div>
	);
}

function Verdict({ temp }) {
	let message;
	if (temp < 0) {
		message = "Вода твердая (лед)";
	} else if (temp >= 100) {
		message = "Вода газообразная (пар)";
	} else {
		message = "Вода жидкая";
	}

	return <p>{message}</p>;
}

function App() {
  return (
    <div>
     <p>В этих компонентах данные передаются вниз (из родителя в дочерние компоненты) через props, а изменения данных поднимаются вверх через колбэк-функции.</p>
    </div>
  );
}

export default App;
