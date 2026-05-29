import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center cursor-pointer">
              <img 
                src="https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/cf94df7094bc40a932c49b546eef5c89.png" 
                alt="Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                isActive('/') ? 'text-green-400' : ''
              }`}
            >
              Início
            </Link>
            <Link
              to="/servicos"
              className={`text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                isActive('/servicos') ? 'text-green-400' : ''
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/projetos"
              className={`text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                isActive('/projetos') ? 'text-green-400' : ''
              }`}
            >
              Projetos
            </Link>
            <Link
              to="/contato"
              className={`text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                isActive('/contato') ? 'text-green-400' : ''
              }`}
            >
              Contato
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 hover:text-green-400 transition-colors cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-green-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                  isActive('/') ? 'text-green-400' : ''
                }`}
              >
                Início
              </Link>
              <Link
                to="/servicos"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                  isActive('/servicos') ? 'text-green-400' : ''
                }`}
              >
                Serviços
              </Link>
              <Link
                to="/projetos"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                  isActive('/projetos') ? 'text-green-400' : ''
                }`}
              >
                Projetos
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-gray-200 hover:text-green-400 transition-colors font-medium cursor-pointer ${
                  isActive('/contato') ? 'text-green-400' : ''
                }`}
              >
                Contato
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
              >
                Orçamento
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}