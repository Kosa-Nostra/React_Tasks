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
  
	const [date] = useState(initDate);
  
	const getWeekday = (year, month, day) => {
	  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	  return daysOfWeek[new Date(year, month - 1, day).getDay()];
	};
  
	return (
	  <div>
		<p>Год: {date.year}</p>
		<p>Месяц: {date.month}</p>
		<p>День: {date.day}</p>
		<p>День недели: {getWeekday(date.year, date.month, date.day)}</p>
	  </div>
	);
  }
export default App;