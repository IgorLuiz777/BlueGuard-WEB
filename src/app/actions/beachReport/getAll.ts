interface User {
    id: number;
    username: string;
    email: string;
}

interface Report {
    id: number;
    user: User;
    location: string;
    condition: string;
    description: string;
    timestamp: string;
    imageUrl: string;
    toJSON: () => string;
}

export function getAllReports(): Promise<Report[]> {
    const apiKey = sessionStorage.getItem('accessToken');

    if (!apiKey) {
        return Promise.reject(new Error('API key is missing'));
    }

    return fetch(`${process.env.API_BASE_URL}/beachReport`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        },
        next: { revalidate: 0 }
    }).then(resp => {
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        return resp.json();
    }).then(data => {
        return data.content.map((item: any) => ({
            id: item.id,
            user: {
                id: item.user.id,
                username: item.user.username,
                email: item.user.email,
            },
            location: item.location,
            condition: item.condition,
            description: item.description,
            timestamp: item.timestamp,
            imageUrl: item.imageUrl,
            toJSON: function() { return JSON.stringify(this); }
        }));
    }).catch(error => {
        console.error('Failed to fetch reports:', error);
        throw error;
    });
}
