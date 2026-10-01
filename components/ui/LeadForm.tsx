'use client';

import React, { useState } from 'react';
import { User, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

interface LeadFormProps {
  onSuccess: (userData: { nome: string; whatsapp: string; email: string }) => void;
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formatWhatsApp = (value: string) => {
    let clean = value.replace(/\D/g, '');
    if (clean.length > 11) clean = clean.slice(0, 11);

    if (clean.length > 10) {
      return clean.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (clean.length > 6) {
      return clean.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (clean.length > 2) {
      return clean.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (clean.length > 0) {
      return clean.replace(/^(\d*)$/, '($1');
    }
    return clean;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!nome.trim() || nome.trim().length < 3) {
      newErrors.nome = 'Digite seu nome completo (mínimo 3 letras).';
    }

    const rawPhone = whatsapp.replace(/\D/g, '');
    if (!whatsapp || rawPhone.length < 10) {
      newErrors.whatsapp = 'Informe um WhatsApp válido com DDD.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Informe um e-mail válido para receber o acesso.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      const lead = { nome: nome.trim(), whatsapp: whatsapp.trim(), email: email.trim() };
      try {
        const stored = JSON.parse(localStorage.getItem('ciedh_leads') || '[]');
        stored.push({ ...lead, date: new Date().toISOString() });
        localStorage.setItem('ciedh_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage indisponível', err);
      }

      onSuccess(lead);
      setNome('');
      setWhatsapp('');
      setEmail('');
    }, 800);
  };

  return (
    <div id="formulario" className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-ciedh-blue-border shadow-ciedh-lg">
      <div className="absolute -top-1.5 left-0 right-0 h-2 bg-gradient-to-r from-ciedh-blue via-ciedh-teal to-ciedh-blue rounded-t-2xl" />

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-ciedh-blue-deep flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-ciedh-teal flex-shrink-0" />
          Garanta sua vaga gratuita
        </h2>
        <p className="text-sm text-ciedh-gray-text mt-1">
          Inscreva-se gratuitamente e receba as informações e links de acesso das aulas diretamente no seu WhatsApp e e-mail.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="form-nome" className="block text-xs sm:text-sm font-heading font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-4 h-4 text-ciedh-blue" />
            Nome completo
          </label>
          <input
            id="form-nome"
            type="text"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              if (errors.nome) setErrors((prev) => ({ ...prev, nome: '' }));
            }}
            placeholder="Seu nome completo"
            className={`w-full px-4 py-3 text-sm sm:text-base rounded-xl border bg-gray-50 focus:bg-white transition-all outline-none ${
              errors.nome
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-300 focus:border-ciedh-blue focus:ring-2 focus:ring-ciedh-blue/20'
            }`}
          />
          {errors.nome && <p className="text-xs text-red-600 font-medium mt-1">{errors.nome}</p>}
        </div>

        <div>
          <label htmlFor="form-whatsapp" className="block text-xs sm:text-sm font-heading font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-ciedh-teal-dark" />
            WhatsApp (com DDD)
          </label>
          <input
            id="form-whatsapp"
            type="tel"
            value={whatsapp}
            onChange={handlePhoneChange}
            placeholder="(00) 00000-0000"
            className={`w-full px-4 py-3 text-sm sm:text-base rounded-xl border bg-gray-50 focus:bg-white transition-all outline-none ${
              errors.whatsapp
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-300 focus:border-ciedh-blue focus:ring-2 focus:ring-ciedh-blue/20'
            }`}
          />
          {errors.whatsapp && <p className="text-xs text-red-600 font-medium mt-1">{errors.whatsapp}</p>}
        </div>

        <div>
          <label htmlFor="form-email" className="block text-xs sm:text-sm font-heading font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-ciedh-blue" />
            E-mail principal
          </label>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
            }}
            placeholder="seu@email.com"
            className={`w-full px-4 py-3 text-sm sm:text-base rounded-xl border bg-gray-50 focus:bg-white transition-all outline-none ${
              errors.email
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-300 focus:border-ciedh-blue focus:ring-2 focus:ring-ciedh-blue/20'
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 font-medium mt-1">{errors.email}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-ciedh-blue via-ciedh-blue to-ciedh-blue-dark hover:from-ciedh-blue-dark hover:to-ciedh-blue-deep text-white font-heading font-extrabold text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Garantindo sua vaga...</span>
            </>
          ) : (
            <>
              <span>QUERO GARANTIR MINHA VAGA GRATUITA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-gray-500 text-center">
          <CheckCircle2 className="w-4 h-4 text-ciedh-teal flex-shrink-0" />
          <span>Seus dados estão protegidos de acordo com a LGPD. Sem spam.</span>
        </div>
      </form>
    </div>
  );
}
