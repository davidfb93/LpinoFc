'use client';

import Contacto from '@/components/Contacto';
import Donaciones from '@/components/Donaciones';

export default function TorneosPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Organización de Torneos
                    </h1>
                </div>

                {/* Contenido */}
                <div className="rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-4 sm:mb-6">
                        <span className="font-bold text-green-700">LPINO FC</span> se especializa en la{' '}
                        <span className="font-bold text-green-700">organización de torneos</span> de fútbol 
                        elites y aficionados. Nos encargamos de todos los detalles para que tú solo 
                        te preocupes por jugar y disfrutar.
                    </p>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Servicios incluidos:</h2>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Planificación completa del torneo (fixture, calendario, reglamento)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Gestión de inscripciones y equipos participantes</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Árbitros certificados y personal de apoyo</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Trofeos, medallas y reconocimientos para los ganadores</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Cobertura fotográfica y de video del evento</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span>Servicios médicos de emergencia durante los partidos</span>
                        </li>
                    </ul>

                    <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-l-4 border-green-700">
                        <p className="text-gray-700 text-base sm:text-lg">
                            <span className="font-bold text-green-700">Torneos a medida:</span> Organizamos 
                            torneos empresariales, barriales, juveniles y profesionales. Contáctanos para 
                            crear el torneo perfecto para tu comunidad.
                        </p>
                    </div>
                </div>

                {/* Imagen */}
                <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                        src="/images/torneos.jpg" 
                        alt="Organización de Torneos" 
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />
                </div>

                                <Contacto
                                    titulo="¿Quieres organizar un torneo?"
                                    descripcion="Contáctanos y nos encargaremos de toda la logistica del torneo. Estamos aquí para hacer realidad tus eventos deportivos." />

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}
