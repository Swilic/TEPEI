import React from 'react';

const StudyButton = (props) => {
	return (
		<>
			<div className='buttonGame'>
				<button onClick={props.displayQuest}>Question</button>
				<button onClick={props.displayResp}>Réponse</button>
			</div>
			<div className='buttonGame'>
				<button
					className='buttonFailed'
					onClick={() => props.isAcquired()}>
					Échec
				</button>
				<button
					className='buttonSucces'
					onClick={() => props.isAcquired('Y')}>
					Réussite
				</button>
			</div>
		</>
	);
};

export default StudyButton;
