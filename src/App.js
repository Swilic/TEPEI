import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './Pages/Sign';
import Home from './Pages/Home';
import Login from './Pages/Login';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign' element={<Sign />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
