import React from 'react';
import { Link } from '@nextui-org/react';
import { Github, Instagram, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">BlueGuard</h2>
            <p className="text-sm">Aplicação para Monitoramento de Praias e Observação de Vida Marinha</p>
          </div>
          <div className="flex space-x-4">
            <Link href='https://github.com/IgorLuiz777'><Github></Github></Link>
            <Link><Instagram></Instagram></Link>
            <Link><Mail></Mail></Link>
            <Link><Twitter></Twitter></Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BlueGuard. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
