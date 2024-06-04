import UserCard from '@/components/Card';
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
            <div className="flex items-center mb-2">
                <UserCard
                    username={report.user.username}
                    email={report.user.email}
                    location={report.location}
                    description={report.description}
                    condition={report.condition}
                />
            </div>
        </div>
    );
};
