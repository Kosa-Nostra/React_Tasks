import React from 'react';
import Users from './Users';
import {v4 as uuidv4} from 'uuid'

function id(){
	const randomIdsUUID = Array.from({length: 5}, () => uuidv4());
}


function App() {
  function TemperatureConverter() {
    const [temp, setTemp] = useState("");
    const [scale, setScale] = useState("C"); // "C" — Цельсий, "F" — Фаренгейт
  
    // Функция конвертации температуры
    function toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }
  
    function toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }
  
    // Функция обновления температуры
    function handleChange(event, newScale) {
      setTemp(event.target.value);
      setScale(newScale);
    }
  
    // Вычисление значений для инпутов
    const celsius = scale === "F" ? toCelsius(temp) : temp;
    const fahrenheit = scale === "C" ? toFahrenheit(temp) : temp;
  
    return (
      <div>
        <h3>Конвертер температуры</h3>
        <TempInput scale="C" value={celsius} onChange={handleChange} />
        <TempInput scale="F" value={fahrenheit} onChange={handleChange} />
      </div>
    );
  }
  
  function TempInput({ scale, value, onChange }) {
    const scaleNames = { C: "Цельсий", F: "Фаренгейт" };
  
    return (
      <div>
        <label>
          Температура ({scaleNames[scale]}):{" "}
          <input
            type="number"
            value={value}
            onChange={(event) => onChange(event, scale)}
          />
        </label>
      </div>
    );
  }
  
}

export default App;
