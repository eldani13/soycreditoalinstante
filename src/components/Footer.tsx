import { LinkIcon, GlobeAltIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white text-center py-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg mb-6">© 2025 Soy Crédito al Instante. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-8 w-8 text-white hover:text-[#FBBF24] transition-colors" />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <GlobeAltIcon className="h-8 w-8 text-white hover:text-[#FBBF24] transition-colors" />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <PhoneIcon className="h-8 w-8 text-white hover:text-[#FBBF24] transition-colors" />
          </a>
        </div>
        <p className="text-sm text-gray-300">Conéctate con nosotros en redes sociales</p>
      </div>
    </footer>
  );
}
