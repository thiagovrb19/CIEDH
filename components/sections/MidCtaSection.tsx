'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MidCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-ciedh-blue-deep via-ciedh-blue to-ciedh-blue-dark text-white relative overflow-hidden">
      {/* Elementos decorativos de luz */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-ciedh-teal/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white font-heading font-extrabold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-ciedh-teal-light" />
          OPORTUNIDADE EXCLUSIVA
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
          Seu primeiro passo pode começar aqui.
        </h2>

        <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Participe gratuitamente das 3 aulas sobre <strong>Cuidados com o Idoso</strong> e descubra como agir com segurança, técnica e acolhimento humano.
        </p>

        <div className="flex flex-col items-center">
          <a
            href="#formulario"
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-ciedh-blue-deep font-heading font-extrabold text-lg py-5 px-10 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>QUERO PARTICIPAR DAS AULAS GRATUITAS</span>
            <ArrowRight className="w-5 h-5 text-ciedh-blue group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-xs sm:text-sm text-ciedh-blue-light/80">
            Preencha seus dados em menos de 1 minuto e receba as informações para participar.
          </p>
        </div>
      </div>
    </section>
  );
}
