import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username });
	axios.post('http://localhost:3000/api/auth/signup', {
		username: username,
		email: email,
		password: password
	}).then((response) => {
		if (response.data.error) {
			// refresh the page
			window.location.reload(false);
		}
		else {
			document.cookie = "token=" + response.data.token;
			window.location.replace('/');
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
        type="email"
        value={username}
		placeholder="Email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
		placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">S'inscrire</button>
	  <a href="/login">Se connecter</a>
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
