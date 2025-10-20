export default function TiendaPage() {
    return (
        <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Imagen construcción */}
                <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="/images/construccion.png"
                        alt="LPINO FC Banner"
                        className="w-full h-auto object-cover"
                    />
                </div>

            </div>
        </div>
    );
}