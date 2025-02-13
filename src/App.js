import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; 

function id() {
	const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());
}

function translit(word){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
}

function getAvg(arr) {
	let sum = 0;
	
	for (const elem of arr) {
		sum += +elem;
	}
	
	return sum;
}

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	
	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
	}
	
	const result = notes.map((note, index) => {
		return <input
			key={index}
			value={note}
			onChange={event => changeHandler(index, event)}
		/>;
	});
	
	return <div>
		{result}
		{getAvg(notes)}
	</div>;
}

export default App;