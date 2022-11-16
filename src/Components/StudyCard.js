import React, { useEffect, useState } from 'react';
import StudyDone from '../utils/StudyDone';
const { randRep, shuffle } = require('../utils/RandomNumber.js');

const StudyCard = (props) => {
	const questions = props.questions;
	const length = questions.length;
	const [choice, setChoice] = useState();
	const [success, setSuccess] = useState(0);
	const [index, setIndex] = useState(0);
	const [last, setLast] = useState(false);
	const [falseQuest, setFalseQuest] = useState(randRep(index, length));
	const [allQuest, setAllQuest] = useState(shuffle([...falseQuest, index]));

	useEffect(() => {
		setFalseQuest(randRep(index, length));
		setChoice(-1)
	}, [index]);

	useEffect(() => {
		setAllQuest(shuffle([...falseQuest, index]));
	}, [falseQuest]);

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
	if (last) {
		return <StudyDone success={success} length={length} />;
	} else {
		return (
			<>
				<div className='wrapQuestions'>
					<h2>
						<span>Question: </span>
						{questions[index][0]}
					</h2>
				</div>
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
