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
    const apiKey = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJteWJhY2tlbmQiLCJzdWIiOiIyIiwiZXhwIjoxNzE3NjM4OTI2LCJpYXQiOjE3MTc2MzUzMjYsInNjb3BlIjoiVVNFUiJ9.PFZU5iIQqqZQoi2B3HHQZ_a-qrMfG00EB-rKBama7ZauzsocqMei57_QBDtJ3jBoWYoNFSPuZ7NAQSDqhQCECfGy8zj1GQe4GKDflrwTnjxwJLcc1IQg88dNR-POket-btpAlgBd-aDjyZgKEI68k4aRWDbibo1rQYpe33x53M2SMT9wG7ITGiGBi6Lc26Y2kb1fc7NR73QGb6heD5gb_7mjS2cgdbhSh72sw3rCoPdR2FwGaQl-qeGbPDvsCROATNDVQwa0fcj5XATzV9aDTZYI6Z7NM5TAp94Mt_37NFj76Lrbwccxrpsx7VQI-z41lngEEviV4ngYk2P3wGoYWA"

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
