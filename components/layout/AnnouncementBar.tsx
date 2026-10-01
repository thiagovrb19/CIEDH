'use client';

import React from 'react';
import { Zap, Users } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-ciedh-blue-deep via-ciedh-blue to-ciedh-blue-dark text-white py-2.5 px-4 border-b border-ciedh-blue/30 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/25 transition-colors px-2.5 py-0.5 rounded-full font-bold text-xs tracking-wider uppercase backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 text-ciedh-teal animate-pulse" />
          Vagas Limitadas
        </span>
        <p className="font-medium text-white/95">
          Inscrições abertas para a nova imersão: <strong className="text-ciedh-teal-light font-bold">3 Aulas Gratuitas de Cuidados com o Idoso</strong>
        </p>
        <span className="hidden md:inline-flex items-center gap-1 text-xs text-white/80 bg-black/20 px-2 py-0.5 rounded-full">
          <Users className="w-3 h-3 text-ciedh-teal" /> +280 inscritos hoje
        </span>
      </div>
    </div>
  );
}
