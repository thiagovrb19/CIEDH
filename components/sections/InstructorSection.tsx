'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export default function InstructorSection() {
  const credentials = [
    'Experiência prática em assistência hospitalar, clínica e domiciliar',
    'Didática acolhedora adaptada para quem está começando do zero',
    'Foco absoluto em segurança do paciente e prevenção de incidentes',
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-ciedh-teal-light text-ciedh-teal-dark font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            QUEM VAI ENSINAR?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep">
            Quem estará com você nas 3 aulas?
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Aprenda diretamente com quem vivencia a rotina do cuidado e a formação técnica na área da saúde.
          </p>
        </div>

        {/* Card do Professor / Corpo Docente */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-gray-200 shadow-ciedh-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* Foto do Instrutor */}
          <div className="md:col-span-5 relative h-80 sm:h-96 md:h-full min-h-[340px] bg-gradient-to-tr from-ciedh-blue to-ciedh-teal">
            <Image
              src="/images/instructor.jpg"
              alt="Professora e especialista na área de saúde e cuidados da CIEDH"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute top-4 left-4 bg-ciedh-blue-deep/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-heading font-bold flex items-center gap-1.5 shadow-md">
              <Shield className="w-3.5 h-3.5 text-ciedh-teal" />
              Equipe CIEDH Saúde
            </div>
          </div>

          {/* Biografia e Competências */}
          <div className="md:col-span-7 p-6 sm:p-10 space-y-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-ciedh-blue-deep">
                Corpo Docente Especializado
              </h3>
              <p className="text-sm sm:text-base font-heading font-semibold text-ciedh-teal-dark mt-1">
                Especialistas em Enfermagem, Saúde e Cuidados com o Idoso
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Durante as 3 aulas gratuitas, você será guiado por profissionais da área da saúde com sólida atuação prática no acompanhamento e reabilitação de idosos. A proposta é desmistificar a rotina, ensinar técnicas fundamentais e mostrar a conduta ética necessária para desempenhar esse papel com confiança.
            </p>

            <ul className="space-y-2.5 pt-1">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-ciedh-teal flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-500">
                Aulas online com espaço para tirar suas dúvidas ao vivo.
              </p>
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 text-ciedh-blue font-heading font-extrabold text-sm hover:text-ciedh-blue-dark transition-colors"
              >
                <span>Garantir minha vaga</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
