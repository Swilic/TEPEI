import axios from 'axios';
import React from 'react';

function Listes() {
	axios('http://localhost:2999/user/lists', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			auth: localStorage.getItem('token'),
		},
	});
	return <div>Listes</div>;
}

export default Listes;
