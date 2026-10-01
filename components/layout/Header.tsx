'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-ciedh-gray-border/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 transition-opacity hover:opacity-90" title="CIEDH Início">
          <div className="relative h-12 w-36 sm:h-14 sm:w-44">
            <Image
              src="/images/logo-ciedh.png"
              alt="CIEDH - Centro Integrado de Educação e Desenvolvimento Humano"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        <div>
          <span className="inline-flex items-center gap-2 bg-ciedh-teal-light text-ciedh-teal-dark font-heading font-extrabold text-xs sm:text-sm px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-ciedh-teal/40 shadow-sm tracking-wide">
            <GraduationCap className="w-4 h-4 text-ciedh-teal-dark" />
            3 AULAS GRATUITAS
          </span>
        </div>
      </div>
    </header>
  );
}
