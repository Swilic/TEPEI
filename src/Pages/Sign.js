import axios from 'axios';
import React from 'react';

const Sign = () => {
	function geti() {
		const user = document.getElementById('mail').value;
		const pass = document.getElementById('password').value;
		axios
			.get(`http://localhost:2999/sign/${user}/${pass}`)
			.then((res) => {
				console.log(res);
			});
	}
	return (
		<div className='connexion'>
			<label htmlFor='mail'>Adresse mail</label>
			<input type='text' id='mail' />
			<label htmlFor='password'>Password</label>
			<input type='password' id='password' />
			<button onClick={geti} type='submit'>
				Connexion
			</button>
		</div>
	);
};

export default Sign;
