import React, { useEffect, useState } from 'react';
import StudyDone from '../utils/StudyDone';
const { randRep, shuffle } = require('../utils/RandomNumber.js');

const StudyCard = (props) => {
	// Variables comportant les questions
	const questions = props.questions;
	const length = questions.length;
	// Variables d'état
	// index du choix
	const [choice, setChoice] = useState();
	// Compte de bonne réponse
	const [success, setSuccess] = useState(0);
	// L'index de la question
	const [index, setIndex] = useState(0);
	// Dernière question
	const [last, setLast] = useState(false);
	// Fausses questions du QCM
	const [falseQuest, setFalseQuest] = useState(randRep(index, length));
	// Toutes les questions du QCM
	const [allQuest, setAllQuest] = useState(shuffle([...falseQuest, index]));

	// Gestion des changements d'état, pour les fausses questions
	useEffect(() => {
		setFalseQuest(randRep(index, length));
		setChoice(-1)
	}, [index]);

	// Gestion des changements d'état, mélange de toutes les questions
	useEffect(() => {
		setAllQuest(shuffle([...falseQuest, index]));
	}, [falseQuest]);


	// Vérifie si le choix est bon
	const validate = () => {
		if (!last && choice === index) {
			setSuccess((c) => c + 1);
		}
		if (length > index + 1) {
			setIndex((c) => c + 1);
		} else {
			setLast(true);
		}
	};

	// Si fini on affiche le composant StudyDone
	if (last) {
		return <StudyDone success={success} length={length} />;
	} else {
		// Sinon on génère la question suivante
		return (
			<>
			{/* Montre la question  */}
				<div className='wrapQuestions'>
					<h2>
						<span>Question: </span>
						{questions[index][0]}
					</h2>
				</div>

				{/* Montre les réponses */}
				<div className='wrapResponse'>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type='radio'
							name='response'
							id='one'
							onChange={() => setChoice(allQuest[0])}
							checked={choice === allQuest[0] ? true : false}
							
						/>
						<label htmlFor='one'>{questions[allQuest[0]][1]}</label>
						
						<input
							type='radio'
							name='response'
							id='two'
							onChange={() => setChoice(allQuest[1])}
							checked={choice === allQuest[1] ? true : false }
						/>
						<label htmlFor='two'>{questions[allQuest[1]][1]}</label>
						
						<input
							type='radio'
							name='response'
							id='three'
							onChange={() => setChoice(allQuest[2])}
							checked={choice === allQuest[2] ? true : false}
						/>
						<label htmlFor='three'>
							{questions[allQuest[2]][1]}
						</label>
						<button onClick={validate}>Suivant</button>
					</form>
				</div>
			</>
		);
	}
};

export default StudyCard;
