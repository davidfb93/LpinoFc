'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import Donaciones from '@/components/Donaciones';
import OnboardingModal from '@/components/OnboardingModal';

export default function HomePage() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const animationIdRef = useRef<number | null>(null);

    // Auto-scroll effect
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollPosition = carousel.scrollLeft;
        const scrollSpeed = 1.1;

        const scroll = () => {
            if (!isAutoScrollPaused) {
                scrollPosition += scrollSpeed;

                // Efecto infinito: cuando llegamos a la mitad, reiniciamos
                if (scrollPosition >= carousel.scrollWidth / 2) {
                    scrollPosition = 0;
                    carousel.scrollLeft = 0;
                }

                carousel.scrollLeft = scrollPosition;
            }
            animationIdRef.current = requestAnimationFrame(scroll);
        };

        animationIdRef.current = requestAnimationFrame(scroll);

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [isAutoScrollPaused]);

    // Manejo del scroll infinito manual
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            if (isDragging) {
                const maxScroll = carousel.scrollWidth / 2;

                // Si llegamos al final, volvemos al inicio
                if (carousel.scrollLeft >= maxScroll) {
                    carousel.scrollLeft = 0;
                }
                // Si vamos hacia atrás y llegamos al inicio, vamos al final
                else if (carousel.scrollLeft <= 0) {
                    carousel.scrollLeft = maxScroll - carousel.clientWidth;
                }
            }
        };

        carousel.addEventListener('scroll', handleScroll);
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, [isDragging]);

    // Handlers para drag
    const handleMouseDown = (e: React.MouseEvent) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        setIsDragging(true);
        setIsAutoScrollPaused(true);
        setStartX(e.pageX - carousel.offsetLeft);
        setScrollLeft(carousel.scrollLeft);
        carousel.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.style.cursor = 'grab';
        }
        // Reanudar auto-scroll después de 2 segundos
        setTimeout(() => setIsAutoScrollPaused(false), 2000);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const carousel = carouselRef.current;
        if (!carousel) return;

        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Multiplicador para velocidad de scroll
        carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            const carousel = carouselRef.current;
            if (carousel) {
                carousel.style.cursor = 'grab';
            }
            setTimeout(() => setIsAutoScrollPaused(false), 2000);
        }
    };

    // Touch handlers para dispositivos móviles
    const handleTouchStart = (e: React.TouchEvent) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        setIsDragging(true);
        setIsAutoScrollPaused(true);
        setStartX(e.touches[0].pageX - carousel.offsetLeft);
        setScrollLeft(carousel.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const carousel = carouselRef.current;
        if (!carousel) return;

        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setTimeout(() => setIsAutoScrollPaused(false), 2000);
    };

    const carouselItems = [
        {
            title: 'Nosotros',
            image: '/images/wallpaper.jpg',
            alt: 'Nosotros - Jugadores celebrando',
            route: '/nosotros'
        },
        {
            title: 'Servicios',
            image: '/images/servicios.jpg',
            alt: 'Servicios - Entrenamiento',
            route: '/servicios'
        },
        {
            title: 'Eventos',
            image: '/images/eventos.jpeg',
            alt: 'Eventos - Equipo',
            route: '/eventos'
        },
        {
            title: 'Tienda',
            image: '/images/tienda.jpg',
            alt: 'Tienda - Logo LPINO FC',
            route: '/tienda'
        }
    ];

    const handleCardClick = (route: string) => {
        router.push(route);
    };



    return (
        <>
            {/* Componente Onboarding */}
            <OnboardingModal />
            <div className="w-full py-6 sm:py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    {/* Carrusel */}
                    <div className="relative overflow-hidden">
                        <div
                            ref={carouselRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                cursor: 'grab'
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Triplicamos los items para efecto infinito suave */}
                            {[...carouselItems, ...carouselItems, ...carouselItems].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-56 sm:w-64 md:w-72 relative group cursor-pointer"
                                    onClick={(e) => {
                                        // Solo navegar si no estamos arrastrando
                                        if (!isDragging) {
                                            handleCardClick(item.route);
                                        }
                                    }}
                                    onDragStart={(e) => e.preventDefault()}
                                >
                                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                            <span className="inline-block bg-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-semibold text-base sm:text-lg">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicadores */}
                    <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                        {carouselItems.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-600"
                            ></div>
                        ))}
                    </div>

                    {/* Componente donaciones */}
                    <Donaciones />

                </div>

                <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            </div>
        </>
    );
}