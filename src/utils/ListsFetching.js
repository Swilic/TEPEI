import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logout from './Logout';

const ListsFetching = () => {
	const [lists, setLists] = useState([]);
	const nav = useNavigate();
	useEffect(() => {
		axios('http://localhost:2999/user/lists', {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		}).then((res) => {
			if (res.data === 'Unvalid token!') {
				Logout();
				nav('/');
			}
			setLists(res.data);
		});
	}, []);
	return lists;
};

export default ListsFetching;
