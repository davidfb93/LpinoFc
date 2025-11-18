'use client'

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { ShoppingCartIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  isSale?: boolean;
  sizes?: string[];
  images?: string[];
  soldOut?: boolean;
  soldOutSizes?: string[];
}

const products: Product[] = [
  {
    name: 'Buso Adidas 3 rayas Original',
    price: '99,000 COP',
    image: '/images/products/p1.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: true,
    images: ['/images/products/p1.jpg', '/images/products/p1.2.jpg'],
  },
  {
    name: 'Buso capucha Adidas 3 rayas Original Mujer',
    price: '99,000 COP',
    oldPrice: '120,000 COP',
    image: '/images/products/p2.jpg',
    isSale: true,
    soldOutSizes: ['M'],
    sizes: ['XS', 'S', 'M'],
    images: ['/images/products/p2.jpg', '/images/products/p2.2.jpg'],
  },
  {
    name: 'Buso capucha Adidas 3 rayas Original Mujer Azul Palido',
    price: '99,000 COP',
    image: '/images/products/p3.jpg',
    sizes: ['XS', 'S', 'M'],
    images: ['/images/products/p3.jpg', '/images/products/p3.2.jpg'],
  },
  {
    name: 'Adidas F50 Messi League',
    price: '400,000 COP',
    oldPrice: '450,000 COP',
    image: '/images/products/p4.jpg',
    isSale: true,
    soldOut: true,
    sizes: ['US 10'],
    images: ['/images/products/p4.jpg', '/images/products/p4.2.jpg', '/images/products/p4.3.jpg', '/images/products/p4.4.jpg'],
  },
  {
    name: 'Adidas F50 Messi Club',
    price: '300,000 COP',
    oldPrice: '400,000 COP',
    image: '/images/products/p5.jpg',
    isSale: true,
    soldOut: true,
    sizes: ['US 9.5'],
    images: ['/images/products/p5.jpg', '/images/products/p5.2.jpg', '/images/products/p5.3.jpg', '/images/products/p5.4.jpg'],
  },
  {
    name: 'Cinta kinesiologica caja x 3 Rollos tres colores',
    price: '30,000 COP',
    oldPrice: '60,000 COP',
    image: '/images/products/p6.jpg',
    isSale: true,
    soldOut: true,
    sizes: ['Unica'],
    images: ['/images/products/p6.jpg'],
  },
];

const DEFAULT_SIZES = ["S", "M", "L", "XL", "2XL"];

