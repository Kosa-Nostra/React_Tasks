import React from 'react';
import './styles.css';
import { styles } from "./styles";



function App() {
	return (
		<div style = {{
			width: '200px',
			border: '2px solid brown',
			padding: '10px',
			textAlign: 'center' }}>
			<p style={{
				color: 'orangered',
				fontWeight: 'bold' }}>
				text
			</p>
			<p style = {{
				fontStyle: 'brown',
				color: 'brown' }}>
				text
			</p>
			<p style = {{
				backgroundColor: 'orange',
				fontWeight: 'bold',
				color: 'white' }}>
				text
			</p>
		</div>
	);
}
export default App;

