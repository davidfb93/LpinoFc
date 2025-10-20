'use client';

import Donaciones from '@/components/Donaciones';

export default function NosotrosPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Nosotros
                    </h1>
                </div>

                {/* Texto descriptivo */}
                <div className="rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                        <span className="font-bold text-green-700">Lpino FC</span> es una <span className="font-bold">fundación deportiva</span> que trabaja para 
                        transformar vidas a través del <span className="font-bold text-green-700">deporte</span>, en específico el{' '}
                        <span className="font-bold text-green-700">fútbol</span>. Un enfoque práctico y efectivo en ofrecer espacios 
                        donde hombres y mujeres de la <span className="font-bold text-green-700">fuerza laboral</span>, 
                        principalmente, y jóvenes en condiciones de <span className="font-bold text-green-700">vulnerabilidad</span>, 
                        tengan alternativas donde se puedan integrar, comunicar, 
                        hacer ejercicio, <span className="font-bold text-green-700">reducir los niveles de estrés</span>, generar 
                        amistad y jugar al fútbol.
                    </p>
                </div>

                {/* Imagen  nosotros*/}
                <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                        src="/images/nosotros.jpg" 
                        alt="LPINO FC Banner" 
                        className="w-full h-64 sm:h-96 md:h-120 object-cover"
                    />
                </div>

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}