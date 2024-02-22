import { useEffect, useState } from "react";

function User({ name }) {

	useEffect(() => {
		console.log('Le composant est monté');
		return () => {
			console.log('Le composant est démonté');
		}
	}, []);

	const [cpt, setCpt] = useState(0);

	function onClick() {
		console.log('click');
		setCpt(cpt + 1);
	}

	console.log('props', name);
	return (
		<div className="App">
			<p>{cpt}</p>
			{//ngIf
				cpt == 5 && <p>Bravo</p>
			}
			<p>Bonjour, je suis {name.username}</p>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default User;
