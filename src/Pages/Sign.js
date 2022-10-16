import axios from 'axios';
import React, { useRef } from 'react';

const Sign = () => {
	const userRef = useRef(null);
	const passRef = useRef(null);

	const handleChange = () => {
		const user = userRef.current.value;
		const pass = passRef.current.value;
		axios
			(`http://localhost:2999/sign`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: {
					user: user,
					pass: pass,
				},
			})
			.then((res) => {
				console.log(res);
			});
	};
	return (
		<div className='connexion'>
			<label htmlFor='mail'>Adresse mail</label>
			<input type='text' ref={userRef} id='mail' />
			<label htmlFor='password'>Password</label>
			<input type='password' ref={passRef} id='password' />
			<button onClick={handleChange} type='submit'>
				Connexion
			</button>
		</div>
	);
};

export default Sign;
