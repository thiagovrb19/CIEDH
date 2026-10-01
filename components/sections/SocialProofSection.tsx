'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Instagram, Users, GraduationCap, Quote } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      name: 'Maria de Fátima R.',
      role: 'Cuidado familiar de idoso',
      city: 'São Paulo / SP',
      text: 'Eu cuidava da minha mãe de forma intuitiva e vivia com medo de machucar ela na hora de transferir da cama para a cadeira. As aulas da CIEDH me deram uma segurança e uma paz que eu não tinha antes.',
    },
    {
      name: 'Ana Paula Silveira',
      role: 'Transição para Área da Saúde',
      city: 'Belo Horizonte / MG',
      text: 'Estava buscando uma oportunidade de trabalho que fosse valorizada e tivesse propósito. Conhecer a rotina nas aulas gratuitas foi o divisor de águas para eu decidir entrar de cabeça nessa carreira.',
    },
    {
      name: 'Carlos Eduardo L.',
      role: 'Aluno de Capacitação CIEDH',
      city: 'Curitiba / PR',
      text: 'Didática muito clara e pé no chão. Os professores não usam termos complicados; eles ensinam exatamente como agir no dia a dia, respeitando a dignidade e a saúde da pessoa idosa.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-ciedh-gray-light border-y border-ciedh-gray-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-ciedh-blue-light text-ciedh-blue font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            QUEM JÁ PASSOU PELA CIEDH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep">
            Aprenda com quem já transformou a vida de centenas de pessoas
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Confira momentos práticos de formação e relatos de quem confiou na metodologia da CIEDH.
          </p>
        </div>

        {/* Foto de Sala de Aula e Prática Laboratorial */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="relative rounded-3xl overflow-hidden shadow-ciedh-lg border-4 border-white aspect-[16/9] max-h-[460px]">
            <Image
              src="/images/students-class.jpg"
              alt="Alunos e instrutores da CIEDH em treinamento prático de cuidados com o paciente e aferição de sinais vitais"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1000px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ciedh-blue-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ciedh-teal/90 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg">Ambiente Prático e Didático</h4>
                  <p className="text-xs sm:text-sm text-gray-200">Treinamentos e simulações com foco na realidade assistencial</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                <GraduationCap className="w-4 h-4 text-ciedh-teal" /> Capacitação CIEDH
              </span>
            </div>
          </div>
        </div>

        {/* Depoimentos em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-gray-200 shadow-ciedh-sm hover:shadow-ciedh-md hover:border-ciedh-teal transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ciedh-teal-light text-ciedh-teal-dark font-heading font-extrabold flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-ciedh-blue-deep">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role} • {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Conexão Instagram */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 border-2 border-dashed border-ciedh-blue-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-ciedh-blue-deep">
                Acompanhe o dia a dia da CIEDH no Instagram
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Aulas práticas, depoimentos de turmas e dicas semanais de saúde e cuidado.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/leonardo.ciedh?stkn=b2RpMWZuN3BoZXRi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>@leonardo.ciedh</span>
          </a>
        </div>

      </div>
    </section>
  );
}
