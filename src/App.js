import React from 'react';
import './styles.css';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
`;

const Button = styled.input`
	background-color: orange;
	font-size: 18px;
	margin: 5px;
`;
const MdButton = styled(Button)`
	color: white;
	background-color: green;
`;
const DIVA = styled.div`
width: 150px;
height: 150px;
background: yellow;
border: 2px;
`;
const DIVB = styled(DIVA)`
background: green;
border: 3px;
`


function App() {
	return (
		<p>108 №1/№2 подключил Inputs</p>
	);
}
function Block1(){
	return(
		<Container>
			<DIVA>
				<DIVB>TEST 107#2</DIVB>
			</DIVA>
		</Container>
	)
}
export default App;

