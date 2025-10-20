
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { X } from 'lucide-react';
import { IconBrandWhatsapp } from "@tabler/icons-react"

import Link from 'next/link';

export default function Donaciones() {

    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDonarClick = () => {
        setIsModalOpen(true);
    };

    const handleWhatsAppClick = () => {
        // Redirige al chat de WhatsApp con el mensaje predefinido
        window.open("https://wa.me/61403976870?text=¡Hola!%20estoy%20interesado%20en%20donar%20algo%20a%20la%20fundación%20Lpino%20Fc%20.", "_blank");
    };
    return (
        <div className="mt-8 sm:mt-12 bg-green-100 rounded-2xl p-4 sm:p-6 md:p-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2">
                Hazte miembro de la comunidad, participa en nuestros eventos,
                adquiere nuestros productos o apóyanos con tus donaciones.
            </p>

            <div className="flex justify-center mb-4 sm:mb-6">
                <Link href="/home">
                    <img
                        src="/logos-icons/logo2.png"
                        alt="LPINO FC Logo"
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                </Link>
            </div>

            <button
                onClick={handleDonarClick}
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 sm:py-3 px-8 sm:px-12 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-lg cursor-pointer"
            >
                DONAR
            </button>

            {/* Modal de Donaciones */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white rounded-2xl max-w-4xl w-full p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                        >
                            <X size={24} className="sm:w-7 sm:h-7" />
                        </button>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-800 mb-4 sm:mb-6 md:mb-8 pr-8">Opciones de Donación</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {/* Sección 1: Donaciones en efectivo */}
                            <div className="flex flex-col items-center text-center p-4 sm:p-6 border-2 border-green-200 rounded-xl hover:border-green-400 transition-colors">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Donaciones en Efectivo</h3>
                                <div className="w-full max-w-sm">
                                    <img
                                        src="/images/qrlpino.jpg"
                                        alt="QR Donaciones en efectivo"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">Escanea el código QR desde la app de tu banco para donar a nuestro nequi</p>
                            </div>

                            {/* Sección 2: Donaciones en físico */}
                            <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 border-2 border-green-200 rounded-xl hover:border-green-400 transition-colors">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-4 sm:mb-6">Donaciones en Físico</h3>
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="flex flex-col items-center gap-3 sm:gap-4 hover:scale-105 transition-transform"
                                >
                                    <IconBrandWhatsapp
                                        size={80}
                                        className="sm:w-28 sm:h-28 md:w-32 md:h-32 text-green-600 hover:text-green-700 transition-colors"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-base sm:text-lg text-gray-700 font-semibold">Contáctanos por WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}