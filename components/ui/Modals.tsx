'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle, MessageCircle, ShieldCheck, FileText } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: { nome: string; whatsapp: string; email: string } | null;
}

export function SuccessModal({ isOpen, onClose, leadData }: SuccessModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-ciedh-blue-deep/75 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-ciedh-teal-light text-ciedh-teal-dark mx-auto flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-heading font-extrabold text-ciedh-blue-deep mb-2">
            Inscrição Realizada com Sucesso!
          </h3>

          <p className="text-sm text-gray-600 mb-6">
            {leadData?.nome ? <strong>{leadData.nome}</strong> : 'Parabéns'}, sua vaga gratuita para as <strong>3 Aulas de Cuidados com o Idoso</strong> está pré-garantida.
          </p>

          <div className="bg-ciedh-teal-light/60 border-2 border-ciedh-teal/40 rounded-2xl p-5 mb-6 text-center">
            <h4 className="font-heading font-extrabold text-base text-ciedh-blue-deep mb-2 flex items-center justify-center gap-1.5">
              <MessageCircle className="w-5 h-5 text-ciedh-teal-dark" />
              Próximo passo fundamental:
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">
              Para não perder as datas das aulas e receber o material complementar de apoio, entre agora no canal oficial de alunos no WhatsApp:
            </p>
            <a
              href="https://www.instagram.com/leonardo.ciedh?stkn=b2RpMWZuN3BoZXRi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fa851] text-white font-heading font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all w-full"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ENTRAR NO GRUPO VIP DE AVISOS</span>
            </a>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            Também enviamos uma confirmação para <strong>{leadData?.email || 'seu e-mail'}</strong>. Verifique sua caixa de entrada e spam.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-heading font-bold text-sm py-3 rounded-xl transition-colors"
          >
            Fechar esta janela
          </button>
        </div>
      </div>
    </div>
  );
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-ciedh-blue-deep/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl z-10 animate-in fade-in duration-200">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ciedh-blue-deep flex items-center gap-2">
            <FileText className="w-5 h-5 text-ciedh-teal" />
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
          {children}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 text-right">
          <button
            type="button"
            onClick={onClose}
            className="bg-ciedh-blue hover:bg-ciedh-blue-dark text-white font-heading font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
