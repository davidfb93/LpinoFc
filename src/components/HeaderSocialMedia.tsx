"use client"

import Link from "next/link"

import { IconBrandFacebook, IconBrandInstagram, IconNews } from "@tabler/icons-react"

export default function HeaderSocialMedia() {
  return (
    <div className="w-full bg-gray-200" >
      <div className="w-full px-4 sm:px-6 lg:px-12 py-2 flex justify-end items-center space-x-2 sm:space-x-3">
        
        {/* Íconos de redes */}
        <div className="flex items-center space-x-1 sm:space-x-2">

          <a
            href="/articulos"
            rel="noopener noreferrer"
            aria-label="articulos"
            className="hover:opacity-80 transition"
          >
            <IconNews size={24} className="sm:w-8 sm:h-8" color="gray" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-80 transition"
          >
            <IconBrandFacebook size={24} className="sm:w-8 sm:h-8" color="gray" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition"
          >
            <IconBrandInstagram size={24} className="sm:w-8 sm:h-8" color="gray"/>
          </a>

        </div>

        {/* Botón de contacto */}
        <Link
          href="/contacto"
          className="bg-green-700 text-white font-bold px-4 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg ml-2 sm:ml-6 text-sm sm:text-base"
        >
          Contacto
        </Link>
      </div>
    </div>
  )
}
