'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export default function FinalBannerSection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-ciedh-blue via-ciedh-blue-dark to-ciedh-blue-deep text-white relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logo em destaque circular */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 bg-white rounded-full p-4 shadow-2xl flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/logo-ciedh.png"
              alt="Logo CIEDH Oficial"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <span className="inline-block text-ciedh-teal-light font-heading font-extrabold text-xs tracking-widest uppercase mb-4">
          CENTRO INTEGRADO DE EDUCAÇÃO E DESENVOLVIMENTO HUMANO
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
          3 aulas. Um novo conhecimento. Um possível novo caminho.
        </h2>

        <p className="text-base sm:text-lg text-ciedh-blue-light/90 max-w-xl mx-auto mb-10 leading-relaxed">
          As vagas são limitadas para garantir o suporte adequado a todos os alunos. Não deixe essa oportunidade passar.
        </p>

        <div>
          <a
            href="#formulario"
            className="inline-flex items-center gap-3 bg-ciedh-teal hover:bg-ciedh-teal-hover text-white font-heading font-extrabold text-base sm:text-lg py-5 px-10 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-ciedh-glow"
          >
            <HeartHandshake className="w-6 h-6" />
            <span>PARTICIPAR GRATUITAMENTE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
