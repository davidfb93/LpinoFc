import React from "react";

// Interfaz para los datos de un equipo
export interface EquipoData {
    pos: number;
    equipo: string;
    pj: number;
    g: number;
    e: number;
    p: number;
    gf: number;
    gc: number;
    dg: number;
    pts: number;
    ta?: number; // Tarjetas amarillas (opcional)
    tr?: number; // Tarjetas rojas (opcional)
    ultimos: string[];
}

// Interfaz para el componente TablaPosiciones
interface TablaPosicionesProps {
    data: EquipoData[];
}

// Componente reutilizable para la tabla de posiciones
export default function TablaPosiciones({ data }: TablaPosicionesProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm bg-gray-300 text-black rounded-lg">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="text-left p-2 sm:p-3 text-gray-400">Equipo</th>
                        <th className="p-2 sm:p-3 text-gray-400">PJ</th>
                        <th className="p-2 sm:p-3 text-gray-400">G</th>
                        <th className="p-2 sm:p-3 text-gray-400">E</th>
                        <th className="p-2 sm:p-3 text-gray-400">P</th>
                        <th className="p-2 sm:p-3 text-gray-400">GF</th>
                        <th className="p-2 sm:p-3 text-gray-400">GC</th>
                        <th className="p-2 sm:p-3 text-gray-400">DG</th>
                        <th className="p-2 sm:p-3 text-gray-400">TA</th>
                        <th className="p-2 sm:p-3 text-gray-400">TR</th>
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
                            <td className="p-2 sm:p-3 text-center">
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 text-black font-bold text-xs rounded">
                                    {equipo.ta || 0}
                                </span>
                            </td>
                            <td className="p-2 sm:p-3 text-center">
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-600 text-white font-bold text-xs rounded">
                                    {equipo.tr || 0}
                                </span>
                            </td>
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
}
