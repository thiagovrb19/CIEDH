'use client';

import React from 'react';
import Image from 'next/image';
import { UserCheck, Stethoscope, Sparkles, Quote } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Foco no Desenvolvimento do Aluno',
      desc: 'Metodologia humanizada, prática e voltada para a vida real.',
    },
    {
      icon: Stethoscope,
      title: 'Vocação na Área da Saúde',
      desc: 'Formações de cuidadores, enfermagem e saúde com respaldo ético.',
    },
    {
      icon: Sparkles,
      title: 'Credibilidade Institucional',
      desc: 'Compromisso com o aprendizado seguro e novas oportunidades de trabalho.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-ciedh-gray-light border-y border-ciedh-gray-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block bg-ciedh-blue-light text-ciedh-blue font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
                SOBRE A INSTITUIÇÃO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep leading-tight">
                Quem é a CIEDH?
              </h2>
              <p className="text-lg sm:text-xl font-heading font-semibold text-ciedh-teal-dark mt-2">
                Educação que prepara para novas oportunidades.
              </p>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              A <strong>CIEDH — Centro Integrado de Educação e Desenvolvimento Humano</strong> — atua no segmento de educação e capacitação profissional, oferecendo cursos e formações voltados ao desenvolvimento de habilidades práticas, ao crescimento humano e à inserção no mercado de trabalho.
            </p>

            {/* Slogan com citação */}
            <div className="relative bg-white border-l-4 border-ciedh-teal p-5 rounded-r-2xl shadow-sm">
              <Quote className="w-8 h-8 text-ciedh-teal/30 absolute top-3 right-3" />
              <p className="text-base sm:text-lg font-heading font-bold text-ciedh-blue-deep italic">
                "A educação que desenvolve pessoas e transforma possibilidades em oportunidades."
              </p>
            </div>

            {/* Pilares Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-ciedh-blue-light text-ciedh-blue flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-ciedh-blue-deep mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-normal">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna Logo e Símbolo */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-gray-200 shadow-ciedh-md text-center">
              <div className="relative w-52 h-52 mx-auto mb-6">
                <Image
                  src="/images/logo-ciedh.png"
                  alt="Símbolo CIEDH - Conhecimento e Desenvolvimento Humano"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-heading font-extrabold text-base text-ciedh-blue-deep mb-2">
                  Conhecimento para desenvolver pessoas.
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A marca CIEDH combina a <strong>árvore do conhecimento</strong> com o formato de uma <strong>lâmpada</strong>, simbolizando raízes sólidas, ideias inovadoras, aprendizado contínuo e evolução humana.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
