import React, { useEffect, useState } from 'react';
import StudyDone from '../utils/StudyDone';

const StudyCard = (props) => {
	const [response, setResponse] = useState('');
	const qcm = [];
	const [index, setIndex] = useState(-1);
	const [success, setSuccess] = useState(0);
	const [last, setLast] = useState(false);
	const questions = props.questions;
	const length = questions.length;

	console.log(questions);

	const randRep = () => {
		let first = Math.floor(Math.random() * length);
		let second = Math.floor(Math.random() * length);
		if (
			qcm.includes(first) ||
			qcm.includes(second) ||
			index === first ||
			index === second
		) {
			randRep();
		}
		return [first, second];
	};

	useEffect(() => {
		setResponse(questions[1][1]);

		console.log(response);
	}, [index]);

	const validate = (so) => {
		console.log(so);
		if (so && !last) {
			setSuccess((c) => c + 1);
		}
		if (length > index + 1) {
			setIndex((c) => c + 1);
			setQuestOrResp(0);
		} else {
			setLast(true);
		}
	};

	const nextQuest = () => {
		null;
	};
	if (last) {
		return <StudyDone success={success} length={length} />;
	} else {
		return (
			<>
				<div className='wrapQuestions'>
					<h2>
						<span>Question: </span>
						{questions[1][0]}
					</h2>
				</div>
				<div className='wrapResponse'>
					<input type='radio' name='response' id='one' />
					<label htmlFor='one'>{questions[1][1]}</label>
					<input type='radio' name='response' id='two' />
					<label htmlFor='two'>{randRep()[1]}</label>
					<input type='radio' name='response' id='three' />
					<label htmlFor='three'>{randRep()[0]}</label>
				</div>
			</>
		);
	}
};

export default StudyCard;
