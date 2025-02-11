import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function App() {
	const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <p>{isBanned ? "Пользователь забанен" : "Пользователь не забанен"}</p>
      <button onClick={() => setIsBanned(true)}>Забанить</button>
      <button onClick={() => setIsBanned(false)}>Разбанить</button>
    </div>
  );
}
export default App;