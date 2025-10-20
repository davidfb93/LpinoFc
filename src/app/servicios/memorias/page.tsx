'use client';

import Collage from '@/components/Collage';
import Contacto from '@/components/Contacto';
import Donaciones from '@/components/Donaciones';

export default function MemoriasPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Memorias
                    </h1>
                </div>

                {/* Contenido */}
                <div className="rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-4 sm:mb-6">
                        En <span className="font-bold text-green-700">LPINO FC</span> creemos que cada momento 
                        en la cancha merece ser recordado. Nuestro servicio de{' '}
                        <span className="font-bold text-green-700">memorias deportivas</span> captura los mejores 
                        momentos de tus partidos, torneos y eventos.
                    </p>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Servicios de cobertura:</h2>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Fotografía profesional:</strong> Captura de los mejores momentos del juego</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Video highlights:</strong> Resúmenes editados de los partidos más importantes</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Transmisión en vivo:</strong> Streaming de tus eventos en tiempo real</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Álbumes digitales:</strong> Galerías online con todas las fotos del evento</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Videos conmemorativos:</strong> Producciones especiales para aniversarios</span>
                        </li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4 mt-6 sm:mt-8">Paquetes disponibles:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border-2 border-gray-200 hover:border-green-700 transition-colors">
                            <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">Básico</h3>
                            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Ideal para partidos amistosos</p>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>✓ 20 fotos editadas</li>
                                <li>✓ Álbum digital</li>
                                <li>✓ Entrega en 48 horas</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-2 border-green-700">
                            <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">Premium</h3>
                            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Para torneos importantes</p>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>✓ 50 fotos editadas</li>
                                <li>✓ Video highlights (5 min)</li>
                                <li>✓ Álbum digital + físico</li>
                                <li>✓ Entrega en 24 horas</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border-2 border-gray-200 hover:border-green-700 transition-colors">
                            <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">Completo</h3>
                            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Cobertura total del evento</p>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>✓ Fotos ilimitadas</li>
                                <li>✓ Video completo + highlights</li>
                                <li>✓ Transmisión en vivo</li>
                                <li>✓ Álbumes personalizados</li>
                                <li>✓ Entrega en 48 horas</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-l-4 border-green-700">
                        <p className="text-gray-700 text-base sm:text-lg">
                            <span className="font-bold text-green-700">¡Revive tus mejores jugadas!</span> Cada 
                            gol, cada atajada, cada celebración merece ser recordada. Contáctanos para conocer 
                            más sobre nuestros paquetes de cobertura.
                        </p>
                    </div>
                </div>

                {/* Componente collage */}
                <Collage />

                <Contacto
                    titulo="¿Quieres memorias para tus encuentros" />

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}
