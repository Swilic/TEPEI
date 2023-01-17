import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const userRef = useRef(null);
	const passRef = useRef(null);
	const nav = useNavigate();

	const handleChange = (event) => {
		event.preventDefault();
		const user = userRef.current.value;
		const pass = passRef.current.value;
		axios('http://localhost:2999/account/login', {
			method: 'POST',
			headers: {
				'Access-control-allow-orgigin': '*',
				'Content-Type': 'application/json',
			},
			data: {
				user: user,
				pass: pass,
			},
		}).then((res) => {
			if (res.data.status === 'Clear') {
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('user', res.data.user);
				localStorage.setItem('connected', true);
				nav('/');
			} else {
				const errorMsg = document.querySelector('.errorConnection');
				errorMsg.classList.add('show');
				errorMsg.classList.add('refused');
				setTimeout(() => {
					errorMsg.classList.remove('refused');
				}, 350);
			}
		});
	};
	return (
		<div>
			<p className='textPageInfo'>Page de connexion</p>
			<div className='containerConnexion'>
				<form
					className='connexion'
					onSubmit={handleChange}>
					<label htmlFor='mail'>Nom d'utilisateur</label>
					<input
						type='text'
						ref={userRef}
						id='mail'
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						ref={passRef}
						id='password'
					/>
					<button type='submit'>Connexion</button>
					<span className='errorConnection'>
						Nom d'utilisateur ou mot de passe incorrect!
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
