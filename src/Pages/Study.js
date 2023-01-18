import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Components/Navigation.js';
import StudyCard from '../Components/StudyCard.js';

const Study = () => {
	// Récupérer les données de la page précédente
	const locate = useLocation();
	const questions = Object.entries(locate.state.questions);

	return (
		<div>
			<Navigation />
			<section className='wrapStudy'>
				<div className='study'>
					<StudyCard questions={questions} />
				</div>
			</section>
		</div>
	);
};

export default Study;
