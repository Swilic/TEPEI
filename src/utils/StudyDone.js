import React from 'react';

const StudyDone = (props) => {
	return (
		<div>
			<p className='score'>
				Votre score est de {props.success}/{props.length}
			</p>
		</div>
	);
};

export default StudyDone;
