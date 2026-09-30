'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'As aulas são realmente gratuitas?',
      a: 'Sim! A participação nas três aulas da campanha é 100% gratuita. Você não paga taxa de inscrição, mensalidade ou qualquer cobrança oculta.',
    },
    {
      q: 'Para quem são indicadas essas aulas?',
      a: 'Para qualquer pessoa interessada em conhecer melhor a área de Cuidados com o Idoso, especialmente iniciantes, familiares que cuidam de entes queridos em casa, e profissionais que desejam ingressar ou fazer transição de carreira para o segmento da saúde.',
    },
    {
      q: 'Preciso ter alguma experiência prévia?',
      a: 'Não. O conteúdo das 3 aulas foi desenhado para iniciantes e não requer conhecimento anterior nem formação médica ou de enfermagem.',
    },
    {
      q: 'As aulas serão online ou presenciais?',
      a: 'As 3 aulas serão 100% online, transmitidas em ambiente digital com acesso exclusivo para quem se cadastrar nesta página. Você pode assistir pelo celular, tablet ou computador.',
    },
    {
      q: 'Quando serão as aulas e quais os horários?',
      a: 'O cronograma completo com as datas e horários será enviado diretamente para o seu WhatsApp e e-mail cadastrado logo após a confirmação da sua inscrição gratuita.',
    },
    {
      q: 'Como vou receber os links de acesso?',
      a: 'Os links e materiais de apoio serão enviados por WhatsApp e por E-mail. Por isso, certifique-se de preencher seus dados de contato corretamente no formulário.',
    },
    {
      q: 'Existe emissão de certificado de participação?',
      a: 'Sim. Os participantes que acompanharem as 3 aulas gratuitas poderão solicitar o Certificado Digital de Participação emitido pela CIEDH.',
    },
    {
      q: 'Depois das aulas gratuitas, posso continuar minha formação?',
      a: 'Sim! Ao final da experiência gratuita, a CIEDH apresentará as oportunidades e opções de formação continuada e profissionalização para quem desejar se aprofundar e obter novas certificações.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-ciedh-gray-light border-y border-ciedh-gray-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-ciedh-blue-light text-ciedh-blue font-heading font-extrabold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-ciedh-blue-deep">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Tudo o que você precisa saber sobre o evento de 3 aulas gratuitas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-ciedh-blue-deep hover:text-ciedh-blue transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-ciedh-blue flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-ciedh-teal' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
