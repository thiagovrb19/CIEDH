'use client';

import React from 'react';
import { BookOpen, Compass, Target, ArrowRight } from 'lucide-react';

export default function ValueSection() {
  const pillars = [
    {
      title: 'CONHECIMENTO',
      icon: BookOpen,
      color: 'bg-ciedh-blue-light text-ciedh-blue',
      border: 'hover:border-ciedh-blue',
      desc: 'Tenha contato direto com conceitos fundamentais e orientações essenciais para cuidar de idosos com segurança.',
    },
    {
      title: 'EXPERIÊNCIA',
      icon: Compass,
      color: 'bg-ciedh-teal-light text-ciedh-teal-dark',
      border: 'hover:border-ciedh-teal',
      desc: 'Conheça melhor a rotina diária, as situações práticas mais comuns e os desafios reais envolvidos no cuidado.',
    },
    {
      title: 'DIRECIONAMENTO',
      icon: Target,
      color: 'bg-amber-100 text-amber-700',
      border: 'hover:border-amber-400',
      desc: 'Entenda quais podem ser os seus próximos passos caso decida aprofundar seus estudos e seguir carreira na área.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-ciedh-teal-light text-ciedh-teal-dark font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            POR QUE PARTICIPAR?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep leading-tight">
            Antes de escolher uma profissão ou investir em um curso, conheça a área por dentro.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Durante as três aulas gratuitas, você terá contato com conteúdos introdutórios sobre o cuidado com pessoas idosas e poderá entender com clareza se esse caminho faz sentido para seus objetivos pessoais e profissionais.
          </p>
        </div>

        {/* 3 Pilares de Valor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-ciedh-sm ${item.border} hover:shadow-ciedh-md transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center`}
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading font-extrabold text-ciedh-blue-deep tracking-wider mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA direto */}
        <div className="text-center">
          <a
            href="#formulario"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-ciedh-blue to-ciedh-blue-dark hover:from-ciedh-blue-dark hover:to-ciedh-blue-deep text-white font-heading font-extrabold text-base py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>QUERO APROVEITAR AS 3 AULAS GRATUITAS</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
