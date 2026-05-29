import React from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useSEO } from '../../hooks/useSEO';

const Servicos: React.FC = () => {
  useSEO();
  useScrollAnimation();

  const servicos = [
    {
      title: 'Instalação de Câmeras',
      image: 'https://readdy.ai/api/search-image?query=Professional%20security%20camera%20system%20installed%20on%20modern%20building%20exterior%20wall%2C%20multiple%20dome%20and%20bullet%20cameras%20visible%2C%20clean%20white%20wall%20background%2C%20generic%20surveillance%20equipment%20without%20brand%20logos%2C%20high%20quality%20product%20photography%20style%2C%20soft%20natural%20lighting%2C%20no%20visible%20text%20or%20branding&width=480&height=361&seq=cameras-generic-001&orientation=landscape'
    },
    {
      title: 'Instalação de Alarmes e Sensores',
      image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20alarm%20system%20with%20motion%20sensors%20and%20control%20panel%20mounted%20on%20clean%20white%20wall%2C%20wireless%20security%20devices%2C%20generic%20equipment%20without%20brand%20names%20or%20logos%2C%20professional%20product%20photography%2C%20neutral%20indoor%20setting%2C%20soft%20lighting%2C%20minimal%20background&width=480&height=360&seq=alarmes-generic-001&orientation=landscape'
    },
    {
      title: 'Instalação de Fechaduras',
      image: 'https://readdy.ai/api/search-image?query=Modern%20digital%20smart%20door%20lock%20on%20dark%20wooden%20door%2C%20electronic%20keypad%20and%20fingerprint%20scanner%20visible%2C%20generic%20electronic%20lock%20without%20brand%20logos%2C%20professional%20product%20photography%2C%20clean%20minimal%20background%2C%20warm%20lighting%2C%20premium%20finish&width=480&height=361&seq=fechaduras-generic-001&orientation=landscape'
    },
    {
      title: 'Cabeamento Estruturado',
      image: 'https://readdy.ai/api/search-image?query=Professional%20network%20cable%20management%20in%20server%20rack%2C%20organized%20ethernet%20cables%20in%20patch%20panel%2C%20clean%20structured%20cabling%20installation%2C%20generic%20IT%20infrastructure%20without%20brand%20logos%2C%20modern%20data%20center%20environment%2C%20professional%20photography&width=480&height=360&seq=cabeamento-generic-001&orientation=landscape'
    },
    {
      title: 'Interfonia Residencial',
      image: 'https://readdy.ai/api/search-image?query=Modern%20video%20intercom%20system%20on%20building%20wall%20with%20touchscreen%20display%20and%20camera%2C%20sleek%20residential%20access%20panel%2C%20generic%20intercom%20device%20without%20brand%20logos%2C%20clean%20white%20wall%20background%2C%20professional%20product%20photography%2C%20soft%20daylight&width=480&height=360&seq=interfonia-generic-001&orientation=landscape'
    },
    {
      title: 'Detecção de Incêndio',
      image: 'https://readdy.ai/api/search-image?query=Modern%20smoke%20detector%20and%20fire%20alarm%20sensor%20mounted%20on%20white%20ceiling%2C%20round%20fire%20detection%20device%20with%20LED%20indicator%2C%20generic%20fire%20safety%20equipment%20without%20brand%20names%2C%20clean%20office%20environment%2C%20professional%20product%20photography%2C%20soft%20neutral%20lighting&width=480&height=360&seq=incendio-generic-001&orientation=landscape'
    },
    {
      title: 'Controle de Acesso',
      image: 'https://readdy.ai/api/search-image?query=Modern%20access%20control%20turnstile%20gate%20at%20office%20entrance%20with%20card%20reader%20and%20LED%20indicators%2C%20sleek%20metallic%20design%2C%20generic%20biometric%20access%20system%20without%20brand%20logos%2C%20professional%20corporate%20lobby%20setting%2C%20clean%20minimal%20background%2C%20professional%20photography&width=480&height=360&seq=acesso-generic-001&orientation=landscape'
    },
    {
      title: 'Fornecimento de Software (Controle de Acesso)',
      image: 'https://readdy.ai/api/search-image?query=Modern%20security%20monitoring%20software%20dashboard%20displayed%20on%20large%20screen%2C%20multiple%20camera%20feeds%20and%20access%20control%20panels%20visible%2C%20dark%20themed%20interface%20with%20green%20accent%20colors%2C%20generic%20surveillance%20platform%20without%20brand%20logos%20or%20text%2C%20professional%20technology%20environment&width=480&height=360&seq=software-generic-001&orientation=landscape'
    },
    {
      title: 'Contrato de Manutenção',
      image: 'https://readdy.ai/api/search-image?query=Professional%20security%20technician%20working%20on%20security%20system%20installation%2C%20wearing%20uniform%20and%20using%20tools%2C%20modern%20office%20or%20residential%20setting%2C%20generic%20security%20equipment%20maintenance%20scene%20without%20brand%20logos%2C%20professional%20service%20photography%2C%20natural%20lighting&width=480&height=360&seq=contrato-generic-001&orientation=landscape'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-32 rounded-2xl overflow-hidden mb-12 scroll-animate">
              <img
                src="https://readdy.ai/api/search-image?query=Wide%20angle%20view%20of%20modern%20security%20operations%20center%20with%20multiple%20monitors%20displaying%20surveillance%20feeds%2C%20dark%20professional%20environment%20with%20ambient%20green%20lighting%2C%20technician%20workstation%2C%20generic%20technology%20setup%20without%20brand%20logos%20or%20text%2C%20cinematic%20atmosphere&width=1920&height=400&seq=hero-servicos-generic-001&orientation=landscape"
                alt="Serviços"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
                <div className="px-8">
                  <h1 className="text-5xl font-bold text-gray-100">Nossos Serviços</h1>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                      Revenda Intelbras e Hikvision
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicos.map((servico, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-green-500/10 hover:border-green-500/30 scroll-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-gray-100 font-bold text-lg text-center">
                        {servico.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center scroll-animate">
            <h2 className="text-3xl font-bold text-black mb-4">
              Pronto para Proteger o Que Importa?
            </h2>
            <p className="text-black/80 mb-8 text-lg">
              Entre em contato conosco e receba um orçamento personalizado
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Falar com Especialista
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Servicos;
