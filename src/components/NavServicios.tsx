"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavServicios(props: INavLegaciesProps) {
  const { pathname } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isServiciosActive = pathname.startsWith("/servicios");

  const serviciosItems = [
    { key: "amistosos", label: "Partidos amistosos", href: "/servicios/amistosos" },
    { key: "torneos", label: "Organización de torneos", href: "/servicios/torneos" },
    { key: "encuentros", label: "Encuentros deportivos", href: "/servicios/encuentros" },
    { key: "memorias", label: "Memorias", href: "/servicios/memorias" },
  ];

  // Cerrar al hacer click fuera
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`transition-colors duration-300 font-medium hover:text-gray-400 ${
          isServiciosActive ? "text-gray-900 font-semibold" : "text-neutral-500"
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Servicios
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-full mt-2 w-56 rounded-md border border-gray-200 bg-white shadow-lg z-50 py-1"
        >
          {serviciosItems.map((item) => (
            <li key={item.key}>
              <button
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setOpen(false);
                  router.push(item.href);
                }}
                role="menuitem"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}