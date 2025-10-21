'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingModal() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleGoToEventos = () => {
        setIsOpen(false);
        router.push('/eventos');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
                {/* Botón de cerrar */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
                    aria-label="Cerrar"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-gray-700" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </button>

                {/* Imagen del evento */}
                <div className="w-full flex justify-center items-center bg-gray-100">
                    <img 
                        src="/images/octagonal.jpg" 
                        alt="Evento Octagonal" 
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Contenido */}
                <div className="p-6 sm:p-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                        ¡Bienvenido a LPINO FC!
                    </h2>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                        Para conocer más sobre este y nuestros proximos eventos por favor da clic en el botón "Ir a Eventos"
                    </p>
                    
                    <button
                        onClick={handleGoToEventos}
                        className="bg-green-700 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Ir a Eventos
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
