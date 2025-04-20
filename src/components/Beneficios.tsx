import {
    TruckIcon,
    CreditCardIcon,
    PhoneIcon,
    ShieldCheckIcon,
  } from "@heroicons/react/24/outline";
  
  export default function Beneficios() {
    return (
      <div className="py-4 mt-6 mb-10 px-6 md:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
            ¿Por qué comprarnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <div className="bg-[#FBBF24] p-3 rounded-full shadow-md mb-4">
                <TruckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white">Envíos gratis</h3>
              <p className="mt-1 text-xs text-gray-200">Envíos rápidos y gratuitos en todo el país.</p>
            </div>
  
            <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <div className="bg-[#FBBF24] p-3 rounded-full shadow-md mb-4">
                <CreditCardIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white">Cuotas sin interés</h3>
              <p className="mt-1 text-xs text-gray-200">Compra y paga en cómodas cuotas sin intereses.</p>
            </div>
  
            <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <div className="bg-[#FBBF24] p-3 rounded-full shadow-md mb-4">
                <PhoneIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white">Garantía oficial</h3>
              <p className="mt-1 text-xs text-gray-200">Disfruta de nuestra garantía oficial.</p>
            </div>
  
            <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <div className="bg-[#FBBF24] p-3 rounded-full shadow-md mb-4">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white">Protección al comprador</h3>
              <p className="mt-1 text-xs text-gray-200">Compra de forma segura con nuestra protección.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  