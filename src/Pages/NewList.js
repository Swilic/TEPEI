import React, { useState } from 'react';
import List from '../Components/List';

const NewList = () => {
	const [question, setQuestion] = useState();
	const [response, setResponse] = useState();
	const [card, setCard] = useState();
	const addList = (e) => {
		e.preventDefault();
		setCard((prev) => ({ ...prev, ...{ [question]: response } }));
	};
	return (
		<div>
			{card ? <List card={card} /> : ''}
			<form>
				<input
					type='text'
					name='question'
					placeholder='Question'
					onChange={(e) => {
						setQuestion(e.target.value);
					}}></input>
				<input
					type='text'
					name='response'
					placeholder='Réponse'
					onChange={(e) => {
						setResponse(e.target.value);
					}}></input>
				<button onClick={addList}>+</button>
			</form>
		</div>
	);
};

export default NewList;
