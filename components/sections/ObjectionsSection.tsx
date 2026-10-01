'use client';

import React from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export default function ObjectionsSection() {
  const objections = [
    {
      q: 'Mas eu nunca trabalhei como cuidador(a). Posso participar?',
      a: 'Não tem problema algum! As três aulas são 100% introdutórias e foram planejadas exatamente para pessoas que desejam conhecer melhor a área, sem necessidade de conhecimento prévio.',
    },
    {
      q: 'Preciso ter formação ou experiência prévia na área da saúde?',
      a: 'Não. Você não precisa ser enfermeiro, técnico ou ter experiência em hospitais. O conteúdo foi elaborado de forma simples, humana e de fácil compreensão para qualquer pessoa.',
    },
    {
      q: 'As aulas realmente são 100% gratuitas ou tem cobrança oculta?',
      a: 'Sim, as três aulas desta campanha são totalmente gratuitas. Não cobramos taxa de inscrição, mensalidade ou qualquer valor oculto para assistir.',
    },
    {
      q: 'Vou receber certificado de participação?',
      a: 'Sim! Os participantes que acompanharem as 3 aulas do evento receberão o Certificado Digital de Participação emitido pela CIEDH para enriquecer seu currículo.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-ciedh-teal-light text-ciedh-teal-dark font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            TRANSPARÊNCIA TOTAL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep">
            Ainda com dúvidas? Nós respondemos com clareza.
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Confira as respostas diretas para as principais dúvidas de quem deseja participar do evento.
          </p>
        </div>

        {/* Grid de 4 Objeções */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {objections.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border-2 border-gray-200 shadow-ciedh-sm hover:border-ciedh-blue/60 hover:shadow-ciedh-md transition-all duration-300"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-ciedh-blue-light text-ciedh-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-ciedh-blue-deep leading-snug">
                  "{item.q}"
                </h3>
              </div>

              <div className="pl-11">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
