import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(AuthContext);
	const [currentuser, setcurrentuser] = useState(null);
	const [users, setusers] = useState([]);
	const [messages, setmessages] = useState([]);
	const [clicks, setclicks] = useState(0);
	const [cpt, setcpt] = useState(0);
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		if (!user) {
			navigate('/');
		}
		const newSocket = io('http://localhost:3050', { withCredentials: false });
		setSocket(newSocket);

		newSocket.on('clickage', (payload) => {
			setclicks(payload);
		});

		newSocket.on('clickplus', (nb) => {
			setcpt(nb);
		});

		axios.get('http://localhost:3050/user').then((response) => {
			setusers(response.data);
		});

		newSocket.on('voicilesmessages', (newMessage) => {
			setmessages(newMessage);
		});

		return () => newSocket.close();

	}, []);

	const fetchMessages = (curuser) => {
		console.log(curuser);
		socket.emit('messages', user._id, curuser._id);
	}

	return (
		<div>
			<div style={styles.navbar}>
				<h1>WhatsApp</h1>
				<h2>{user?.username || "Utilisateur Anonyme"}</h2>
			</div>
			<div style={styles.container}>
				<div style={styles.channelList}>
					<div style={styles.channel}>
						{users.map((user, index) => (
							<div key={index} onClick={() => {
								fetchMessages(user);
								setcurrentuser(user);
							}} ><h2>{user.username ?? "Messages"}</h2></div>
						))}
					</div>
				</div>
				<div style={styles.messageList}>
					<h1>{currentuser?.username ?? "Messages"}</h1>
					<div>
						<div style={styles.message}>
							{Array.isArray(messages) && messages.map((message, index) => (
								<div key={index}>
									<p>{message.message}</p>
								</div>
							))}
						</div>
						<form onSubmit={(e) => {
							e.preventDefault();
							axios.post('http://localhost:4200/message', {
								message: e.target[0].value,
								sender: user._id,
								receiver: currentuser._id,
							}).then((response) => {
								setmessages((prevMessages) => [...prevMessages, response.data]);
							}
							);
							e.target[0].value = "";
						}
						}>
							<input type="text" />
							<button type="submit">Envoyer</button>
						</form>


						<button
							onClick={() => {
								console.log('Hello World');
								socket.emit('message', clicks);
							}}
						>
							webS</button>
						<p>{clicks}</p>


						<button
							onClick={() => {
								socket.emit('click', cpt);
							}}
						>
							Bouton Click</button>

						<p>{cpt}</p>
					</div>
				</div>
			</div>
		</div>
	);
}


const styles = {
	navbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#2C3E50', // Couleur plus professionnelle
		padding: '10px 20px',
		alignItems: 'center',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
	},
	channelList: {
		display: 'flex',
		flexDirection: 'column',
		width: '20%',
		backgroundColor: '#34495E',
		padding: '20px',
		height: '100vh',
		boxSizing: 'border-box',
		overflowY: 'auto',
	},
	channel: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#4A5F70',
		padding: '10px',
		margin: '5px 0',
		borderRadius: '5px',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#5B7385',
		},
	},
	messageList: {
		display: 'flex',
		flexDirection: 'column',
		width: '80%',
		backgroundColor: '#ECF0F1',
		padding: '20px',
		boxSizing: 'border-box',
		height: '100vh',
		overflowY: 'auto',
	},
	message: {
		backgroundColor: '#BDC3C7',
		padding: '10px',
		margin: '10px 0',
		borderRadius: '10px',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
	},
	container: {
		display: 'flex',
		height: '100vh',
	},
	// Ajoutez d'autres styles selon vos besoins
};

export default HomePage;
