"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface ModalCondolenciaProps {
  isOpen: boolean;
  onClose: () => void;
  jugadores: string;
  difunto: string;
  imagenUrl?: string;
  titulo?: string;
}

export default function ModalCondolencia({
  isOpen,
  onClose,
  jugadores,
  difunto,
  imagenUrl = "/images/condolencia.jpeg",
  titulo = "Mensaje de Condolencia",
}: ModalCondolenciaProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[98vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">{titulo}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={22} className="text-gray-600" />
          </button>
        </div>
        <div className="p-6 flex flex-col items-center overflow-y-auto gap-4">
          <img
            src={imagenUrl}
            alt="Condolencia"
            className="w-full max-w-2xl h-auto object-contain rounded-xl border mb-2 shadow"
          />
          <p className="text-gray-700 text-base text-left w-full">
            Fundación LPINO FC y comité organizador, junto al equipo Armenia United FC, expresan sus más sinceros sentimientos de condolencia por la pérdida familiar de los jugadores 
            <br />
            <span className="font-semibold">{jugadores}</span> y deseamos que su amado padre <span className="font-semibold">{difunto}</span> descanse en la gloria eterna de nuestro señor Jesús Cristo.
          </p>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end">
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
