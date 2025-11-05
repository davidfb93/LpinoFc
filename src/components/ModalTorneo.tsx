 'use client';

import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link"
import Collage, { slidesGroupA } from "./Collage";
import TablaPosiciones, { EquipoData } from "./TablaPosiciones";
import PdfModal from "./PdfModal";
import ModalComunicado from "./ModalComunicado";

interface ModalTorneoProps {
    isOpen: boolean;
    onClose: () => void;
}

// Datos de ejemplo para la tabla de posiciones
// ["✓", "✗", "-"]
const grupoAData: EquipoData[] = [
    { pos: 1, equipo: "Lpino FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0, ta: 0, tr: 0, ultimos: ["", "", ""] },
    { pos: 2, equipo: "Armenia United", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0, ta: 0, tr: 0, ultimos: ["", "", ""] },
    { pos: 3, equipo: "Cubillos FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0, ta: 0, tr: 0, ultimos: ["", "", ""] },
    { pos: 4, equipo: "Tramites", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0, ta: 0, tr: 0, ultimos: ["", "", ""] },
    { pos: 5, equipo: "Estrato 0", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0, ta: 0, tr: 0, ultimos: ["", "", ""] },
    { pos: 6, equipo: "Elite FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0, ta: 0, tr: 0, ultimos: ["", "", ""] },
];

export default function ModalTorneo({ isOpen, onClose }: ModalTorneoProps) {
    const [isPdfOpen, setIsPdfOpen] = useState(false);
    const [isComunicadoOpen, setIsComunicadoOpen] = useState(false);
    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                // Solo cerrar el modal principal si el comunicado NO está abierto
                if (!isComunicadoOpen) {
                    onClose();
                }
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, isComunicadoOpen, onClose]);

    // Abrir el comunicado automáticamente cuando se abre este modal (si no fue suprimido hoy)
    useEffect(() => {
        if (isOpen) {
            try {
                const today = new Date().toISOString().slice(0, 10);
                const saved = localStorage.getItem('lpino_comunicado_suppress_date');
                setIsComunicadoOpen(saved === today ? false : true);
            } catch {
                setIsComunicadoOpen(true);
            }
        } else {
            setIsComunicadoOpen(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div
                className="w-full h-full flex flex-col overflow-hidden"
                style={{
                    backgroundImage: 'url(/images/wallpaper.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Header Modal */}
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-800">
                            Información del torneo
                        </h1>
                        <Link href="/home">
                            <img
                                src="/logos-icons/logo2.png"
                                alt="Lpino Logo"
                                width={50}
                                height={50}
                                className="w-10 h-10 sm:w-10 sm:h-10"
                            />
                        </Link>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Cerrar modal"
                    >
                        <X size={24} className="text-gray-600" />
                    </button>
                </div>

                {/* Contenido del Modal */}
                <div className="overflow-y-auto p-4 sm:p-8 space-y-8">
                    {/* Grupo A */}
                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-gray-300 rounded-lg p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-bold text-green-800">Tabla de posiciones, programación de partidos e información de equipos</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <Collage slides={slidesGroupA} compact />
                            </div>
                            <div>
                                <TablaPosiciones data={grupoAData} onRowClick={() => setIsPdfOpen(true)} />
                            </div>
                        </div>

                        {/* Fechas de Partidos - Grupo A */}
                        <div className="space-y-4">
                            {/* Fecha 1 */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-4 shadow-md">
                                <h4 className="text-sm sm:text-base font-bold text-green-900 mb-3 text-center">Fecha 1 - 09 de Noviembre</h4>
                                <div className="space-y-2">
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(10:00 AM)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Lpino FC</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Tramites</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(10:00 AM)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Armenia United</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Cubillos FC</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(04:00 PM)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Elite FC</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Estrato 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fecha 2 */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-4 shadow-md">
                                <h4 className="text-sm sm:text-base font-bold text-green-900 mb-3 text-center">Fecha 2 - 16 de Noviembre</h4>
                                <div className="space-y-2">
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(Horario por confirmar)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Lpino FC</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Armenia United</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(Horario por confirmar)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Elite FC</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Cubillos FC</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(Horario por confirmar)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Tramites</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Estrato 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Fecha 3 */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-4 shadow-md">
                                <h4 className="text-sm sm:text-base font-bold text-green-900 mb-3 text-center">Fecha 3 - 23 de Noviembre</h4>
                                <div className="space-y-2">
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(Horario por confirmar)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Elite FC</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Lpino FC</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(Horario por confirmar)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Armenia United</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Tramites</span>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-green-200 rounded-md p-3 flex flex-col items-center gap-2">
                                        <span className="text-[11px] text-gray-500">(Horario por confirmar)</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Cubillos FC</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-gray-400 font-bold">-</span>
                                            <span className="text-lg sm:text-xl font-bold text-green-600">0</span>
                                            <span className="text-sm sm:text-base font-medium text-gray-700">Estrato 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gran Final */}
                    <div className="space-y-1">
                        <div className="bg-gradient-to-r from-green-400 via-green-700 to-green-600 border-3 border-green-900 rounded-xl p-4 shadow-2xl">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center text-white drop-shadow-lg mb-2">
                                🏆 GRAN FINAL 🏆
                            </h3>
                            <p className="text-center text-yellow-100 font-semibold text-sm sm:text-base mb-4">
                                30 de Noviembre - (Horario por confirmar)
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-100 via-green-50 to-green-700 border-4 border-green-700 rounded-xl p-6 shadow-2xl">
                            <div className="bg-white border-2 border-green-300 rounded-lg p-4 sm:p-6 shadow-lg">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                    {/* Equipo 1 */}
                                    <div className="flex flex-col items-center flex-1">
                                        <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
                                            Primer puesto general
                                        </span>
                                        <div className="bg-green-200 border-3 border-green-600 rounded-lg p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-md">
                                            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-green-700">
                                                0
                                            </span>
                                        </div>
                                    </div>

                                    {/* VS */}
                                    <div className="flex items-center justify-center">
                                        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-600 drop-shadow-md">
                                            VS
                                        </span>
                                    </div>

                                    {/* Equipo 2 */}
                                    <div className="flex flex-col items-center flex-1">
                                        <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
                                            Segundo puesto general
                                        </span>
                                        <div className="bg-green-200 border-3 border-green-600 rounded-lg p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-md">
                                            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-green-700">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decoración adicional */}
                            <div className="mt-4 flex justify-center gap-2">
                                <span className="text-2xl">⚽</span>
                                <span className="text-2xl">🏆</span>
                                <span className="text-2xl">⚽</span>
                            </div>
                        </div>
                    </div>

                    {/* Premios del Torneo */}
                    <div className="flex flex-col items-center gap-6 w-full">
                        {/* Fila 1: Campeón y Subcampeón */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                            {/* Campeón */}
                            <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 border-3 border-yellow-600 rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🏆</div>
                                    <h4 className="text-lg sm:text-xl font-black text-white drop-shadow-lg mb-2">
                                        CAMPEÓN
                                    </h4>
                                    <div className="bg-white bg-opacity-90 rounded-lg p-3 mt-2">
                                        <p className="text-base sm:text-lg font-bold text-gray-800">
                                            Por Definir
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Subcampeón */}
                            <div className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 border-3 border-gray-600 rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🥈</div>
                                    <h4 className="text-lg sm:text-xl font-black text-white drop-shadow-lg mb-2">
                                        SUBCAMPEÓN
                                    </h4>
                                    <div className="bg-white bg-opacity-90 rounded-lg p-3 mt-2">
                                        <p className="text-base sm:text-lg font-bold text-gray-800">
                                            Por Definir
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fila 2: Goleador, Valla, Fair Play */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
                            {/* Goleador */}
                            <div className="bg-gradient-to-br from-green-700 via-green-500 to-green-600 border-2 border-green-500 rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">⚽</div>
                                    <h4 className="text-lg sm:text-xl font-black text-white drop-shadow-lg mb-2">
                                        GOLEADOR
                                    </h4>
                                    <div className="bg-white bg-opacity-90 rounded-lg p-3 mt-2">
                                        <p className="text-base sm:text-lg font-bold text-gray-800">
                                            Por Definir
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Valla Menos Vencida */}
                            <div className="bg-gradient-to-br from-green-700 via-green-500 to-green-600 border-2 border-green-500 rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🧤</div>
                                    <h4 className="text-lg sm:text-xl font-black text-white drop-shadow-lg mb-2">
                                        VALLA MENOS VENCIDA
                                    </h4>
                                    <div className="bg-white bg-opacity-90 rounded-lg p-3 mt-2">
                                        <p className="text-base sm:text-lg font-bold text-gray-800">
                                            Por Definir
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Fair Play */}
                            <div className="bg-gradient-to-br from-green-700 via-green-500 to-green-600 border-2 border-green-500 rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🤝</div>
                                    <h4 className="text-lg sm:text-xl font-black text-white drop-shadow-lg mb-2">
                                        FAIR PLAY
                                    </h4>
                                    <div className="bg-white bg-opacity-90 rounded-lg p-3 mt-2">
                                        <p className="text-base sm:text-lg font-bold text-gray-800">
                                            Por Definir
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComunicado
                isOpen={isComunicadoOpen}
                onClose={() => setIsComunicadoOpen(false)}
            />
            <PdfModal
                isOpen={isPdfOpen}
                onClose={() => setIsPdfOpen(false)}
                title="Planillas equipos participantes"
                filePath="/archives/TORNEO_OCTAGONAL_FIN_DE_AÑO_LPINOFC.pdf"
                showDownloads={false}
            />
        </div>
    );
}
