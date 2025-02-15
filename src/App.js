import React, { useState } from 'react';

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    { first: "Первый", second: "Второй", third: "Третий" },
    { first: "Четвертый", second: "Пятый", third: "Шестой" },
  ]);
  const [inputs, setInputs] = useState({ first: "", second: "", third: "" });

  function handleClick(note) {
    setInputs(note);
  }

  return (
    <div>
      <input name="first" value={inputs.first} readOnly />
      <input name="second" value={inputs.second} readOnly />
      <input name="third" value={inputs.third} readOnly />
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.first} {note.second} {note.third} 
            <button onClick={() => handleClick(note)}>Заполнить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;