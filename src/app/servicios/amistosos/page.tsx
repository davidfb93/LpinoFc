'use client';

import Contacto from '@/components/Contacto';
import Donaciones from '@/components/Donaciones';

export default function AmistososPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Partidos Amistosos
                    </h1>
                </div>

                {/* Contenido */}
                <div className="rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-4 sm:mb-6">
                        En <span className="font-bold text-green-700">LPINO FC</span> organizamos{' '}
                        <span className="font-bold text-green-700">partidos amistosos</span> para que puedas
                        disfrutar del fútbol en un ambiente recreativo y competitivo. Nuestros encuentros están
                        diseñados para fomentar la integración, el trabajo en equipo y la diversión.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">¿Qué ofrecemos?</h2>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Canchas de alta calidad en excelentes condiciones</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Árbitros profesionales para garantizar un juego limpio</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Equipamiento completo (balones, petos, conos)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Horarios flexibles adaptados a tus necesidades</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Ambiente familiar y seguro para todos los participantes</span>
                        </li>
                    </ul>

                    <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-l-4 border-green-700">
                        <p className="text-gray-700 text-base sm:text-lg">
                            <span className="font-bold text-green-700">¡Únete a nosotros!</span> Ya sea que tengas
                            tu propio equipo o quieras unirte a uno existente, en LPINO FC encontrarás el espacio
                            perfecto para practicar tu deporte favorito.
                        </p>
                    </div>
                </div>

                {/* Imagen */}
                <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="/images/amistosos.jpg"
                        alt="Partidos Amistosos"
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />
                </div>

                {/* Componente de Contacto */}
                <Contacto
                    titulo="¿Quieres organizar un partido amistoso?"
                    descripcion="Contáctanos y nos encargaremos de toda la logistica. Estamos aquí para hacer realidad tus eventos deportivos." />

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}
