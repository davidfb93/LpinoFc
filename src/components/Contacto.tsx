
type ContactoProps = {
  titulo?: string
  descripcion?: string
}

export default function Contacto({ titulo, descripcion }: ContactoProps) {
    return (
        <div className="bg-green-50 rounded-2xl p-4 sm:p-6 md:p-8 text-center mb-8 sm:mb-12 border-2 border-green-700">
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">
                {titulo || '¿Necesitas un servicio personalizado?'}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                {descripcion || 'Contáctanos y diseñaremos el servicio perfecto para tus necesidades. Estamos aquí para hacer realidad tus eventos deportivos.'}
            </p>
            <a
                href="/contacto"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-12 rounded-full text-lg transition-colors duration-300 shadow-lg"
            >
                Contactar ahora
            </a>
        </div>
    )
}
