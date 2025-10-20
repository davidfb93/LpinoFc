'use client';

import Contacto from '@/components/Contacto';
import Donaciones from '@/components/Donaciones';

export default function EncuentrosPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Encuentros Deportivos
                    </h1>
                </div>

                {/* Contenido */}
                <div className="rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-4 sm:mb-6">
                        Los <span className="font-bold text-green-700">encuentros deportivos</span> de{' '}
                        <span className="font-bold text-green-700">LPINO FC</span> son eventos especiales 
                        diseñados para reunir a la comunidad futbolística en jornadas de integración, 
                        convivencia y deporte.
                    </p>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">Tipos de encuentros:</h2>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Encuentros familiares:</strong> Eventos donde toda la familia puede participar</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Jornadas empresariales:</strong> Actividades de team building para empresas</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Clínicas deportivas:</strong> Sesiones de entrenamiento con profesionales</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Festivales de fútbol:</strong> Eventos masivos con múltiples actividades</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2">•</span>
                            <span><strong>Encuentros solidarios:</strong> Eventos benéficos y de recaudación</span>
                        </li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4 mt-6 sm:mt-8">Actividades incluidas:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <p className="text-gray-700 text-sm sm:text-base">🎯 Competencias y desafíos</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <p className="text-gray-700 text-sm sm:text-base">🎪 Zona de entretenimiento</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <p className="text-gray-700 text-sm sm:text-base">🍔 Área de comida y bebidas</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <p className="text-gray-700 text-sm sm:text-base">🎁 Sorteos y premios</p>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-l-4 border-green-700">
                        <p className="text-gray-700 text-base sm:text-lg">
                            <span className="font-bold text-green-700">¡Crea tu encuentro!</span> Diseñamos 
                            eventos personalizados según tus necesidades. Desde pequeñas reuniones hasta 
                            grandes festivales deportivos.
                        </p>
                    </div>
                </div>

                {/* Imagen */}
                <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                        src="/images/encuentros.jpg" 
                        alt="Encuentros Deportivos" 
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />
                </div>

                <Contacto
                    titulo="¿Quieres organizar un encuentro deportivo?"
                />

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}
