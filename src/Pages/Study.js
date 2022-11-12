import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Components/Navigation.js';
import StudyCard from '../utils/StudyCard.js';

const Study = () => {
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
