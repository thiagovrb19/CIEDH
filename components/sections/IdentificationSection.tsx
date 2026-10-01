'use client';

import React, { useState } from 'react';
import { Check, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IdentificationSection() {
  const [selectedItems, setSelectedItems] = useState<number[]>([0]);

  const situations = [
    'Quero trabalhar cuidando de pessoas e fazer a diferença na vida delas.',
    'Tenho interesse na área da saúde e quero dar os primeiros passos.',
    'Quero aprender a cuidar melhor de um familiar idoso com mais segurança.',
    'Estou procurando uma nova oportunidade profissional que está em alta no mercado.',
    'Quero conhecer a área antes de investir em uma formação mais longa.',
  ];

  const toggleSituation = (index: number) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-ciedh-blue-light text-ciedh-blue font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            PÚBLICO-ALVO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Clique e marque as opções que mais representam seu momento e objetivos atuais:
          </p>
        </div>

        {/* Grid de Situações com Interatividade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {situations.map((text, idx) => {
            const isSelected = selectedItems.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleSituation(idx)}
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 flex items-start gap-4 select-none ${
                  isSelected
                    ? 'border-ciedh-teal bg-ciedh-teal-light/40 shadow-ciedh-md -translate-y-1'
                    : 'border-gray-200 bg-gray-50/70 hover:border-ciedh-teal/60 hover:bg-white'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                    isSelected
                      ? 'bg-ciedh-teal text-white shadow-sm'
                      : 'bg-white border border-gray-300 text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  "{text}"
                </p>
              </div>
            );
          })}
        </div>

        {/* Conclusão e Ponte de Conversão */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-ciedh-blue-light/70 via-white to-ciedh-teal-light/70 border-2 border-ciedh-blue-border rounded-3xl p-6 sm:p-10 shadow-ciedh-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-10 h-10 text-ciedh-teal flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-ciedh-blue-deep">
                Se você se identificou com alguma dessas situações, essas 3 aulas foram pensadas para você.
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Uma oportunidade de conhecer a realidade prática da profissão com seriedade e sem promessas ilusórias.
              </p>
            </div>
          </div>

          <a
            href="#formulario"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-ciedh-teal hover:bg-ciedh-teal-hover text-white font-heading font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>QUERO ME INSCREVER</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
