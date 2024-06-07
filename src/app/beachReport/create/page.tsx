"use client"
import { createReport } from "@/app/actions/beachReport/create";
import { Register } from "@/app/actions/user/create";
import { Input, Card, CardBody, CardHeader, CardFooter, Link, Image } from "@nextui-org/react";
import React, { useState } from "react";


export default function Create() {
    const [location, setLocation] = useState("");
    const [condition, setCondition] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReport = async () => {
        setLoading(true);
        setError("");
        try {
            const result = await createReport({location, condition, description, imageUrl});
            window.location.href = "/beachReport";
        } catch (error) {
            setError("Cadastro falhou. Por favor verifiqu os parâmetros.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <Image className="mb-5" src="../favicon.ico" width={200} alt="BlueGuard Logo"></Image>
            <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
                <CardHeader className="text-center p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Criar Relatório</h1>
                </CardHeader>
                <CardBody className="flex flex-col gap-6 p-6">
                     {error && <p className="text-red-500">{error}</p>}
                    <Input
                        className="p-5 text-black"
                        type="text"
                        variant="underlined"
                        label="Localização"
                        placeholder="Digite a localização"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Input
                        className="p-5 text-black"
                        type="text"
                        variant="underlined"
                        label="Condição"
                        placeholder="Digite a condição da pria"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                    />
                    <Input
                        className="p-5 text-black"
                        type="text"
                        variant="underlined"
                        label="Descrição"
                        placeholder="Digite a descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input
                        className="p-5 text-black"
                        type="text"
                        variant="underlined"
                        label="Imagem URL"
                        placeholder="Cole a URL da imagem"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <button
                        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleReport}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Criar Relatório'}
                    </button>
                </CardBody>
                <CardFooter className="text-center p-6">
                    <p className="text-gray-600">
                        Quer Voltar? <Link href="/beachReport" className="text-blue-500 hover:underline">Clique aqui</Link>
                    </p>
                </CardFooter>
            </Card>
        </main>
    );

}