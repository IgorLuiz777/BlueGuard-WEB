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
    const apiKey = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJteWJhY2tlbmQiLCJzdWIiOiI0IiwiZXhwIjoxNzE3NTM3Mjk5LCJpYXQiOjE3MTc1MzM2OTksInNjb3BlIjoiVVNFUiJ9.KRRsi45kDSKrNkhD-pQAKyY8nVd_Vmn8buBfsBqu6eYEDDutULReE1TUsc9t9v7RpZ_nd6yg8N4bHEAOwoilO920XOCUc2KEVrP_b2bRGRe7cKCbhmoDQByGombfEzv3hNQGWJ63hdRLaf868bP82ggVwgXwcIITo5NAiSKdG4VzdVLdxEE__AyUHCOYVybT1IrD_a1z4eQoJ1fGHgl3zlJiO-ZVi93I8kdFG6Dax7dcUAOPNLndn8XMYUUNTjTI3JkaJub8lxuRA8TEPw503KrTCno8qDBnHvkAaqCJRlz0zy4XMlSbp2vPNmovhAFXMb_DKkyOx-RgJ1Y9yv5QNg"

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
