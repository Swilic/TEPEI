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
		// Add as object the question as key and response as value in the card
		setCard((prev) => ({
			...prev,
			...{ [questionRef.current.value]: responseRef.current.value },
		}));
		document.querySelector('#question').select();
	};

	const sendList = () => {
		if (
			card === undefined ||
			Object.entries(card).length < 3 ||
			titleRef.current.value === ''
		) {
			const infoList = document.querySelector('.infoList');
			infoList.classList.toggle('fail');
			setTimeout(() => {
				infoList.classList.toggle('fail');
			}, 300);
		} else {
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
		}
	};
	return (
		<Fragment>
			<Navigation />

			<div className='centerList'>
				<div>
					<div className='wrapForm'>
						<form
							className='title'
							onSubmit={(e) => e.preventDefault()}>
							<label htmlFor='title'>
								Le titre de votre liste
							</label>
							<input
								type='text'
								id='title'
								ref={titleRef}
							/>
						</form>

						<form className='questions'>
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
							<button
								className='addList'
								onClick={handleCard}>
								Ajouter
							</button>
						</form>
					</div>
					<p className='infoList'>
						La liste doit posséder au minimum 3 questions ou un
						titre
					</p>
				</div>
				<div className='containerLists'>
					<h2>{titleRef.current ? titleRef.current.value : ''}</h2>
					{card ? <List card={Object.entries(card)} /> : ''}
					<button
						onClick={sendList}
						className='create'>
						Liste finie
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default NewList;
