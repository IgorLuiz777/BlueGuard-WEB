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
    const apiKey = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJteWJhY2tlbmQiLCJzdWIiOiI0IiwiZXhwIjoxNzE3NTQ2NzI5LCJpYXQiOjE3MTc1NDMxMjksInNjb3BlIjoiVVNFUiJ9.bJ41AFw4VsdiORQIqUhqN_PMem_N0bjb5CBlgXq3mcXS5BqKODmdjcni9yeDgIFnPpuzlbGixXfNizTjVdPeSO2CxHXBoNsUXQ0QIGj38ab4GxZHiv8t4Yjh_I3v5CQQN0-O_2PT2403JHZukJmPfUyIrGeR54-lZkNqGu9L7rmpXMNAI2OGF2CmYmgfoFzj0LnWYXySsowj-lKniGiHdag7oeKaCJGE97jS7KPyPh0ih0MPnUDdA_d6fj98kdxzgmOChenTVDSR7xjZwB7dQdI-Z1vTtj-s7ozvf85ifea8ZbkyMWjUTqqtz5WFYxI1NTbWwcUxyZN5k5HTpKBomg"

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
