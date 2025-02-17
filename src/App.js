import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}



function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	const [value, setValue] = useState('');

	function startEdit(index) {
		setEditNum(index);
		setValue(notes[index]);
	}

	function saveItem() {
		if (editNum !== null) {
			const updatedNotes = [...notes];
			updatedNotes[editNum] = value;
			setNotes(updatedNotes);
			setEditNum(null); // Выходим из режима редактирования
		}
	}

	return (
		<div>
			{notes.map((note, index) => (
				<p key={index} onClick={() => startEdit(index)}>
					{note}
				</p>
			))}

			{editNum !== null && (
				<div>
					<input value={value} onChange={(e) => setValue(e.target.value)} />
					<button onClick={saveItem}>Сохранить</button>
				</div>
			)}
		</div>
	);
}

export default App;

