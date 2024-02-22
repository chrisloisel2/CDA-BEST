import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './user';
import axios from 'axios';
import { useEffect } from 'react';

function App({ name }) {

	const [userlist, setUserlist] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3050/user").then((response) => {
			setUserlist(response.data);
		});
	}, []);

	console.log('props', name);
	return (
		<div className="App">
			{// NgFor
				userlist.length && userlist.map((name, key) => {
					return <User name={name} key={key} />
				})
			}
		</div>
	);
}

export default App;
