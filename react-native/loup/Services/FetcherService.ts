import axios from "axios";

axios.defaults.baseURL = "http://82.165.127.44";

async function loginUser(name: string, password: string): Promise<any> {
    try {
        const response = await axios.post("users/login", { name, password });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la connexion de l'utilisateur");
    }
}

async function registerUser(
    name: string,
    password: string
): Promise<any> {
    try {
        const response = await axios.post("users/register", {
            name,
            password,
        });
        console.log(response.data);

        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la connexion de l'utilisateur");
    }
}

export { loginUser, registerUser };
