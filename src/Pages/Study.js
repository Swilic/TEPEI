import React from 'react';
import { useLocation } from 'react-router-dom';

const Study = () => {
	const locate = useLocation();
	console.log(locate);
	return <div>Study</div>;
};

export default Study;
