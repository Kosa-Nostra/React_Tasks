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

function App() {
	const [languages, setLanguages] = useState({ html: false, css: false, js: false });
  
	const handleChange = (event) => {
	  const { name, checked } = event.target;
	  setLanguages((prev) => ({ ...prev, [name]: checked }));
	};
  
	return (
	  <div>
		<label>
		  <input type="checkbox" name="html" checked={languages.html} onChange={handleChange} /> HTML
		</label>
		<p>{languages.html ? "Вы знаете HTML" : ""}</p>
		
		<label>
		  <input type="checkbox" name="css" checked={languages.css} onChange={handleChange} /> CSS
		</label>
		<p>{languages.css ? "Вы знаете CSS" : ""}</p>
		
		<label>
		  <input type="checkbox" name="js" checked={languages.js} onChange={handleChange} /> JavaScript
		</label>
		<p>{languages.js ? "Вы знаете JavaScript" : ""}</p>
	  </div>
	);
}  
  
export default App;