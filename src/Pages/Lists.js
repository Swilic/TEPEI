import axios from 'axios';
import React, { useEffect } from 'react';

const Listes = function () {
	useEffect(()=>{
		axios('http://localhost:2999/user/lists', {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((res) => {
			console.log(res);
		});
	}, [])

	return <div>Listes</div>;
};

export default Listes;
