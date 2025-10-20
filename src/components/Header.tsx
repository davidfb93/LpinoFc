"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import NavLink from "@components/NavLink";
import NavMultimedia from "@/components/NavServicios";

import { usePathname } from "next/navigation";

interface INavItem {
    label: string;
    href: string;
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const navItems: INavItem[] = [
        { label: ("Inicio"), href: "/home" },
        { label: ("Nosotros"), href: "/nosotros" },
        { label: ("Eventos"), href: "/eventos" },
    ];

    return (
        <>
            <header className="w-full h-16 min-h-16 max-h-16 px-4 sm:px-6 lg:px-12 flex items-center justify-between bg-gray-300 shadow-sm border-b border-gray-200">
                <Link href="/home">
                    <img
                        src="/logos-icons/logo2.png"
                        alt="Lpino Logo"
                        width={50}
                        height={50}
                        className="w-10 h-10 sm:w-10 sm:h-10"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 xl:gap-12 text-sm text-gray-500">
                    {navItems.slice(0, 2).map((item) => (
                        <NavLink key={item.href} item={item} pathname={pathname} />
                    ))}
                    <NavMultimedia pathname={pathname} />
                    {navItems.slice(2).map((item) => (
                        <NavLink key={item.href} item={item} pathname={pathname} />
                    ))}
                </nav>

                {/* Desktop Tienda Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/tienda"
                        className="bg-green-700 text-white font-bold px-6 xl:px-8 py-2 xl:py-3 rounded-full shadow-lg text-sm xl:text-base hover:bg-green-800 transition-colors"
                    >
                        Tienda
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-16 bg-white z-50 overflow-y-auto">
                    <nav className="flex flex-col p-6 space-y-6">
                        {navItems.slice(0, 2).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-medium transition-colors ${
                                    pathname === item.href || pathname.startsWith(item.href + "/")
                                        ? "text-black font-semibold"
                                        : "text-gray-500"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        
                        {/* Mobile Servicios Dropdown */}
                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-lg font-semibold text-gray-900 mb-3">Servicios</p>
                            <div className="pl-4 space-y-3">
                                <Link
                                    href="/servicios/amistosos"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-600 hover:text-green-700"
                                >
                                    Partidos amistosos
                                </Link>
                                <Link
                                    href="/servicios/torneos"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-600 hover:text-green-700"
                                >
                                    Organización de torneos
                                </Link>
                                <Link
                                    href="/servicios/encuentros"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-600 hover:text-green-700"
                                >
                                    Encuentros deportivos
                                </Link>
                                <Link
                                    href="/servicios/memorias"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-600 hover:text-green-700"
                                >
                                    Memorias
                                </Link>
                            </div>
                        </div>

                        {navItems.slice(2).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg font-medium transition-colors ${
                                    pathname === item.href || pathname.startsWith(item.href + "/")
                                        ? "text-black font-semibold"
                                        : "text-gray-500"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile Tienda Button */}
                        <Link
                            href="/tienda"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg text-center hover:bg-green-800 transition-colors"
                        >
                            Tienda
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}