import React from 'react';
import './styles.css';
import styled from 'styled-components';

const Container = styled.div`
	width: 200px;
	border: 2px solid brown;
	padding: 10px;
	text-align: center;
`;
const Text1 = styled.p`
	color: orangered;
	font-weight: bold;
`;
const Text2 = styled.p`
	font-style: italic;
	color: brown;
`;

const Text3 = styled.p`
	background-color: orange;
	font-weight: bold;
	color: white;
`;


function App() {
	return (
		<Block />
	);
}
function Block() {
	const p11 = 'aaa'
	return (<Container>
		<button onClick={p11}><Text1>btn1</Text1></button>
		<button onClick={p11}><Text2>btn2</Text2></button>
		<button type="reset" onClick={p11}><Text3>btn3</Text3></button>
	</Container>
	);
}
export default App;

