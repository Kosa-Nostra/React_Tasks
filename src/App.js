import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    { first: "Первый", second: "Второй", third: "Третий" },
    { first: "Четвертый", second: "Пятый", third: "Шестой" },
  ]);
  const [inputs, setInputs] = useState({ first: "", second: "", third: "" });

  function handleClick(note) {
    setInputs(note);
  }

  function handleUpdate(index) {
    const updatedNotes = [...notes];
    updatedNotes[index] = inputs;
    setNotes(updatedNotes);
  }

  return (
    <div>
      <div>
        <input
          name="first"
          value={inputs.first}
          onChange={(e) => setInputs({ ...inputs, first: e.target.value })}
        />
        <input
          name="second"
          value={inputs.second}
          onChange={(e) => setInputs({ ...inputs, second: e.target.value })}
        />
        <input
          name="third"
          value={inputs.third}
          onChange={(e) => setInputs({ ...inputs, third: e.target.value })}
        />
        <button onClick={() => handleUpdate(notes.findIndex((note) => note.first === inputs.first))}>
          Обновить
        </button>
      </div>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.first} {note.second} {note.third}{" "}
            <button onClick={() => handleClick(note)}>Заполнить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
