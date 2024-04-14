import React from 'react';
import { Image, Text } from 'react-native';
import { connectedUser } from '../Services/FetcherService';


const Game = () => {
	return (<>
		<Text style={{ textAlign: 'center', fontSize: 24 }}>Game</Text>
		<Image
			source={
				{ uri: 'https://media.discordapp.net/attachments/1223254678293319791/1223254719728975922/loupgarou.png?ex=66192fbc&is=6606babc&hm=09dae7a8abfab57e82cedac5a405e34083aa1f8e6308409ad0139c3828a9e307&=&format=webp&quality=lossless&width=1288&height=1288' }
			}
			style={{ width: 500, height: 500, alignSelf: 'center' }}
		/>
	</>);
};

export default Game;
