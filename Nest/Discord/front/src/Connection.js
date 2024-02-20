import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username });
    // Vous pouvez ajouter ici la logique de vérification
  };

  return (
    <form onSubmit={handleSubmit} style={styles.cardSins}>
	  <h1>Se connecter</h1>
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
      <button type="submit">Se Connecter</button>
	  <a href="/signin">S'inscrire</a>
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

export default LoginPage;
