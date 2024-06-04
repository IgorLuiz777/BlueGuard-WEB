import { getAllReports } from "../actions/beachReport/getAll";
import { ReportItem } from "./ReportItem";

export default async function Home() {
    const reports = await getAllReports();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Home</h1>

            <div id="data">
                {reports.map((report) => (
                    <ReportItem key={report.id} report={report} />
                ))}
            </div>

            <a href="../">inicio</a>
        </main>
    );
}
