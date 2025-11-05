'use client';

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface ModalComunicadoProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ModalComunicado({ isOpen, onClose, title = "Comunicado Extraordinario" }: ModalComunicadoProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-opacity-60 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[98vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-green-700">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Cerrar modal">
            <X size={22} className="text-gray-600" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto">
          <ol className="list-decimal pl-5 space-y-3 text-gray-800 text-sm sm:text-base">
            <li>
              <strong>Cambio en el formato del torneo</strong> debido al incumplimiento por parte de dos equipos. La premiación seguirá siendo igual. Ahora se tendrá un grupo único de 6 equipos, cada equipo jugará 3 partidos en fase de grupos, los rivales se definen mediante sorteo aleatorio. los dos equipos que consigan la mayor cantidad de puntos serán primeros de la tabla general y pasarán a disputar la final.
            </li>
            <li>
              Se podrá inscribir hasta 6 jugadores adicionales a los 18 de la planilla oficial, esto escuchando la sugerencia de varios equipos.  Los jugadores extras deben ser inscritos antes del inicio de la segunda fecha <strong>(15 de noviembre)</strong>. El listado se recibirá en el WhatsApp oficial de la fundación.
            </li>
            <li>
              Los arqueros podrán ser parte de la regla de los jugadores de 35+ años.
            </li>
          </ol>
        </div>
        <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
          <button
            onClick={() => {
              const today = new Date().toISOString().slice(0, 10);
              try {
                localStorage.setItem('lpino_comunicado_suppress_date', today);
              } catch {}
              onClose();
            }}
            className="w-full sm:w-auto bg-green-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            No volver a mostrar hoy
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
