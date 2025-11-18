'use client';

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface ModalComunicadoProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ModalComunicado({ isOpen, onClose, title = "Comunicado Extraordinario Fecha 2" }: ModalComunicadoProps) {
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
              Pago cancha + Arbitraje Fecha 3 (Domingo 22 Nov) por valor de <strong>$ 100,000</strong> debe realizarse a través de Nequi/Daviplata 310-7344350 a más tardar el día Jueves 20 Noviembre y enviar soporte al WhatsApp ‪+61 403976870‬.  ÚNICO MEDIO DE PAGO
            </li>
            <li>
              <strong>Jugadores amonestados en la segunda fecha</strong>
              <br />
              A todos los equipos participantes y en disputa de premiacion o pase a la final del torneo, recuerden que deben estar a paz y salvo con pago de tarjetas (amarillas y rojas). Independiente de que los jugadores amonestados no se hagan cargo el equipo pero se es responsable como institución ante el torneo .  Por tal motivo a continuación  se solicita el pago total de las amonestaciones por cada equipo. 
              <br />
              <br />
              Los siguientes jugadores y/o equipos deben realizar el pago de las tarjetas correspondientes a la segunda fecha, a más tardar Sábado 21 noviembre, de lo contrario, los jugadores a quienes se les mostró la tarjeta, no podrán jugar en la Fecha 3, so pena que si un jugador participa sin antes haber cancelado la tarjeta, el equipo pierde automáticamente los puntos en disputa.
              <br />
              <br />
              Los jugadores  con tarjeta roja, tienen 1 (una) fecha de suspensión; y podrán jugar una vez cancelada la misma, en la fecha correspondiente a la final, en caso de que su equipo llegue a esta.
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
              Polo Enríquez ⭐
              <br />
              Juan José Zorrila ⭐
              <br />
              <strong>Total a pagar Armenia Unid: $ 15,000</strong>
              <br />
              <br />
              <strong>Tarjetas  Cubillos FC</strong>
              <br />
              Camilo A. Piedrahita ⭐
              <br />
              Kevin A. Olarte ⭐
              <br />
              Jonathan Bedoya ⭐
              <br />
              Carlos Alzate 🚨
              <br />
              Edwin Estrada  🚨
              <br />
              <strong>Total a pagar Cubillos FC: $ 35,000</strong>
              <br />
              <br />
              <strong>Tarjetas  Lpino FC</strong>
              <br />
              Omar J. Carabali ⭐
              <br />
              Albeiro Rivera⭐
              <br />
              Juan Pablo Ramirez ⭐
              <br />
              <strong>Total a pagar Lpino FC: $ 15,000</strong>
              <br />
              <br />
              <strong>Tarjetas Trámites</strong>
              <br />
              Yeison Casallas ⭐
              <br />
              Juan David Trujillo ⭐
              <br />
              Brian A. García 🚨
              <br />
              Andrés D. Guzmán 🚨
              <br />
              <strong>Total a pagar Trámites: $ 30,000</strong>
              <br />
              <br />
              <strong>Tarjetas  Elite FC</strong>
              <br />
              Alexander castañeda ⭐
              <br />
              <strong>Total a pagar Elite FC: $ 5,000</strong>
              <br />
              <br />
              <strong>Tarjetas Estrato 0  </strong>
              <br />
              Yako Osorio 🚨
              <br />
              <strong>Total a pagar Estrato 0: $ 10,000</strong>
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
