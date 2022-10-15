import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Pages/Sign";
import Home from "./Pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign" element={<Sign />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
