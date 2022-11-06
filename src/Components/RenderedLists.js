import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ListsFetching from '../utils/ListsFetching.js';
const logOut = require('../utils/Logout.js');

const RenderedLists = () => {
	const lists = ListsFetching();

	const deleteList = (title) => {
		axios('http://localhost:2999/user/list', {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: { title },
		}).then(() => {
			if (res.data === 'Unvalid token!') logOut();
			location.reload();
		});
	};
	return (
		<ul>
			{lists.map((element) => {
				return (
					<li key={element.title}>
						<NavLink to='list' state={element}>
							<h2>{element.title}</h2>
						</NavLink>
						<button
							onClick={() => {
								deleteList(element.title);
							}}>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default RenderedLists;
