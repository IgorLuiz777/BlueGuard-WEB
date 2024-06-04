import React from 'react';

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

interface ReportItemProps {
    report: Report;
}

export const ReportItem: React.FC<ReportItemProps> = ({ report }) => {
    return (
        <div>
            <h2>{report.location}</h2>
            <p>{report.condition}</p>
            <p>{report.description}</p>
        </div>
    );
};
