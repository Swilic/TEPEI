import axios from 'axios';
import React, { useRef, useState } from 'react';

const Login = () => {
	const [isUser, setisUser] = useState(false);
	const userRef = useRef(null);
	const passRef = useRef(null);

	const handleChange = (event) => {
		event.preventDefault();
		const user = userRef.current.value;
		const pass = passRef.current.value;
		axios(`http://localhost:2999/account/login`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				user: user,
				pass: pass,
			},
		}).then((res) => {
			console.log(res);
		});
	};
	return (
		<form className='connexion' onSubmit={handleChange}>
			<label htmlFor='mail'>Nom d'utilisateur</label>
			<input type='text' ref={userRef} id='mail' />
			<label htmlFor='password'>Password</label>
			<input type='password' ref={passRef} id='password' />
			<button type='submit'>Connexion</button>
</form>
	);
};

export default Login;
