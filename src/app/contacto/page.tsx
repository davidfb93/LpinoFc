'use client';

import Donaciones from "@/components/Donaciones";
import { IconBrandWhatsapp } from "@tabler/icons-react"

export default function ContactoPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Título */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <h1 className="bg-green-700 text-white text-xl sm:text-2xl font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg">
                        Contacto
                    </h1>
                </div>

                {/* Texto descriptivo */}
                <div className="flex items-center justify-center rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-md w-full max-w-3xl mx-auto">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
                        <span className="font-bold">Emails</span>
                        <br />
                        fundacion@lpinofc.org
                        <br />
                        elpinocompany@gmail.com
                        <br />
                        <br />
                        <span className="font-bold">Website</span>
                        <br />
                        www.lpinofc.org
                        <br />
                        <br />
                        <span className="font-bold">Sede</span>
                        <br />
                        CRR 17 #32-07 Local 1 TIENDA LPINO
                        <br />
                        <br />
                        <span className="font-bold">Whatsapp</span>
                        <br />
                        +61 403976870
                        <br />
                        <br />
                        <a href="https://wa.me/61403976870?text=¡Hola!%20Estoy%20interesado%20en%20más%20información%20sobre%20la%20Fundación%20LPINO." target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-green-800 transition-colors">
                                <IconBrandWhatsapp size={24} className="sm:w-8 sm:h-8" color="white" />
                                <span className="text-sm sm:text-base">Contactar por WhatsApp</span>
                            </button>
                        </a>

                    </p>
                </div>

                {/* Componente de Donaciones */}
                <Donaciones />

            </div>
        </div>
    );
}