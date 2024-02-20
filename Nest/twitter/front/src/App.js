import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Connection';
import SignInPage from './Inscription';
import { AuthProvider } from './AuthContext';
import HomePage from './HomePage';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/home" element={<HomePage />} />
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/" element={<LoginPage />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
