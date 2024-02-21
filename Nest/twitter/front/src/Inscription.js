import React, { useContext, useState } from 'react';
import { AuthContext, useAuth } from './AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		axios.post('http://localhost:3050/user', {
			username: username,
			password: password
		}).then((response) => {
			if (response.data.error) {
				window.location.reload(false);
			}
			else {
				document.cookie = "token=" + response.data.token;
				setUser(response.data);
				navigate('/');
			}
		});
	};

	return (
		<form onSubmit={handleSubmit} style={styles.cardSins}
		>
			<h1>S'inscrire</h1>
			<input
				type="text"
				value={username}
				placeholder="Nom d'utilisateur"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				value={password}
				placeholder="Mot de passe"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">S'inscrire</button>
			<a href="/">Se connecter</a>
		</form>
	);
};

const styles = {
	cardSins: {
		display: 'flex',
		flexDirection: 'column',
		width: '40%',
		margin: 'auto',
		padding: '2rem',
		borderRadius: '5px',
		boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
		backgroundColor: 'darkgray',
	},
};

export default SignInPage;
