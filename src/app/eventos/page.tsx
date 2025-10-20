'use client';

import Donaciones from "@/components/Donaciones";
import PdfModal from "@/components/PdfModal";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useState } from "react";


export default function EventosPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Eventos
                    </h1>
                </div>

                {/* Descripción */}
                <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed px-2">
                        En <span className="font-bold text-green-700">LPINO FC</span> ofrecemos una amplia gama de
                        servicios deportivos diseñados para satisfacer las necesidades de nuestra comunidad.
                        En esta sección podrás encontrar los eventos que ofrecemos actualmente.
                    </p>
                </div>

                {/* Texto descriptivo */}
                <div className="bg-green-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                        <span className="font-bold text-green-700 text-2xl">Torneo Octagonal Futbol 11</span>
                        <br />
                        <span className="font-bold text-green-700">Fundación deportiva Lpino FC</span>
                        <br />
                        <span className="font-bold text-green-700">Pro indumentaria deportiva</span>
                        <br />
                        <span className="font-bold">8 equipos participantes, compitiendo 4 fines de semana (domingos). Del 09 al 30 de Noviembre de 2025.</span>
                        <br />
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-8">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors w-full sm:w-auto"
                        >
                            Más información
                        </button>
                        <a href="https://wa.me/61403976870?text=¡Hola!%20Estoy%20interesado%20en%20inscribir%20mi%20equipo%20al%20octagonal%20de%20futbol%2011%20de%20fin%20de%20año." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="bg-green-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center space-x-2 w-full hover:bg-green-600 transition-colors">
                                <IconBrandWhatsapp size={24} className="sm:w-8 sm:h-8" color="white" />
                                <span className="text-sm sm:text-base">Inscribir equipo</span>
                            </button>
                        </a>
                    </div>

                    {/* Imagen */}
                    <div className="relative mb-6 sm:mb-8 mt-8 sm:mt-12 rounded-2xl overflow-hidden flex justify-center">
                        <img
                            src="/images/octagonal.jpg"
                            alt="LPINO FC Banner Octagonal"
                            className="w-full max-w-4xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-8">
                    <a href="https://wa.me/61403976870?text=¡Hola!%20Estoy%20interesado%20en%20apoyar%20este%20evento%20." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="bg-green-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center space-x-2 w-full hover:bg-green-600 transition-colors">
                                <IconBrandWhatsapp size={24} className="sm:w-8 sm:h-8" color="white" />
                                <span className="text-sm sm:text-base">Apoyar/patrocinar este evento</span>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Componente de Donaciones */}
                <Donaciones />
            </div>

            {/* Modal de PDF */}
            <PdfModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}