interface User {
	_id: string;
	name: string;
	password: string;
	connected: boolean;
	role ?: string;
	votes: string[];
	isAlive: boolean;
}

interface UserDTO {
	name: string;
	password: string;
}

export default User;
