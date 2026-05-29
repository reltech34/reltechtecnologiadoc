import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useSEO } from '../../hooks/useSEO';

const Contato: React.FC = () => {
  useSEO();
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d8chag5s8n2s9ebn83q0', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', response.status, response.statusText);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h1 className="text-5xl font-bold text-gray-100 mb-4">
                Entre em <span className="text-green-400">Contato</span>
              </h1>
              <p className="text-gray-200 text-lg">
                Estamos prontos para atender você
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 scroll-animate-left">
                <div>
                  <h2 className="text-3xl font-bold text-gray-100 mb-6">Fale Conosco</h2>
                  <p className="text-gray-200 mb-8">
                    Nossa equipe está pronta para atender suas necessidades de segurança eletrônica. Entre em contato
                    conosco!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-semibold mb-1">Telefone</h3>
                      <p className="text-gray-300">(11) 97194-3263</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-semibold mb-1">E-mail</h3>
                      <p className="text-gray-300">comercial@rel-tech.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-semibold mb-1">Localização</h3>
                      <p className="text-gray-300">Guarulhos - SP</p>
                      <p className="text-gray-300">CEP: 07074-100</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-semibold mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-300">Seg - Sex: 8h às 18h</p>
                      <p className="text-gray-300">Sáb: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-green-500/10 scroll-animate-right">
                <h2 className="text-2xl font-bold text-gray-100 mb-6">Envie uma Mensagem</h2>

                <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form>
                  <div>
                    <label className="block text-gray-200 mb-2 font-medium">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-200 mb-2 font-medium">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-200 mb-2 font-medium">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-200 mb-2 font-medium">Assunto</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 mb-2 font-medium">Mensagem</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-green-500 focus:outline-none transition-colors resize-none"
                      placeholder="Descreva sua necessidade..."
                    />
                    <div className="text-right text-sm text-gray-300 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 text-black py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="text-green-400 text-center font-medium">
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-center font-medium">
                      Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contato;
