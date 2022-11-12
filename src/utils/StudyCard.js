import React, { useState } from 'react';
import StudyButton from './StudyButton';
import StudyQuestions from '../Components/StudyQuestions';
import StudyDone from './StudyDone';

const StudyCard = (props) => {
	const [index, setIndex] = useState(0);
	const [questOrResp, setQuestOrResp] = useState(0);
	const [success, setSuccess] = useState(0);
	const [last, setLast] = useState(false);
	const length = props.questions.length;

	const isAcquired = (so) => {
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
	if (last) {
		return <StudyDone success={success} length={props.questions.length} />;
	} else {
		return (
			<>
				<StudyQuestions
					questions={props.questions}
					questOrResp={questOrResp}
					index={index}
				/>
				<StudyButton
					isAcquired={isAcquired}
					displayQuest={displayQuest}
					displayResp={displayResp}
				/>
			</>
		);
	}
};

export default StudyCard;
