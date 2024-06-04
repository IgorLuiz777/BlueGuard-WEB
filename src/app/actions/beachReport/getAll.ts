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

export async function getAllReports(): Promise<Report[]> {
    const apiKey = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJteWJhY2tlbmQiLCJzdWIiOiI0IiwiZXhwIjoxNzE3NTMzMzU1LCJpYXQiOjE3MTc1Mjk3NTUsInNjb3BlIjoiVVNFUiJ9.gOKcf4Hlngj-AUO30Dux6u_hTSUb0Hnuc2xQ4i_TSAjuMFEiSagNGbsVLIkkUwZf2hBktZMvUY58QkBMy9TqY5jEcu9mp15gN-Ol62PQXS6yAsqZhlh0QdI3naDdYlT7FmAJQo4MpTgSvY4db3ianRrXonKC2c8xIKUc2JdGKDBv934gtvQWHEV_L3ei57hcHYTXIU0P1MVUZjlm6MTdinzyB4XV95bOgPulETYy1JbBZMP_2AyjNISC6tU9Lk8UOQ0QVBmWiLnEOuPQUecVANnANAz9kEQD9Pc9WZFaiDD1w5G7XVb7azAnz0NxW5cXgfPj9RFSydfXTFzhMASNMw"

    try {
        const resp = await fetch(`${process.env.API_BASE_URL}/beachReport`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            next: { revalidate: 0 }
        });

        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await resp.json();
        
        const reports: Report[] = data.content.map((item: any) => ({
            ...item,
            toJSON: function() { return JSON.stringify(this); }
        }));

        return reports;
    } catch (error) {
        console.error('Failed to fetch reports:', error);
        throw error;
    }
}
