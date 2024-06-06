import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>BlueGuard</h1>

      <a href="./beachReport">Home</a>
      <a href="./forms/login">Login</a>
    </main>
  );
}
