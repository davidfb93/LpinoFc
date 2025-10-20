// components/Collage.tsx
'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const slides = [
  {
    src: '/images/memories/1.jpg',
    alt: 'Foto 1',
    title: 'Foto 1',
  },
  {
    src: '/images/memories/2.jpg',
    alt: 'Foto 2',
    title: 'Foto 2',
  },
  {
    src: '/images/memories/3.jpg',
    alt: 'Foto 3',
    title: 'Foto 3',
  },
  {
    src: '/images/memories/4.jpg',
    alt: 'Foto 4',
    title: 'Foto 4',
  },
  {
    src: '/images/memories/5.jpg',
    alt: 'Foto 5',
    title: 'Foto 5',
  },
  {
    src: '/images/memories/6.jpg',
    alt: 'Foto 6',
    title: 'Foto 6',
  },
  {
    src: '/images/memories/7.jpg',
    alt: 'Foto 7',
    title: 'Foto 7',
  },
  {
    src: '/images/memories/8.jpg',
    alt: 'Foto 8',
    title: 'Foto 8',
  },
  {
    src: '/images/memories/9.jpg',
    alt: 'Foto 9',
    title: 'Foto 9',
  },
  {
    src: '/images/memories/10.jpg',
    alt: 'Foto 10',
    title: 'Foto 10',
  },
  {
    src: '/images/memories/11.jpg',
    alt: 'Foto 11',
    title: 'Foto 11',
  },
  {
    src: '/images/memories/12.jpg',
    alt: 'Foto 12',
    title: 'Foto 12',
  },
  {
    src: '/images/memories/13.jpg',
    alt: 'Foto 13',
    title: 'Foto 13',
  },
  {
    src: '/images/memories/14.jpg',
    alt: 'Foto 14',
    title: 'Foto 14',
  },
  {
    src: '/images/memories/15.jpg',
    alt: 'Foto 15',
    title: 'Foto 15',
  },
];

export default function Collage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
        {slides.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            className="rounded-lg cursor-pointer object-cover w-full h-40 sm:h-48 md:h-56 hover:opacity-90 transition"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Thumbnails, Captions]}
          captions={{ descriptionTextAlign: 'center' }}
        />
      )}
    </>
  );
}
