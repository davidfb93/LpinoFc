import { X } from "lucide-react";
import React from "react";
import Collage, { slidesGroupA, slidesGroupB } from "./Collage";

interface ModalTorneoProps {
    isOpen: boolean;
    onClose: () => void;
}

// Datos de ejemplo para la tabla de posiciones
const grupoAData = [
    { pos: 1, equipo: "Equipo1", pj: 3, g: 3, e: 0, p: 0, gf: 9, gc: 4, dg: 5, pts: 9, ultimos: ["✓", "✓", "✓"] },
    { pos: 2, equipo: "Equipo 2", pj: 3, g: 2, e: 1, p: 1, gf: 7, gc: 7, dg: 0, pts: 9, ultimos: ["✓", "-", "✗"] },
    { pos: 3, equipo: "Equipo 3", pj: 3, g: 2, e: 1, p: 1, gf: 9, gc: 8, dg: 1, pts: 8, ultimos: ["✗", "✓", "-"] },
    { pos: 4, equipo: "Equipo 4", pj: 3, g: 0, e: 1, p: 1, gf: 2, gc: 8, dg: -6, pts: 1, ultimos: ["✗", "✗", "-"] },
];

const grupoBData = [
    { pos: 1, equipo: "Equipo 1", pj: 6, g: 4, e: 2, p: 0, gf: 9, gc: 4, dg: 5, pts: 14, ultimos: ["✓", "-", "✓"] },
    { pos: 2, equipo: "Equipo 2", pj: 6, g: 2, e: 3, p: 1, gf: 7, gc: 7, dg: 0, pts: 9, ultimos: ["✓", "✓", "✗"] },
    { pos: 3, equipo: "Equipo 3", pj: 6, g: 2, e: 2, p: 2, gf: 9, gc: 8, dg: 1, pts: 8, ultimos: ["✗", "-", "✓"] },
    { pos: 4, equipo: "Equipo 4", pj: 6, g: 0, e: 1, p: 5, gf: 2, gc: 8, dg: -6, pts: 1, ultimos: ["✗", "✗", "✗"] },
];

export default function ModalTorneo({ isOpen, onClose }: ModalTorneoProps) {
    if (!isOpen) return null;

    const renderTabla = (data: typeof grupoAData) => (
        <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm bg-gray-600 text-white rounded-lg">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="text-left p-2 sm:p-3 text-gray-400">Club</th>
                        <th className="p-2 sm:p-3 text-gray-400">PJ</th>
                        <th className="p-2 sm:p-3 text-gray-400">G</th>
                        <th className="p-2 sm:p-3 text-gray-400">E</th>
                        <th className="p-2 sm:p-3 text-gray-400">P</th>
                        <th className="p-2 sm:p-3 text-gray-400">GF</th>
                        <th className="p-2 sm:p-3 text-gray-400">GC</th>
                        <th className="p-2 sm:p-3 text-gray-400">DG</th>
                        <th className="p-2 sm:p-3 text-gray-400 font-bold">Pts</th>
                        <th className="p-2 sm:p-3 text-gray-400">Partidos</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((equipo) => (
                        <tr key={equipo.pos} className="border-b border-gray-800 hover:bg-gray-600 transition">
                            <td className="p-2 sm:p-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400">{equipo.pos}</span>
                                    <span className="font-medium">{equipo.equipo}</span>
                                </div>
                            </td>
                            <td className="p-2 sm:p-3 text-center">{equipo.pj}</td>
                            <td className="p-2 sm:p-3 text-center">{equipo.g}</td>
                            <td className="p-2 sm:p-3 text-center">{equipo.e}</td>
                            <td className="p-2 sm:p-3 text-center">{equipo.p}</td>
                            <td className="p-2 sm:p-3 text-center">{equipo.gf}</td>
                            <td className="p-2 sm:p-3 text-center">{equipo.gc}</td>
                            <td className="p-2 sm:p-3 text-center">{equipo.dg}</td>
                            <td className="p-2 sm:p-3 text-center font-bold">{equipo.pts}</td>
                            <td className="p-2 sm:p-3">
                                <div className="flex gap-1 justify-center">
                                    {equipo.ultimos.map((resultado, idx) => (
                                        <span
                                            key={idx}
                                            className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                                resultado === "✓"
                                                    ? "bg-green-600"
                                                    : resultado === "✗"
                                                    ? "bg-red-600"
                                                    : resultado === "-"
                                                    ? "bg-gray-500"
                                                    : "bg-gray-600"
                                            }`}
                                        >
                                            {resultado}
                                        </span>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-opacity-50 p-6">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
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
                <div className="overflow-y-auto p-3 sm:p-6 space-y-6">
                    {/* Grupo A */}
                    <div className="space-y-4">
                        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-bold text-gray-800">Grupo A</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <Collage slides={slidesGroupA} />
                            </div>
                            <div>
                                {renderTabla(grupoAData)}
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
                                <Collage slides={slidesGroupB} />
                            </div>
                            <div>
                                {renderTabla(grupoBData)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
