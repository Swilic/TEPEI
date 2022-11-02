import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './Pages/Sign';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Lists from './Pages/Lists';
import List from './Pages/Cards';
import NewList from './Pages/NewList';

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
			</Routes>
		</BrowserRouter>
	);
};

export default App;
