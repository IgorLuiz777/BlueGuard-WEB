"use client"
import React, { useState } from "react";
import { Input, Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import { login } from "@/app/actions/user/login";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const result = await login({ username, password });
            // console.log("Login bem sucedido", result);
            // console.log("Token de acesso:", result.accessToken);
            // console.log("Expira em:", result.expiresIn);
            // console.log("Valor de accessToken:", sessionStorage.getItem('accessToken'));
            window.location.href = "/beachReport";
        } catch (error) {
            setError("Login falhou. Por favor, verifique seu nome de usuário e senha.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
                <CardHeader className="text-center p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Login</h1>
                </CardHeader>
                <CardBody className="flex flex-col gap-6 p-6">
                    {error && <p className="text-red-500">{error}</p>}
                    <Input
                        className="p-5 text-black"
                        type="text"
                        variant="underlined"
                        label="Username"
                        placeholder="Digite o seu Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        className="p-5 text-black"
                        type="password"
                        variant="underlined"
                        label="Password"
                        placeholder="Digite a sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </CardBody>
                <CardFooter className="text-center p-6">
                    <p className="text-gray-600">
                        Esqueceu sua senha? <a href="#" className="text-blue-500 hover:underline">Clique aqui</a>
                    </p>
                </CardFooter>
            </Card>
        </main>
    );
}