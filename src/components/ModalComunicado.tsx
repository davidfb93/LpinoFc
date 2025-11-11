'use client';

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface ModalComunicadoProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ModalComunicado({ isOpen, onClose, title = "Comunicado Extraordinario Fecha 1" }: ModalComunicadoProps) {
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
        <div className="p-5 overflow-y-auto text-left">
          <ol className="list-decimal list-inside pl-5 space-y-3 text-gray-800 text-sm sm:text-base">
            <li>
              <strong>Pago de cancha y arbitraje</strong>
              <br />
              Pago cancha + Arbitraje Fecha 2 (Domingo 16 Nov) por valor de <strong>$ 100,000</strong> debe realizarse a través de Nequi/Daviplata 310-7344350 a más tardar el día Jueves 13 Noviembre y enviar soporte al WhatsApp ‪+61 403976870‬.  ÚNICO MEDIO DE PAGO
            </li>
            <li>
              <strong>Jugadores amonestados en la primera fecha</strong>
              <br />
              Los siguientes jugadores y/o equipos deben realizar el pago de las tarjetas correspondientes a la primera fecha, a más tardar Sábado 15 noviembre, de lo contrario, los jugadores a quienes se les mostró la tarjeta, no podrán jugar en la Fecha 2, so pena que si un jugador participa sin antes haber cancelado la tarjeta, el equipo pierde automáticamente los puntos en disputa.
              <br />
              <br />
              Los jugadores  con tarjeta roja, tienen 1 (una) fecha de suspensión; y podrán jugar una vez cancelada la misma, en la fecha 3.
              <br />
              <br />
              <strong>💰Medios de pago</strong>
              <br />
              <br />
              Nequi/Daviplata 3107344350
              <br />
              <br />
              Enviar recibo 🧾 al WhatsApp ‪+61 403976870‬ con nombre del jugador. Si el pago es total por todos los jugadores, nombre del equipo.
              <br />
              <br />
              ⭐(Tarjeta amarilla) - <strong>$ 5,000</strong>
              <br />
              🚨(Tarjeta Roja) - <strong>$ 10,000</strong>
              <br />
              <br />

              <strong>Tarjetas Armenia Unid</strong>
              <br />
              Alexander Murillo ⭐
              <br />
              Daniel Arias O. ⭐
              <br />
              Jhon E. Sánchez⭐
              <br />
              Juan C. SantaMaría ⭐
              <br />
              <br />
              <strong>Tarjetas  Cubillos FC</strong>
              <br />
              Eduardo Y. Ortiz⭐
              <br />
              Árnol Gómez C 🚨
              <br />
              <br />
              <strong>Tarjetas  Lpino FC</strong>
              <br />
              Faber Tamayo ⭐
              <br />
              Alejandro Salgado⭐
              <br />
              Cristian Montoya ⭐
              <br />
              Jorge Mario Santa ⭐
              <br />
              David Díaz R. 🚨
              <br />
              <br />
              <strong>Tarjetas Trámites</strong>
              <br />
              William Muñoz ⭐
              <br />
              <br />
              <strong>Tarjetas  Elite FC</strong>
              <br />
              Carlos Francisco Ninco ⭐
              <br />
              Jorge Hincapié ⭐
              <br />
              Andrés D. Hincapié ⭐
              <br />
              <br />
              <strong>Tarjetas Estrato 0  </strong>
              <br />
              Jako Osorio ⭐
              <br />
              Germán D. Jaramillo ⭐
              <br />
              Michael S. Pinzón ⭐
              <br />
              <br />
            </li>
            <li>
              Dudas, sugerencias inquietudes y/o preguntas al email <strong>fundacion@lpinofc.org</strong>
            </li>
          </ol>
        </div>
        <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
          {/* <button
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
          </button> */}
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
