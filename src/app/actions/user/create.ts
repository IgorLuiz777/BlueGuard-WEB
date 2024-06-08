"use server"
interface User {
    username: string;
    email: string;
    password: string;
}

export async function Register({ username, email, password }: User) {
    const data = { username, email, password };

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`${process.env.API_BASE_URL}/users`, options);

        if (response.ok) {
            const responseData = await response.json();

            return {
                message: "Usuário Cadastrado"
            };
        }

        if (response.status === 400) {
            return {
                message: "Cadastro falhou"
            };
        }

        throw new Error('Network response was not ok');
    } catch (error) {
        console.error('Failed to refister:', error);
        throw error;
    }
}