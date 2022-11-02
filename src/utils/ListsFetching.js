import axios from 'axios';
import { useEffect, useState } from 'react';
import logOut from './Logout';

const ListsFetching = () => {
	const [lists, setLists] = useState([]);
	useEffect(() => {
		axios('http://localhost:2999/user/lists', {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((res) => {
			if (res.data == 'Unvalid token!') logOut();
			setLists(res.data);
		});
	}, []);
	return lists;
};

export default ListsFetching;
