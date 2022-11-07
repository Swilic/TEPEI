import axios from 'axios';
import React, { Fragment, useRef, useState } from 'react';
import List from '../Components/List.js';
import Navigation from '../Components/Navigation.js';

const NewList = () => {
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
		});
	};
	return (
		<Fragment>
			<Navigation />

			<div className='centerList'>
				<form className='title'>
					<label htmlFor='title'>Le Titre de votre machin</label>
					<input type='text' id='title' ref={titleRef} />
				</form>
				<form className='questions'>
					<label htmlFor='question'>Question</label>
					<input
						onClick={(e) => {
							e.target.select();
						}}
						id='question'
						type='text'
						placeholder='Question'
						ref={questionRef}
					/>
					<label htmlFor='response'>Réponse</label>
					<input
						onClick={(e) => {
							e.target.select();
						}}
						id='response'
						type='text'
						placeholder='Réponse'
						ref={responseRef}
					/>
					<button className='addList' onClick={handleCard}>
						Ajouter
					</button>
				</form>
				<h2>{titleRef.current ? titleRef.current.value : ''}</h2>
				{card ? <List card={Object.entries(card)} /> : ''}
				<button onClick={sendList} className='create'>
					Finito Pipo
				</button>
			</div>
		</Fragment>
	);
};

export default NewList;
