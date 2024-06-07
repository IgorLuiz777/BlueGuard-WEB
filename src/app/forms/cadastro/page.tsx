"use client"
import { Register } from "@/app/actions/user/create";
import { Input, Card, CardBody, CardHeader, CardFooter, Link, Image } from "@nextui-org/react";
import React, { useState } from "react";


export default function Cadastro() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        try {
            const result = await Register({ username, email, password });

            window.location.href = "/forms/login";
        } catch (error) {
            setError("Cadastro falhou. Por favor, verifique seu nome de usuário e senha.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <Image className="mb-5" src="../favicon.ico" width={200} alt="BlueGuard Logo"></Image>
            <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
                <CardHeader className="text-center p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Cadastro</h1>
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
                        type="text"
                        variant="underlined"
                        label="Email"
                        placeholder="Digite o seu Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        {loading ? 'Loading...' : 'Cadastrar'}
                    </button>
                </CardBody>
                <CardFooter className="text-center p-6">
                    <p className="text-gray-600">
                        Já tem registro? <Link href="/forms/login" className="text-blue-500 hover:underline">Clique aqui</Link>
                    </p>
                </CardFooter>
                <CardFooter className="text-center p-6">
                    <p className="text-gray-600">
                        Quer Voltar? <Link href="../" className="text-blue-500 hover:underline">Clique aqui</Link>
                    </p>
                </CardFooter>
            </Card>
        </main>
    );

}