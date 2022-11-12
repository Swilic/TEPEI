import React from 'react';

const StudyQuestions = (props) => {
	return (
		<div className='wrapQuestions'>
			<h2>
				<span>{props.questOrResp ? 'Réponse: ' : 'Question: '}</span>
				{props.questions[props.index][props.questOrResp]}
			</h2>
		</div>
	);
};

export default StudyQuestions;
