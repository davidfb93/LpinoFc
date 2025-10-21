import { X } from "lucide-react";
import React, { useEffect } from "react";
import Collage, { slidesGroupA, slidesGroupB } from "./Collage";
import TablaPosiciones, { EquipoData } from "./TablaPosiciones";

interface ModalTorneoProps {
    isOpen: boolean;
    onClose: () => void;
}

// Datos de ejemplo para la tabla de posiciones
const grupoAData: EquipoData[] = [
    { pos: 1, equipo: "Equipo1", pj: 3, g: 3, e: 0, p: 0, gf: 9, gc: 4, dg: 5, pts: 9, ta: 2, tr: 0, ultimos: ["✓", "✓", "✓"] },
    { pos: 2, equipo: "Equipo 2", pj: 3, g: 2, e: 1, p: 1, gf: 4, gc: 7, dg: 0, pts: 9, ta: 3, tr: 1, ultimos: ["✓", "-", "✗"] },
    { pos: 3, equipo: "Equipo 3", pj: 3, g: 2, e: 1, p: 1, gf: 4, gc: 8, dg: 1, pts: 8, ta: 4, tr: 0, ultimos: ["✗", "✓", "-"] },
    { pos: 4, equipo: "Equipo 4", pj: 3, g: 0, e: 1, p: 1, gf: 0, gc: 8, dg: -6, pts: 1, ta: 5, tr: 2, ultimos: ["✗", "✗", "-"] },
];

const grupoBData: EquipoData[] = [
    { pos: 1, equipo: "Equipo 1", pj: 6, g: 4, e: 2, p: 0, gf: 9, gc: 4, dg: 5, pts: 14, ta: 3, tr: 0, ultimos: ["✓", "-", "✓"] },
    { pos: 2, equipo: "Equipo 2", pj: 6, g: 2, e: 3, p: 1, gf: 7, gc: 7, dg: 0, pts: 9, ta: 4, tr: 1, ultimos: ["✓", "✓", "✗"] },
    { pos: 3, equipo: "Equipo 3", pj: 6, g: 2, e: 2, p: 2, gf: 9, gc: 8, dg: 1, pts: 8, ta: 2, tr: 0, ultimos: ["✗", "-", "✓"] },
    { pos: 4, equipo: "Equipo 4", pj: 6, g: 0, e: 1, p: 5, gf: 2, gc: 8, dg: -6, pts: 1, ta: 6, tr: 2, ultimos: ["✗", "✗", "✗"] },
];

export default function ModalTorneo({ isOpen, onClose }: ModalTorneoProps) {
    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full h-full flex flex-col overflow-hidden">
                {/* Header Modal */}
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        Información del torneo
                    </h2>
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
                        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-bold text-gray-800">Grupo A</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <Collage slides={slidesGroupA} compact />
                            </div>
                            <div>
                                <TablaPosiciones data={grupoAData} />
                            </div>
                        </div>
                    </div>

                    {/* Grupo B */}
                    <div className="space-y-4">
                        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-bold text-gray-800">Grupo B</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <Collage slides={slidesGroupB} compact />
                            </div>
                            <div>
                                <TablaPosiciones data={grupoBData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
