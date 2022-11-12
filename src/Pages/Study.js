import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Components/Navigation.js';

const Study = () => {
	const locate = useLocation();
	const questions = Object.entries(locate.state.questions);
	const [index, setIndex] = useState(0);
	const [questOrResp, setQuestOrResp] = useState(0);

	const isAcquired = () => {
		if (questions.length > index + 1) {
			setIndex((c) => c + 1);
			setQuestOrResp(0);
		}
	};

	const displayQuest = () => {
		if (questOrResp) {
			setQuestOrResp((c) => c - 1);
		}
	};

	const displayResp = () => {
		if (!questOrResp) {
			setQuestOrResp((c) => c + 1);
		}
	};
	return (
		<div>
			<Navigation />
			<section className='wrapStudy'>
				<div className='study'>
					<div className='wrapQuestions'>
						<h2>
							<span>{questOrResp ? 'Réponse: ' : 'Question: '}</span>
							{questions[index][questOrResp]}
						</h2>
					</div>
					<div className='buttonGame'>
						<button onClick={displayQuest}>Question</button>
						<button onClick={displayResp}>Réponse</button>
					</div>
					<div className='buttonGame'>
						<button className='buttonFailed' onClick={isAcquired}>
							Échec
						</button>
						<button className='buttonSucces' onClick={isAcquired}>
							Réussite
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Study;
