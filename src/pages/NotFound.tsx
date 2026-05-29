import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useSEO();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mt-6">Página Não Encontrada</h2>
      <p className="mt-4 text-xl md:text-2xl text-gray-400">A página que você procura não existe.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 whitespace-nowrap cursor-pointer"
      >
        Voltar para Home
        <i className="ri-arrow-right-line ml-2"></i>
      </Link>
    </div>
  );
}