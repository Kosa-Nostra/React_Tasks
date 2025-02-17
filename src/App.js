import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}


function App() {
  function getSum(arr) {
    return arr.reduce((acc, elem) => acc + Number(elem), 0);
  }
  
  function Calculator() {
    const [value, setValue] = useState('');
    const [nums, setNums] = useState([1, 2, 3]);
  
    function handleChange(event) {
      setValue(event.target.value);
    }
  
    function handleBlur(event) {
      const newNum = Number(event.target.value);
      if (!isNaN(newNum)) {
        setNums([...nums, newNum]); // Обновляем nums
      }
      setValue(''); // Очищаем инпут
    }
  
    const sum = getSum(nums); // Вычисляем сумму динамически
  
    return (
      <div>
        <p>{sum}</p>
        <input value={value} onChange={handleChange} onBlur={handleBlur} />
      </div>
    );
  }
  
}

export default App;