function ProductModal({ product, onClose, onBuy }: { product: Product; onClose: () => void; onBuy: () => void }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = product.sizes && product.sizes.length > 0
    ? product.sizes.filter(s => s && s.trim().length > 0)
    : DEFAULT_SIZES;
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];
  const [current, setCurrent] = useState(0);
  const soldOutSizes = product.soldOutSizes ?? [];
  const isProductSoldOut = !!product.soldOut;
  const isSelectedSizeSoldOut = selectedSize ? soldOutSizes.includes(selectedSize) : false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 sm:mx-6 overflow-hidden">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">×</button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-4 sm:p-6 flex flex-col items-center justify-center bg-gray-50 gap-4">
            <img src={gallery[current]} alt={product.name} className="w-56 h-56 sm:w-72 sm:h-72 object-contain rounded-xl" />
            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-full py-1">
              {gallery.map((src, idx) => (
                <button
                  key={src}
                  onClick={() => setCurrent(idx)}
                  className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg border transition overflow-hidden ${current === idx ? 'border-green-600 ring-2 ring-green-200' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <img src={src} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain bg-white" />
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-green-600 font-bold text-xl sm:text-2xl">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through">{product.oldPrice}</span>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Talla</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => {
                  const sizeSoldOut = soldOutSizes.includes(s) || isProductSoldOut;
                  const isActive = selectedSize === s;
                  const base = 'px-3 py-1 rounded-full text-sm border transition';
                  const active = 'bg-green-600 text-white border-green-600';
                  const normal = 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';
                  const disabled = 'bg-gray-100 text-gray-400 border-gray-200 line-through cursor-not-allowed';
                  return (
                    <button
                      key={s}
                      onClick={() => { if (!sizeSoldOut) setSelectedSize(s); }}
                      disabled={sizeSoldOut}
                      className={`${base} ${sizeSoldOut ? disabled : (isActive ? active : normal)}`}
                      title={sizeSoldOut ? 'Agotado' : 'Disponible'}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <button
                type="button"
                className={`mt-4 w-full inline-flex items-center justify-center gap-2 font-semibold py-3 rounded-xl shadow transition ${
                  (isProductSoldOut || !selectedSize || isSelectedSizeSoldOut)
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90'
                }`}
                disabled={isProductSoldOut || !selectedSize || isSelectedSizeSoldOut}
                onClick={() => {
                  if (!(isProductSoldOut || !selectedSize || isSelectedSizeSoldOut)) onBuy();
                }}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {isProductSoldOut ? 'Producto agotado' : isSelectedSizeSoldOut ? 'Talla agotada' : 'Comprar producto'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentInstructionsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 sm:mx-6 overflow-hidden">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">×</button>
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-center text-green-700 mb-4">Instructivo de pago</h2>
          <div className="w-full flex items-center justify-center mb-6">
            <img src="/images/qrlpino.jpg" alt="QR LPino" className="w-40 h-40 sm:w-56 sm:h-56 object-contain" />
          </div>
          <ol className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            <li>Escanea el código QR con tu aplicación Nequi o realiza la consignación al nequi/daviplata 3107344350</li>
            <li>Verifica que el destinatario sea JOSE FERNANDO VALENCIA y el valor a pagar sea correcto.</li>
            <li>Confirma el pago e incluye en la referencia tu nombre y producto y talla.</li>
            <li>Toma un pantallazo del comprobante y envíalo al WhatsApp aqui abajo para confirmar tu pedido.</li>
            <li>En unas horas el equipo de logistica se pondra en contacto contigo para confirmar tu pedido y la entrega del mismo.</li>
          </ol>

          <div className="flex items-center justify-center mt-6">
            <a href="https://wa.me/61403976870?text=¡Hola!%20Este%20es%20mi%20comprobante%20de%20compra." target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-2 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-green-800 transition-colors">
                <IconBrandWhatsapp size={22} className="sm:w-8 sm:h-8" color="white" />
                <span className="text-sm sm:text-base">Enviar comprobante de compra</span>
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false);
  const displaySizes = (product.sizes && product.sizes.length > 0
    ? product.sizes.filter(s => s && s.trim().length > 0)
    : DEFAULT_SIZES);
  const soldOut = !!product.soldOut;
  const soldOutSizes = product.soldOutSizes ?? [];

  return (
    <div
      className="group bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col justify-between items-center relative transition md:hover:scale-[1.03] md:hover:shadow-xl duration-150 w-full mx-auto"
      style={{ boxSizing: 'border-box' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {soldOut ? (
        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">Agotado</span>
      ) : (
        product.isSale && (
          <span className="absolute top-4 right-4 bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded">Oferta</span>
        )
      )}
      <div className="relative flex flex-col items-center justify-center w-full">
        <button
          onClick={() => { if (!soldOut) onOpen(product); }}
          disabled={soldOut}
          aria-disabled={soldOut}
          title={soldOut ? 'Producto agotado' : 'Ver producto'}
          className={`focus:outline-none ${soldOut ? 'cursor-not-allowed' : ''}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className={`${soldOut ? 'w-44 h-44 sm:w-60 sm:h-60 mt-4' : 'w-48 h-48 sm:w-64 sm:h-64'} object-contain mb-2 rounded-xl border border-white transition-all duration-700 ease-out cursor-pointer ${soldOut ? 'grayscale opacity-70' : ''}`}
            style={hovered ? { transform: 'scale(0.85)', opacity: soldOut ? 0.7 : 0.8 } : {}}
          />
        </button>
        <div className="w-full flex items-center justify-center h-10 mt-4 mb-2">
          <div className={`flex flex-wrap gap-2 justify-center transition-opacity duration-300 opacity-100 md:opacity-0 ${hovered ? 'md:opacity-100' : ''}`}>
            {displaySizes.map(size => {
              const sizeSoldOut = soldOut || soldOutSizes.includes(size);
              const classes = sizeSoldOut
                ? 'bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-sm font-semibold border border-gray-200 line-through shadow-sm'
                : 'bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold border border-gray-200 shadow-sm';
              return (
                <span key={size} className={classes} title={sizeSoldOut ? 'Agotado' : 'Disponible'}>
                  {size}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center w-full mt-2">
        <h3 className={`font-semibold text-base sm:text-lg mb-4 sm:min-h-[48px] transition-all duration-300 ease-out ${hovered ? 'underline text-green-800' : 'text-gray-900'}`}>{product.name}</h3>
        <div className="w-full border-t border-gray-200 pt-4">
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-lg sm:text-xl text-green-600">{product.price}</span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-base">{product.oldPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TiendaGrid() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product, idx) => (
          <ProductCard product={product} key={idx} onOpen={(p) => setSelected(p)} />
        ))}
      </div>
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onBuy={() => {
            setSelected(null);
            setShowPayment(true);
          }}
        />
      )}
      {showPayment && (
        <PaymentInstructionsModal onClose={() => setShowPayment(false)} />
      )}
    </>
  );
}

export default function TiendaPage() {
  return (
    <div className="w-full min-h-screen py-4 sm:py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-green-700">Tienda LPino FC</h1>
        <TiendaGrid />
      </div>
    </div>
  );
}