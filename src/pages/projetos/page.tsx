import React, { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO } from '../../hooks/useSEO';

const Projetos: React.FC = () => {
  useSEO();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const projetos = [
    {
      title: 'J.E.A Indústria Metalúrgica Ltda',
      description: 'Implementação de sistema de controle de acesso biométrico com tecnologia de reconhecimento facial de alta precisão. Instalação de Caixa de Pedestal CAP3000 Intelbras integrada com 2 terminais de reconhecimento facial SS3531 MF Lite Intelbras, proporcionando segurança avançada e controle eficiente de entrada e saída de colaboradores. Sistema configurado para autenticação rápida e confiável, com registro de ponto eletrônico e gestão de acessos em tempo real.',
      modelo: 'Caixa de Pedestal CAP3000, Terminal Facial SS3531 MF Lite (2 unidades) | Marca: Intelbras',
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/6044580e5a4a077263adb62d69233151.jpeg',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/BPuUZCPLTto',
      additionalVideos: [
        {
          title: 'Portal Detector de Metais Hikvision',
          description: 'Instalação do Portal Detector de Metais Hikvision ISD-SMG1118L na JEA, reforçando o controle de acesso e a segurança patrimonial do ambiente industrial. O equipamento possui 18 zonas de detecção, sistema de alarme, conectividade em rede e tela LCD de 7", garantindo alta precisão, confiabilidade e tecnologia de ponta para a proteção de pessoas e patrimônios.',
          videoUrl: 'https://www.youtube.com/embed/SUB4sE8tiSA',
          modelo: 'Portal Detector de Metais ISD-SMG1118L | Marca: Hikvision'
        }
      ]
    },
    {
      title: 'Universidade de São Paulo - USP',
      description: 'Instalação de Fechadura de Embutir no Campus USP',
      modelo: 'Modelo: FD 3000 | Marca: Intelbras',
      image: 'https://static.wixstatic.com/media/a55d92_7022334a7f9a4da1a09233a613d8b815~mv2.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/a55d92_7022334a7f9a4da1a09233a613d8b815~mv2.jpg'
    },
    {
      title: 'Reset Madeira Ecológica',
      description: 'Instalação de Porteiro Empresarial com Botoeira de Acionamento',
      modelo: 'Modelo: IPR 1010 | Marca: Intelbras',
      image: 'https://static.wixstatic.com/media/a55d92_cecd1ecf879d43aeb2f3716d660d4b87~mv2.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/5.jpg'
    },
    {
      title: 'Escolas Municipais de São Paulo',
      description: 'Projeto CFTV escolas municipais de São Paulo',
      modelo: 'Modelo: Varifocal IDS-2CD7A46G0-P-IZHS | Marca: Hikvision',
      image: 'https://static.wixstatic.com/media/a55d92_165b5d1167034849957a5afa547a9efb~mv2.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/Segundou%20Mosaico%20Mood%20Board%20Story%20Minimalista%20%20(1).jpg'
    },
    {
      title: 'Condomínio Pleno Santa Cruz',
      description: 'Instalação de Roteadores Empresariais nas dependências do Condomínio',
      modelo: 'Modelo: AP 360 | Marca: Intelbras',
      image: 'https://static.wixstatic.com/media/a55d92_08ce4d790cf34fe59a0268c00b764d87~mv2.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/7.jpg'
    },
    {
      title: 'Ritmo Visual Filmes',
      description: 'Instalação de Kit CFTV de 04 câmeras com porteiro e fechadura',
      modelo: 'Modelo: IFR 7001; IPR 1010 | Marca: Intelbras',
      image: 'https://static.wixstatic.com/media/a55d92_2f391aec9bf247ba8853e5a643f03b6d~mv2.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/4.jpg'
    },
    {
      title: 'Babae Gelato',
      description: 'Instalação CFTV, alarme e som ambiente na Gelateria',
      modelo: 'Modelo: Bullet e Dome | Marca: Intelbras',
      image: 'https://static.wixstatic.com/media/a55d92_f2394993da724c3f9850a78c97645878~mv2.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/6.jpg'
    },
    {
      title: 'Cliente Rel-Tech (Isabela)',
      description: 'Instalação de Automatizador de Portão em residência',
      modelo: 'Modelo: DR 400 | Marca: Intelbras',
      image: 'https://static.wixstatic.com/media/a55d92_9aaac7453c0b4948bfa733d51f396c8bf000.jpg/v1/fill/w_400,h_700,al_c,q_80,enc_avif,quality_auto/a55d92_9aaac7453c0b4948bfa733d51f396c8bf000.jpg'
    },
    {
      title: 'Edifício Kalon',
      description: 'Instalação de sistema de CFTV IP com câmeras Intelbras VIP 3230 B, VIP 3430 B e Speed Dome VIP 5230 SD PTZ, garantindo monitoramento de alta resolução em áreas internas e externas. Infraestrutura composta por cabeamento CAT6, eletrodutos galvanizados e caixas vedadas. Implementação de leitor de acesso Intelbras XPE 1001 FIT integrado ao elevador, com autenticação por credencial RFID.',
      modelo: 'Câmeras VIP 3230 B, VIP 3430 B, Speed Dome VIP 5230 SD PTZ, Leitor XPE 1001 FIT | Marca: Intelbras',
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/4bed2f2bf635b569950086954e890c6b.jpeg',
      hasMultiplePhotos: true,
      gallery: [
        'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/4bed2f2bf635b569950086954e890c6b.jpeg',
        'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/fced0413bbd74e560322e5dd39db1985.jpeg',
        'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/9f084d22b0f12500e41a871e653de4de.jpeg',
        'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/cd48265f0e5354cdd3a20756a233ca2d.jpeg',
        'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/19f45cb2a6fcb84f2351c3c6941d5945.jpeg',
        'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/b3fa239170da370f7f57b9771fffd293.jpeg'
      ]
    }
  ];

  const openModal = (projeto: any) => {
    console.log('Abrindo modal do projeto:', projeto.title);
    setSelectedProject(projeto);
  };

  const closeModal = () => {
    console.log('Fechando modal do projeto');
    setSelectedProject(null);
  };

  const openImageModal = (imageUrl: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    console.log('Abrindo modal da imagem:', imageUrl);
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    console.log('Fechando modal da imagem');
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-32 rounded-2xl overflow-hidden mb-12 scroll-animate">
              <img
                src="https://readdy.ai/api/search-image?query=Close-up%20of%20professional%20security%20surveillance%20camera%20mounted%20on%20modern%20building%20ceiling%2C%20dark%20metallic%20dome%20camera%20with%20visible%20lens%20and%20LED%20indicators%2C%20green%20ambient%20light%20reflections%2C%20dark%20moody%20atmosphere%20with%20dramatic%20lighting%2C%20abstract%20security%20technology%20background%2C%20cinematic%20tech%20aesthetic%2C%20no%20text%2C%20no%20logos%2C%20no%20branding%2C%20shallow%20depth%20of%20field%2C%20photorealistic%20high%20detail%2C%20dark%20background%20with%20green%20accent%20lights&width=1920&height=300&seq=projetos-hero-banner-001&orientation=landscape"
                alt="Projetos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
                <div className="px-8">
                  <h1 className="text-5xl font-bold text-gray-100">Projetos Realizados</h1>
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

        {/* Vídeo em Destaque - Portal Detector de Metais Hikvision */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-green-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative w-full" style={{ minHeight: '400px' }}>
                  <iframe
                    src="https://www.youtube.com/embed/SUB4sE8tiSA"
                    title="Portal Detector de Metais Hikvision - J.E.A Indústria"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold border border-red-500/30">
                      Vídeo em Destaque
                    </span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                      Hikvision
                    </span>
                  </div>
                  <h2 className="text-gray-100 font-bold text-2xl lg:text-3xl mb-4">
                    Portal Detector de Metais Hikvision
                  </h2>
                  <p className="text-gray-200 text-base leading-relaxed mb-6">
                    Confira a instalação do Portal Detector de Metais Hikvision ISD-SMG1118L
                    na <strong className="text-gray-100">J.E.A Indústria Metalúrgica Ltda</strong>.
                    Equipamento de alta tecnologia com 18 zonas de detecção precisa, alarme visual e sonoro,
                    tela LCD de 7 polegadas e conectividade em rede. Ideal para ambientes industriais,
                    aeroportos e locais que exigem controle rigoroso de acesso e segurança patrimonial.
                  </p>
                  <div className="text-gray-300 text-sm mb-6">
                    <strong>Equipamento:</strong> Portal Detector de Metais ISD-SMG1118L | Marca: Hikvision
                  </div>
                  <div 
                    className="inline-flex items-center gap-2 text-green-500 font-semibold hover:text-green-400 transition-colors cursor-pointer"
                    onClick={() => openModal(projetos[0])}
                  >
                    <span>Ver projeto completo</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projetos.map((projeto, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-green-500/10 hover:border-green-500/30 scroll-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(projeto)}
                >
                  <div className="md:flex md:items-stretch">
                    <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={projeto.image}
                        alt={projeto.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {projeto.hasMultiplePhotos && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-gray-100 px-2 py-1 rounded text-xs">
                          +{projeto.gallery ? projeto.gallery.length : 6} fotos
                        </div>
                      )}
                      {projeto.hasVideo && (
                        <div className="absolute top-2 right-2 bg-green-500 text-black px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                          <i className="ri-video-line"></i>
                          {projeto.additionalVideos ? `${projeto.additionalVideos.length + 1} Vídeos` : 'Vídeo'}
                        </div>
                      )}
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-gray-100 font-bold text-xl mb-3">
                        {projeto.title}
                      </h3>
                      <p className="text-gray-200 mb-3 text-sm">
                        {projeto.description}
                      </p>
                      <div className="text-sm text-gray-300">
                        {projeto.modelo}
                      </div>
                      <div className="mt-4 text-green-500 text-sm font-semibold hover:text-green-400 transition-colors whitespace-nowrap">
                        Ver detalhes
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 scroll-animate">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-black mb-2">+100</div>
                  <div className="text-black/80 font-medium">Projetos Realizados</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-black mb-2">+100</div>
                  <div className="text-black/80 font-medium">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-black mb-2">+5</div>
                  <div className="text-black/80 font-medium">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-black mb-2">100%</div>
                  <div className="text-black/80 font-medium">Compromisso</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-100 hover:text-gray-300 z-10 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="p-6">
                  {selectedProject.hasVideo && (
                    <div className="mb-6">
                      <h3 className="text-gray-100 font-bold text-xl mb-4 flex items-center gap-2">
                        <i className="ri-video-line text-green-500"></i>
                        Vídeo da Instalação - Sistema Biométrico
                      </h3>
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={selectedProject.videoUrl}
                          title={`Vídeo - ${selectedProject.title}`}
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {selectedProject.additionalVideos && selectedProject.additionalVideos.map((video: any, index: number) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-gray-100 font-bold text-xl mb-2 flex items-center gap-2">
                        <i className="ri-video-line text-green-500"></i>
                        {video.title}
                      </h3>
                      <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                        {video.description}
                      </p>
                      <div className="text-gray-300 mb-4 text-sm">
                        <strong>Equipamento:</strong> {video.modelo}
                      </div>
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={video.videoUrl}
                          title={video.title}
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mb-6">
                    <h3 className="text-gray-100 font-bold text-xl mb-4 flex items-center gap-2">
                      <i className="ri-image-line text-green-500"></i>
                      Foto do Projeto
                    </h3>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto rounded-lg object-contain max-h-96 cursor-pointer"
                      onClick={(e) => openImageModal(selectedProject.image, e)}
                    />
                  </div>

                  <h2 className="text-gray-100 font-bold text-2xl mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-200 mb-4 text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="text-gray-300 mb-4">
                    <strong>Equipamentos:</strong> {selectedProject.modelo}
                  </div>
                  {selectedProject.hasMultiplePhotos && (
                    <div className="text-green-500 text-sm">
                      Este projeto possui múltiplas fotos documentando todo o processo de instalação. Clique nas fotos para ampliar.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Full Size Image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60] p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-[95vw] max-h-[95vh]">
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-gray-100 hover:text-gray-300 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center z-10 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="max-w-full max-h-full object-contain rounded-lg cursor-pointer"
                onClick={closeImageModal}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-gray-100 px-4 py-2 rounded-lg text-sm">
                Clique na imagem ou no X para fechar
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Projetos;