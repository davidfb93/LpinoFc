'use client';

import { useRouter } from 'next/navigation';
import Donaciones from '@/components/Donaciones';

export default function ServiciosPage() {
    const router = useRouter();

    const servicios = [
        {
            title: 'Partidos Amistosos',
            description: 'Organiza partidos amistosos con tu equipo en canchas de alta calidad. Ambiente recreativo y competitivo para todos los niveles.',
            image: '/images/amistosos.jpg',
            route: '/servicios/amistosos',
            icon: '⚽'
        },
        {
            title: 'Organización de Torneos',
            description: 'Planificación completa de torneos profesionales y recreativos. Nos encargamos de todos los detalles para que solo te preocupes por jugar.',
            image: '/images/torneos.jpg',
            route: '/servicios/torneos',
            icon: '🏆'
        },
        {
            title: 'Encuentros Deportivos',
            description: 'Eventos especiales de integración y convivencia. Jornadas familiares, empresariales y comunitarias con múltiples actividades.',
            image: '/images/encuentros.jpg',
            route: '/servicios/encuentros',
            icon: '🎯'
        },
        {
            title: 'Memorias',
            description: 'Captura los mejores momentos con fotografía profesional, videos y transmisiones en vivo. Revive cada jugada especial.',
            image: '/images/memorias.png',
            route: '/servicios/memorias',
            icon: '📸'
        }
    ];

    const handleServiceClick = (route: string) => {
        router.push(route);
    };

    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Nuestros Servicios
                    </h1>
                </div>

                {/* Descripción */}
                <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        En <span className="font-bold text-green-700">LPINO FC</span> ofrecemos una amplia gama de 
                        servicios deportivos diseñados para satisfacer las necesidades de nuestra comunidad. 
                        Desde partidos amistosos hasta la organización de grandes torneos.
                    </p>
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                    {servicios.map((servicio, index) => (
                        <div 
                            key={index}
                            onClick={() => handleServiceClick(servicio.route)}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Imagen */}
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img 
                                    src={servicio.image}
                                    alt={servicio.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl">{servicio.icon}</span>
                                        <h2 className="text-white text-2xl font-bold">{servicio.title}</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-4 sm:p-6">
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    {servicio.description}
                                </p>
                                <button 
                                    className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleServiceClick(servicio.route);
                                    }}
                                >
                                    Ver más detalles →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección de contacto */}
                <div className="bg-green-50 rounded-2xl p-4 sm:p-6 md:p-8 text-center mb-8 sm:mb-12 border-2 border-green-700">
                    <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">
                        ¿Necesitas un servicio personalizado?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                        Contáctanos y diseñaremos el servicio perfecto para tus necesidades. 
                        Estamos aquí para hacer realidad tus eventos deportivos.
                    </p>
                    <a 
                        href="/contacto"
                        className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-12 rounded-full text-lg transition-colors duration-300 shadow-lg"
                    >
                        Contactar ahora
                    </a>
                </div>

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}