import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { loginUser, registerUser} from '../Services/FetcherService';

const Connection = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		loginUser(username, password);
		console.log('Logging in...');
	};

	const handleRegister = () => {
		registerUser(username, password);
		console.log('Logging in...');
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<View style={{
				flexDirection: 'row',
				gap: 18,
			 }} >
				<Button title="Login" onPress={handleLogin} />
				<Button title="Register" onPress={handleRegister} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	input: {
		width: '100%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
});

export default Connection;
