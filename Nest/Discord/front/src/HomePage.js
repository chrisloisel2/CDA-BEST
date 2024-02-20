import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const HomePage = () => {
	const { user } = useAuth();
	const [channels, setChannels] = useState([]);
	const [currentChannel, setCurrentChannel] = useState(null);
	const [messages, setMessages] = useState([]);

	const fetchMessages = (channel) => {
		setCurrentChannel(channel);
		fetch(`http://localhost:3050/channel/${channel._id}/message`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				return setMessages(data)
			})
			.catch(error => console.error('Error fetching messages:', error));
	}

	useEffect(() => {
		fetch('http://localhost:3050/channel')
			.then(response => response.json())
			.then(data => setChannels(data))
			.catch(error => console.error('Error fetching channels:', error));

		fetch('http://localhost:3050/message')
			.then(response => response.json())
			.then(data => setMessages(data))
			.catch(error => console.error('Error fetching messages:', error));
	}, []);

	return (
		<div>
			<div style={styles.navbar}>
				<h1>Discord</h1>
				<h2>{user?.username || "Utilisateur Anonyme"}</h2>
			</div>
			<div style={styles.container}>
				<div style={styles.channelList}>
					<h1>Channel List</h1>
					<div style={styles.channel}>
						{channels.map((channel, index) => (
							<div key={index} onClick={() => {
								fetchMessages(channel);
							}} ><h2>{channel.name}</h2><br /></div>
						))}
					</div>
				</div>
				<div style={styles.messageList}>
					<h1>Messages</h1>
					<div>
						<div style={styles.message}>
							{Array.isArray(messages) && messages.map((message, index) => (
								<div key={index}>
									<h2>{message.senderUsername}</h2>
									<p>{message.content}</p>
								</div>
							))}
						</div>

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
		backgroundColor: 'darkgray',
		padding: '1rem',
	},
	channelList: {
		display: 'flex',
		flexDirection: 'column',
		width: '20%',
		backgroundColor: 'darkgray',
		padding: '1rem',
	},
	channel: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: 'gray',
		padding: '1rem',
		margin: '1rem',
	},
	messageList: {
		display: 'flex',
		flexDirection: 'column',
		width: '80%',
		backgroundColor: 'darkgray',
		padding: '1rem',
	},
	message: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: 'gray',
		padding: '1rem',
		margin: '1rem',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
};

export default HomePage;
