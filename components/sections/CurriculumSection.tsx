'use client';

import React from 'react';
import { Compass, HeartPulse, TrendingUp, CheckCircle, Info } from 'lucide-react';

export default function CurriculumSection() {
  const lessons = [
    {
      badge: 'AULA 01',
      icon: Compass,
      title: 'Conhecendo o universo do cuidado com o idoso',
      description:
        'Introdução clara à profissão: entenda como funciona a rotina diária do cuidador, as principais responsabilidades éticas e o panorama de oportunidades.',
      topics: [
        'O que faz e o que não faz um cuidador profissional',
        'Postura ética e limites de atuação',
        'Como funciona a rotina de trabalho domiciliar e institucional',
      ],
      featured: false,
    },
    {
      badge: 'AULA 02',
      icon: HeartPulse,
      title: 'Cuidados básicos no dia a dia com segurança',
      description:
        'Conceitos fundamentais para uma rotina de cuidado organizada, com medidas preventivas de acidentes, bem-estar e acolhimento do idoso.',
      topics: [
        'Prevenção de quedas e adaptação do ambiente residencial',
        'Noções de mobilidade e transferência segura',
        'Organização de rotinas diárias e hábitos saudáveis',
      ],
      featured: true,
    },
    {
      badge: 'AULA 03',
      icon: TrendingUp,
      title: 'O papel do cuidador e os próximos passos',
      description:
        'Competências comportamentais essenciais, os desafios reais da profissão e caminhos recomendados para quem deseja continuar sua formação.',
      topics: [
        'Comunicação empática com o idoso e familiares',
        'Desafios emocionais e valorização profissional',
        'Orientações para certificação profissional e continuidade',
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-ciedh-gray-light border-y border-ciedh-gray-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-ciedh-blue-light text-ciedh-blue font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            PROGRAMAÇÃO EXCLUSIVA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep">
            O que você vai aprender nas 3 aulas
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Uma formação introdutória passo a passo estruturada por profissionais de saúde para quem está começando do zero.
          </p>
        </div>

        {/* 3 Grandes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {lessons.map((lesson, idx) => {
            const Icon = lesson.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col bg-white ${
                  lesson.featured
                    ? 'border-2 border-ciedh-blue shadow-ciedh-lg md:-translate-y-2'
                    : 'border border-gray-200 shadow-ciedh-sm hover:border-ciedh-blue/50 hover:shadow-ciedh-md hover:-translate-y-1'
                }`}
              >
                {/* Badge da Aula */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-heading font-extrabold text-xs tracking-wider px-3 py-1 rounded-full ${
                      lesson.featured
                        ? 'bg-ciedh-blue text-white'
                        : 'bg-ciedh-blue-light text-ciedh-blue'
                    }`}
                  >
                    {lesson.badge}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      lesson.featured
                        ? 'bg-ciedh-teal-light text-ciedh-teal-dark'
                        : 'bg-ciedh-blue-light text-ciedh-blue'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-ciedh-blue-deep mb-3 leading-snug">
                  {lesson.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                  {lesson.description}
                </p>

                {/* Tópicos com checks */}
                <div className="pt-4 border-t border-dashed border-gray-200 mt-auto">
                  <h4 className="text-xs font-heading font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Principais tópicos:
                  </h4>
                  <ul className="space-y-2">
                    {lesson.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-ciedh-teal flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota pedagógica institucional */}
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex items-center justify-center gap-3 text-center shadow-sm">
          <Info className="w-5 h-5 text-ciedh-blue flex-shrink-0" />
          <p className="text-xs sm:text-sm text-gray-600">
            <strong>Transparência CIEDH:</strong> Os temas foram estruturados pedagogicamente para fornecer uma visão real e fidedigna sobre a atuação com pessoas idosas.
          </p>
        </div>

      </div>
    </section>
  );
}
