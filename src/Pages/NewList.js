import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../Components/List';

const NewList = () => {
	const nav = useNavigate();
	const questionRef = useRef(null);
	const responseRef = useRef(null);
	const titleRef = useRef(null);
	const [card, setCard] = useState();
	
	const handleCard = (e) => {
		e.preventDefault();
		setCard((prev) => ({
			...prev,
			...{ [questionRef.current.value]: responseRef.current.value },
		}));
	};

	const sendList = () => {
		axios('http://localhost:2999/user/list', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: {
				title: titleRef.current.value,
				questions: card,
			},
		}).then(() => {
			nav('/lists');
		});
	};
	return (
		<div>
			<form>
				<label htmlFor='title'>Le Titre de votre machin</label>
				<input type='text' id='title' ref={titleRef} />
			</form>
			{card ? <List card={Object.entries(card)} /> : ''}
			<form>
				<label htmlFor='question'>Question</label>
				<input
					id='question'
					type='text'
					placeholder='Question'
					ref={questionRef}
				/>
				<label htmlFor='response'>Réponse</label>
				<input
					id='response'
					type='text'
					placeholder='Réponse'
					ref={responseRef}
				/>
				<button onClick={handleCard}>+</button>
			</form>
			<button onClick={sendList}>Finito Pipo</button>
		</div>
	);
};

export default NewList;
