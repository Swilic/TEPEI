import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
	const nav = useNavigate();
	const userRef = useRef(null);
	const passRef = useRef(null);

	const handleChange = (event) => {
		event.preventDefault();
		const user = userRef.current.value;
		const pass = passRef.current.value;

		axios('http://localhost:2999/account/sign', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: {
				user: user,
				pass: pass,
			},
		}).then((res) => {
			res.data === 'Clear' ? nav('/login') : console.log('no');
		});
	};
	return (
		<div>
			<p className='textPageInfo'>Création de compte</p>
			<form className='inscription' onSubmit={handleChange}>
				<label htmlFor='mail'>Nom d'utilisateur</label>
				<input type='text' ref={userRef} id='mail' />
				<label htmlFor='password'>Password</label>
				<input type='password' ref={passRef} id='password' />
				<button type='submit'>Connexion</button>
			</form>
		</div>
	);
};

export default Sign;
