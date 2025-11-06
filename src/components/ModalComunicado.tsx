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
              <strong>Cambio en el formato del torneo</strong>
              <br />
              Debido al retiro de 2 equipos por incumplimiento en  el proceso de inscripción, ahora se tendrá un grupo único de 6 equipos, cada equipo jugará 3 partidos en fase de grupos, los rivales se definieron mediante sorteo aleatorio. Los dos equipos que consigan la mayor cantidad de puntos en las 3 fechas, pasarán a disputar la final. <strong>El Valor de la premiacion NO se afecta</strong> y continua siendo la descrita por  organización <strong> Fundacion Deportiva Lpino FC</strong>
            </li>
            <li>
              <strong>Inscripción adicional de jugadores </strong>
              <br />
              Se podrá inscribir hasta 6 jugadores adicionales a los 18 de la planilla oficial, esto escuchando la sugerencia de varios equipos.  Los jugadores extras deben ser inscritos antes del inicio de la segunda fecha (15 de noviembre). El listado se recibirá en el WhatsApp oficial de la fundación <strong>+61 40397 6870</strong>
            </li>
            <li>
              <strong>Regla Jugadores 35 años</strong>
              <br />
              Los arqueros podrán ser parte de la regla de los jugadores de 35+ años.
            </li>
            <li>
              <strong>Pago Arbitraje + Cancha</strong>
              <br />
              El pago por valor de $100,000 x equipo correspondiente al arbitraje + Cancha, se podrá realizar a través del Nequi/Daviplata 310-734-4350  hasta el día sábado 08 Noviembre y/o pago en efectivo el día del partido (09 Noviembre) antes del inicio del mismo. Esto para la Fecha 1. Para las siguientes fechas, el pago será recibido únicamente a través del Nequi/Daviplata y debe ser consignado máximo el día Jueves antes de cada fecha.
            </li>
            <br />
            Dudas, sugerencias inquietudes y/o preguntas al email <strong>fundacion@lpinofc.org</strong> 
          </ol>
        </div>
        <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
          <button
            onClick={() => {
              const today = new Date().toISOString().slice(0, 10);
              try {
                localStorage.setItem('lpino_comunicado_suppress_date', today);
              } catch { }
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
