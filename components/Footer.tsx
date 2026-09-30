'use client';

import React from 'react';
import { Instagram, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ciedh-blue-deep text-gray-300 py-12 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-white tracking-wide">
              CIEDH
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Centro Integrado de Educação e Desenvolvimento Humano
            </p>
            <p className="text-xs text-ciedh-teal-light italic mt-1 max-w-md">
              "A educação que desenvolve pessoas e transforma possibilidades em oportunidades."
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Política de Privacidade
            </button>
            <span className="text-gray-600">•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Termos de Uso
            </button>
            <span className="text-gray-600">•</span>
            <a
              href="https://www.instagram.com/leonardo.ciedh?stkn=b2RpMWZuN3BoZXRi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@leonardo.ciedh</span>
            </a>
          </div>
        </div>

        {/* Disclaimer LGPD */}
        <div className="pt-8 text-center text-xs text-gray-400 space-y-2 max-w-4xl mx-auto">
          <p>
            &copy; {currentYear} CIEDH — Centro Integrado de Educação e Desenvolvimento Humano. Todos os direitos reservados.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-ciedh-teal flex-shrink-0" />
            <span>
              Em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). Coletamos apenas os dados estritamente necessários para permitir seu acesso ao evento educacional gratuito.
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
