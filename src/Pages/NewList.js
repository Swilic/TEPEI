import axios from 'axios';
import React, { Fragment, useRef, useState } from 'react';
import List from '../Components/List.js';
import Navigation from '../Components/Navigation.js';

const NewList = () => {
	// Initialisation des refs
	const questionRef = useRef(null);
	const responseRef = useRef(null);
	const titleRef = useRef(null);
	// Variables d'état
	const [card, setCard] = useState();

	const handleCard = (e) => {
		e.preventDefault();
		// Ajoute dans mon objet card les valeurs des inputs
		setCard((prev) => ({
			...prev,
			...{ [questionRef.current.value]: responseRef.current.value },
		}));
		document.querySelector('#question').select();
	};

	const sendList = () => {

		// Vérifie les conditions d'acceptation, si pas bon, affiche un message d'erreur
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
			axios('https://somehting.onrender.com/user/list', {
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
					{/* Condition ternaire pour afficher le titre de la liste */}
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
