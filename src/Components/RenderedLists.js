import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ListsFetching from '../utils/ListsFetching.js';

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
			location.reload();
		});
	};
	return (
		<ul>
			{lists.map((element) => {
				return (
					<li key={element.title}>
						<NavLink to='list' state={element.questions}>
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
