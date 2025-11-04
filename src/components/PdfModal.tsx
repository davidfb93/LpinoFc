'use client';

import { X, Download } from "lucide-react";
import { useEffect } from "react";

interface PdfModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    filePath?: string; // path relative to public, e.g. /archives/file.pdf
    showDownloads?: boolean;
}

export default function PdfModal({ isOpen, onClose, title = "Información del Torneo", filePath = "/archives/TORNEO_OCTAGONAL_FIN_DE_AÑO_LPINOFC.pdf", showDownloads = true }: PdfModalProps) {
    // Cerrar modal con tecla ESC
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

    const handleDownload = (fileName: string) => {
        const link = document.createElement('a');
        link.href = `/archives/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Cerrar modal"
                    >
                        <X size={24} className="text-gray-600" />
                    </button>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 overflow-auto p-4 sm:p-6">
                    <div className="w-full h-[500px] sm:h-[600px] border border-gray-300 rounded-lg overflow-hidden">
                        <iframe
                            src={filePath}
                            className="w-full h-full"
                            title="PDF del Torneo Octagonal"
                        />
                    </div>
                </div>

                {/* Footer con botones de descarga */}
                {showDownloads && (
                    <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                        <p className="text-sm sm:text-base text-gray-700 font-semibold mb-4 text-center">
                            Descargar documentos:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button
                                onClick={() => handleDownload('TORNEO_OCTAGONAL_FIN_DE_AÑO_LPINOFC.pdf')}
                                className="bg-green-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <Download size={20} />
                                <span className="text-sm sm:text-base">Información del Torneo</span>
                            </button>
                            <button
                                onClick={() => handleDownload('Planilla_torneo_fundacion_lpinoFC.pdf')}
                                className="bg-green-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <Download size={20} />
                                <span className="text-sm sm:text-base">Planilla de Inscripción</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
