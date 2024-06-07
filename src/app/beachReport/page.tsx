"use server"
import NavBar from "@/components/NavBar";
import { getAllReports } from "../actions/beachReport/getAll";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ReportItem from "./ReportItem";
import Footer from "@/components/Footer";

export default async function BeachReport() {
    const reports = await getAllReports();

    return (
        <main>
            <div>
                <NavBar></NavBar>
            </div>
            <section className="flex min-h-screen flex-col items-center justify-between">
            <h1 className="text-4xl m-10 ">Relatórios</h1>

            <Link className="m-5" href={"./beachReport/create"}><Button>Criar Relarório</Button></Link>
            
            
            <div id="data">
                {reports.map((report) => (
                    <ReportItem key={report.id} report={report} />
                ))}
            </div>

            <a href="../">inicio</a>
            </section>
            <Footer></Footer>
        </main>
    );
}
