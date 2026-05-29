
export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <i className="ri-whatsapp-line text-3xl"></i>
    </a>
  );
}
