import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Company Info */}
          <div className="mb-8 scroll-animate col-span-1 md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/cf94df7094bc40a932c49b546eef5c89.png" 
              alt="Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 max-w-md">
              Especialistas em soluções de segurança eletrônica. Revenda oficial Intelbras e autorizada Hikvision. Protegemos o que mais importa para você.
            </p>
            <img 
              src="https://public.readdy.ai/ai/img_res/2001e3de-89e3-4c32-a1a8-371a67ae7038.png" 
              alt="Selo Intelbras Parceiro Autorizado" 
              className="h-24 w-auto object-contain mt-4"
            />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-gray-100 font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors text-sm cursor-pointer">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-green-400 transition-colors text-sm cursor-pointer">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-300 hover:text-green-400 transition-colors text-sm cursor-pointer">
                  Projetos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-gray-100 font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm">Câmeras de Segurança</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Sistemas de Alarme</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Fechaduras Digitais</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Controle de Acesso</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-gray-100 font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="ri-phone-line text-green-400"></i>
                <span className="text-gray-300 text-sm">(11) 97194-3263</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-mail-line text-green-400"></i>
                <span className="text-gray-300 text-sm">comercial@rel-tech.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-map-pin-line text-green-400"></i>
                <span className="text-gray-300 text-sm">Guarulhos - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2026 Rel-Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}