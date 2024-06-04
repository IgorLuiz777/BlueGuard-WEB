import NavBar from "@/components/NavBar";
import { getAllReports } from "../actions/beachReport/getAll";
import { ReportItem } from "./ReportItem";

export default async function Home() {
    const reports = await getAllReports();

    return (
        <main>
            <div>
                <NavBar></NavBar>
            </div>
            <section className="flex min-h-screen flex-col items-center justify-between">
            <h1 className="text-4xl m-10 ">Relatórios</h1>
            <div id="data">
                {reports.map((report) => (
                    <ReportItem key={report.id} report={report} />
                ))}
            </div>

            <a href="../">inicio</a>
            </section>
            
        </main>
    );
}
