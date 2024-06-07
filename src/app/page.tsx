import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button, Image, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-between w-full">
        <header className="relative w-full mx-auto text-center mb-12" style={{ height: "400px" }}>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/blue-sea-waves.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold text-white">Junte-se ao BlueGuard</h1>
            <p className="mt-4 text-lg text-white p-1">
              Aplicação para Monitoramento de Praias e Observação de Vida Marinha
            </p>
            <div className="mt-4 flex items-center p-5">
              <Link href="/forms/cadastro"><Button color="primary" className="mr-2">Clique aqui</Button></Link>
              <p className="text-lg text-white">e crie a sua conta!</p>
            </div>
          </div>
        </header>

        <div className="flex flex-col sm:flex-row justify-between items-center m-16 w-2/3">
          <div className="ml-0 sm:ml-20 w-full sm:w-2/4 mb-6 sm:mb-0">
            <h2 className="text-3xl font-bold">Descrição Geral</h2>
            <p className="text-lg leading-relaxed flex-1 mr-4">
              BlueGuard é um aplicativo que permite aos usuários monitorar e reportar a condição das praias,
              bem como registrar observações de vida marinha. A plataforma incentivará a ciência cidadã, promovendo
              a participação ativa do público na conservação marinha.
            </p>
          </div>
          <div className="w-full sm:w-2/4">
            <Image src="/5568796.png" width={500} alt="mulher com celular" />
          </div>
        </div>

        <section className="w-full max-w-5xl mx-auto mb-12 p-4">
          <h2 className="text-3xl font-bold mb-6">Funcionalidades Principais</h2>
          <div className="text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold mb-4">1. Monitoramento de Praias</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Relatórios de Condição da Praia: Usuários podem enviar relatórios sobre a limpeza da praia, qualidade da água, presença de resíduos, e condições gerais.</li>
              <li>Mapas Interativos: Visualização de dados de monitoramento em mapas interativos, mostrando a condição atual das praias.</li>
              <li>Alertas e Notificações: Notificações sobre condições adversas ou emergências, como derramamentos de óleo ou alta concentração de resíduos.</li>
            </ul>

            <div className="flex justify-center">
              <Image className="mx-auto w-4/5 p-2" src="3428480.jpg" alt="coleta de lixo"></Image>
            </div>

            <h3 className="text-2xl font-semibold mt-4 mb-4">2. Observação de Vida Marinha</h3>
            <ul className="list-disc list-inside">
              <li>Registro de Observações: Usuários podem registrar avistamentos de vida marinha, incluindo fotos, localização e descrições.</li>
              <li>Identificação de Espécies: Utilização de IA para identificar espécies marinhas a partir das fotos enviadas pelos usuários.</li>
              <li>Contribuição para Pesquisa: Dados de observações são compartilhados com cientistas e pesquisadores para apoiar estudos sobre biodiversidade marinha.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Image className="mx-auto w-4/5 p-2" alt="vida marinha" src="2074a374db6903c30331cca64c128989.jpeg"></Image>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
