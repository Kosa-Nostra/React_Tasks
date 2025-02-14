import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}


function App() {
	const initDate = {
	  year: 2025,
	  month: 12,
	  day: 31,
	};
  
	const [date, setDate] = useState(initDate);
  
	const getWeekday = (year, month, day) => {
	  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	  return daysOfWeek[new Date(year, month - 1, day).getDay()];
	};
  
	const handleChange = (e) => {
	  setDate({
		...date,
		[e.target.name]: Number(e.target.value),
	  });
	};
  
	return (
	  <div>
		<input type="number" name="year" value={date.year} onChange={handleChange} />
		<input type="number" name="month" value={date.month} onChange={handleChange} />
		<input type="number" name="day" value={date.day} onChange={handleChange} />
		<p>Год: {date.year}</p>
		<p>Месяц: {date.month}</p>
		<p>День: {date.day}</p>
		<p>День недели: {getWeekday(date.year, date.month, date.day)}</p>
	  </div>
	);
  }
export default App;