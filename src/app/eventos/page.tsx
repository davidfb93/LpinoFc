'use client';

import Donaciones from "@/components/Donaciones";
import Evento from "@/components/Evento";

export default function EventosPage() {

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

                {/* Componente de Eventos */}
                <Evento />

                {/* Componente de Donaciones */}
                <Donaciones />
            </div>
        </div>
    )
}