import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';
import logOut from '../utils/Logout.js';

const List = () => {
	const location = useLocation();
	const questions = Object.entries(location.state.questions);

	const deleteElement = (index) => {
		axios('http://localhost:2999/user/list', {
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: {
				title: location.state.title,
				index: index,
			},
		}).then((res) => {
			if (res.data === 'Unvalid token!') logOut();
		});
	};
	return (
		<ul>
			{questions.map((element, index) => {
				return (
					<li key={index}>
						<p>{element[0]}</p>
						<p>{element[1]}</p>
						<button
							onClick={() => {
								deleteElement(index);
							}}>
							DELEEEEEEEEEEETE
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
