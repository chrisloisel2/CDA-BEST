export interface User{
	username: string;
	password: string;
	_id: string;
}

export interface UserDTO{
	username: string | undefined | null;
	password:  string | undefined | null
}

