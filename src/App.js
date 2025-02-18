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
	color: %{(props)=> (props.warn ? 'red' : 'white')};
	background: %{(props)=> (props.warn ? 'yellow' : 'green')};
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
		<button onClick={p11}><Text1 warn>btn1</Text1></button>
		<button onClick={p11}><Text1>btn2</Text1></button>
		<button type="reset" onClick={p11}><Text1>btn3</Text1></button>
	</Container>
	);
}
export default App;

