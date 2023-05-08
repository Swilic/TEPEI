import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
	// Initialisation des refs
	const userRef = useRef(null);
	const passRef = useRef(null);
	const nav = useNavigate();

	const handleChange = (event) => {
		event.preventDefault();
		// Récupération des valeurs des inputs
		const user = userRef.current.value;
		const pass = passRef.current.value;

		axios('https://somehting.onrender.com/account/sign', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: {
				user: user,
				pass: pass,
			},
		}).then((res) => {
			// Condition ternaire pour rediriger vers la page de connexion si la création de compte est acceptée
			res.data === 'Clear' ? nav('/login') : console.log('no');
		});
	};
	return (
		<div>
			<p className='textPageInfo'>Création de compte</p>
			<div className='containerConnexion'>
				<form
					className='inscription'
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
				</form>
			</div>
		</div>
	);
};

export default Sign;
