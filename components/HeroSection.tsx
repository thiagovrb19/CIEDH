'use client';

import React from 'react';
import Image from 'next/image';
import { PlayCircle, Check, HeartHandshake, Award } from 'lucide-react';
import LeadForm from './LeadForm';

interface HeroSectionProps {
  onSuccess: (userData: { nome: string; whatsapp: string; email: string }) => void;
}

export default function HeroSection({ onSuccess }: HeroSectionProps) {
  const highlights = [
    { text: '3 aulas gratuitas', strong: true },
    { text: 'Conteúdo introdutório e prático', strong: true },
    { text: 'Para iniciantes (sem experiência prévia)', strong: false },
    { text: 'Certificado de participação oficial CIEDH', strong: true },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-ciedh-blue-light/40 via-white to-white py-12 lg:py-20 border-b border-ciedh-gray-border/60">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-ciedh-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-ciedh-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Coluna da Esquerda: Textos, Destaques e Formulário */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-ciedh-blue-light text-ciedh-blue border border-ciedh-blue-border px-3.5 py-1.5 rounded-full font-heading font-extrabold text-xs tracking-wider uppercase mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-ciedh-teal animate-ping" />
                <PlayCircle className="w-4 h-4 text-ciedh-blue" />
                EVENTO ONLINE GRATUITO
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-ciedh-blue-deep leading-tight sm:leading-tight lg:leading-tight">
                Quer aprender os primeiros passos para cuidar de pessoas idosas com mais <span className="text-ciedh-blue underline decoration-ciedh-teal decoration-wavy decoration-2">segurança</span> e preparo?
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Participe gratuitamente de <strong>3 aulas especiais da CIEDH</strong> e conheça fundamentos importantes para quem deseja começar a se desenvolver na área de Cuidados com o Idoso.
              </p>
            </div>

            {/* Destaques com checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-ciedh-teal-light text-ciedh-teal-dark flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-gray-800">
                    {item.strong ? <strong>{item.text}</strong> : item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Formulário de Conversão no Hero */}
            <div className="pt-2">
              <LeadForm onSuccess={onSuccess} />
            </div>
          </div>

          {/* Coluna da Direita: Imagem Profissional & Badges Flutuantes */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura da Imagem */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-tr from-ciedh-blue to-ciedh-teal aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <Image
                  src="/images/hero-caregiver.jpg"
                  alt="Cuidadora profissional auxiliando senhora idosa com carinho e respeito em ambiente residencial acolhedor"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ciedh-blue-deep/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Flutuante 1 (Topo) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-ciedh-blue-light text-ciedh-blue flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5 text-ciedh-blue" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-ciedh-blue-deep">Cuidado Humanizado</h4>
                  <p className="text-xs text-gray-500">Técnica, respeito e empatia</p>
                </div>
              </div>

              {/* Card Flutuante 2 (Base) */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ciedh-teal-light text-ciedh-teal-dark flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-ciedh-teal-dark" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-ciedh-blue-deep">Certificado CIEDH</h4>
                  <p className="text-xs text-gray-500">Comprovação de participação</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
