"use server"
import { cookies } from 'next/headers';

interface Report {
    location: string;
    condition: string;
    description: string;
    imageUrl: string;
}

export async function createReport({ location, condition, description, imageUrl }: Report){
    const data = { location, condition, description, imageUrl };
    const apiKey = cookies().get('accessToken');

    if (!apiKey) {
        throw new Error('API key is missing');
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${apiKey.value}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`${process.env.API_BASE_URL}/beachReport`, options);

        if (!response.ok) {
            throw new Error('Failed to create report. Server responded with status ' + response.status);
        }

        const responseData = await response.text();

        try {
            const parsedData = JSON.parse(responseData);
            return parsedData;
        } catch (error) {
            return responseData;
        }
    } catch (error) {
        console.error('Failed to create report:', error);
        throw error;
    }
}
