import toast from "react-hot-toast";
import Cookies from 'js-cookie';

interface User {
    username: string;
    password: string;
}

export async function login({ username, password }: User) {
    const data = { username, password };

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`http://localhost:8080/login`, options);

        if (response.ok) {
            const responseData = await response.json();
                
            Cookies.set('accesToken', responseData.accesToken, { sameSite: 'strict' });
            Cookies.set('expiresIn', responseData.expiresIn, { sameSite: 'strict' });
            return {
                accesToken: responseData.accesToken,
                expiresIn: responseData.expiresIn
            };
        }

        if (response.status === 400) {
            return {
                message: "Validação falhou"
            };
        }

        if (response.status === 401 || response.status === 403) {
            throw new Error("Unauthorized");
        }

        throw new Error('Network response was not ok');
    } catch (error) {
        console.error('Failed to login:', error);
        toast.error('Failed to login. Please try again.');
        throw error;
    }
}
