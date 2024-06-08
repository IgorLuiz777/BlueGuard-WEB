"use server"
import { cookies } from 'next/headers'

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
    const apiKey = cookies().get('accessToken');
    console.log(cookies().get('accessToken'))
    //console.log(cookies().get('accessToken'));
    //const apiKey = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJteWJhY2tlbmQiLCJzdWIiOiIyIiwiZXhwIjoxNzE3Njg0NTIwLCJpYXQiOjE3MTc2ODA5MjAsInNjb3BlIjoiVVNFUiJ9.oZhz15CiRsx-TBbKUXJIH7ft2W6SnN0vN2a_MwNkF1di0gqt0FL6zsTP-oNsWRvF7QmDzlGHwDAWaw4KZBnYeg0Y0sxSA7CkMpB7cs4AGJ62AKeEKAUkvlou4h5JVmQr15bpW6etEai177OIhicyK3EFVzYVlAtlo1InclGl9TnAV4dNL0sE6xFz70uiEf6WR6Lx8_wiEJjXI1VEUfyyGq32MuLQRDtQih5m7IM4dekqJKugi7pzNnwRHWGFYywb3uyGdCxwOR5ui1B6eSwuR8oBWgKu7T3viajopGxLe2BoKx0EOz_hnuickKDUz3kU_V0DhXRDl9Rs_rUiHNKFLw"

    if (!apiKey) {
        return Promise.reject(new Error('API key is missing'));
    }

    return fetch(`${process.env.API_BASE_URL}/beachReport`, {
        headers: {
            'Authorization': `Bearer ${apiKey.value}`
        },
        next: { revalidate: 0 }
    }).then(resp => {
        if (!resp.ok) {
            throw new Error('É preciso estar logado para acessar essa página vá para /forms/login');
        }
        return resp.json();
    }).then(data => {
        return data._embedded.beachReportList.map((item: any) => ({
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
