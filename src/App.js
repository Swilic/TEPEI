import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './Pages/Sign.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Lists from './Pages/Lists.js';
import List from './Pages/List.js';
import NewList from './Pages/NewList.js';
import Study from './Pages/Study.js';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign' element={<Sign />} />
				<Route path='/login' element={<Login />} />
				<Route path='/lists' element={<Lists />} />
				<Route path='/lists/list' element={<List />} />
				<Route path='/creation' element={<NewList />} />
				<Route path='/study' element={<Study />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
