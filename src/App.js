import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(["Первый", "Второй", "Третий"]);

  function removeItem(index) {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => removeItem(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;