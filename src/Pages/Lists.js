import axios from 'axios';
import React from 'react';

const Listes = function () {
	axios('http://localhost:2999/user/lists', {
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	}).then((res) => {
		console.log(res);
	});
	return <div>Listes</div>;
};

export default Listes;
