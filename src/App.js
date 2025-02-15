import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    if (inputValue.trim() !== "") {
      setNotes([...notes, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
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