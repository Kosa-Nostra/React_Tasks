import React, { useState } from 'react';

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);
  const [inputs, setInputs] = useState({ first: "", second: "", third: "" });

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function addItem() {
    const newItem = `${inputs.first} ${inputs.second} ${inputs.third}`.trim();
    if (newItem) {
      setNotes([...notes, newItem]);
      setInputs({ first: "", second: "", third: "" });
    }
  }

  return (
    <div>
      <input name="first" value={inputs.first} onChange={handleChange} />
      <input name="second" value={inputs.second} onChange={handleChange} />
      <input name="third" value={inputs.third} onChange={handleChange} />
      <button onClick={addItem}>Добавить элемент</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;