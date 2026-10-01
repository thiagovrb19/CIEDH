'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

export default function FloatingSocial() {
  return (
    <aside className="fixed bottom-6 right-6 z-40" aria-label="Redes Sociais CIEDH">
      <a
        href="https://www.instagram.com/leonardo.ciedh?stkn=b2RpMWZuN3BoZXRi"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        title="Siga @leonardo.ciedh no Instagram"
      >
        <Instagram className="w-7 h-7" />

        {/* Tooltip no Hover */}
        <span className="absolute right-16 bg-ciedh-blue-deep text-white text-xs font-heading font-semibold py-1.5 px-3 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Acompanhe no Instagram
        </span>
      </a>
    </aside>
  );
}
