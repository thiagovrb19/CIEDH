'use client';

import React, { useState } from 'react';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import IdentificationSection from '@/components/sections/IdentificationSection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import ValueSection from '@/components/sections/ValueSection';
import AboutSection from '@/components/sections/AboutSection';
import InstructorSection from '@/components/sections/InstructorSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ObjectionsSection from '@/components/sections/ObjectionsSection';
import MidCtaSection from '@/components/sections/MidCtaSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalBannerSection from '@/components/sections/FinalBannerSection';
import Footer from '@/components/layout/Footer';
import { SuccessModal, LegalModal } from '@/components/ui/Modals';
import FloatingSocial from '@/components/layout/FloatingSocial';

export default function Home() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [leadData, setLeadData] = useState<{ nome: string; whatsapp: string; email: string } | null>(null);

  const handleLeadSuccess = (data: { nome: string; whatsapp: string; email: string }) => {
    setLeadData(data);
    setSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Barra de Notificação Superior */}
      <AnnouncementBar />

      {/* 1. TOPO DA PÁGINA (Header focado em CRO) */}
      <Header />

      <main className="flex-grow">
        {/* 2 & 3. HERO (Primeira Tela & Imagem Fotográfica) */}
        <HeroSection onSuccess={handleLeadSuccess} />

        {/* 4. BLOCO DE IDENTIFICAÇÃO */}
        <IdentificationSection />

        {/* 5. O QUE VOCÊ VAI APRENDER */}
        <CurriculumSection />

        {/* 6. BLOCO DE VALOR */}
        <ValueSection />

        {/* 7. QUEM É A CIEDH? */}
        <AboutSection />

        {/* 8. PROFESSOR / CORPO DOCENTE */}
        <InstructorSection />

        {/* 9. PROVA SOCIAL */}
        <SocialProofSection />

        {/* 10. QUEBRA DE OBJEÇÕES */}
        <ObjectionsSection />

        {/* 11. CTA FINAL / INTERMEDIÁRIO */}
        <MidCtaSection />

        {/* 12. FAQ (ACCORDION REATIVO) */}
        <FaqSection />

        {/* 13. ÚLTIMO BLOCO (AZUL INSTITUCIONAL) */}
        <FinalBannerSection />
      </main>

      {/* 14. RODAPÉ */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      {/* Modais */}
      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        leadData={leadData}
      />

      <LegalModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title="Política de Privacidade e Proteção de Dados (LGPD)"
      >
        <p>
          A <strong>CIEDH — Centro Integrado de Educação e Desenvolvimento Humano</strong> valoriza a sua privacidade e garante a transparência e conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
        </p>
        <h4 className="font-heading font-bold text-ciedh-blue-deep pt-2">1. Finalidade do Tratamento</h4>
        <p>
          Os dados coletados neste site (Nome completo, WhatsApp e E-mail) são utilizados exclusivamente para identificar sua inscrição no evento <em>3 Aulas Gratuitas — Cuidados com o Idoso</em>, enviar instruções e links de acesso às aulas, emitir o Certificado de Participação e fornecer informações educacionais correlatas.
        </p>
        <h4 className="font-heading font-bold text-ciedh-blue-deep pt-2">2. Segurança e Não Compartilhamento</h4>
        <p>
          Seus dados são armazenados em ambiente seguro e nunca serão vendidos, alugados ou transferidos a terceiros. Não praticamos envio de spam.
        </p>
        <h4 className="font-heading font-bold text-ciedh-blue-deep pt-2">3. Direitos do Titular</h4>
        <p>
          Você poderá a qualquer momento solicitar a atualização, confirmação ou remoção definitiva de seus dados cadastrais enviando solicitação aos canais oficiais da CIEDH.
        </p>
      </LegalModal>

      <LegalModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title="Termos de Uso do Evento Gratuito"
      >
        <h4 className="font-heading font-bold text-ciedh-blue-deep">1. Sobre o Evento</h4>
        <p>
          O evento online "3 Aulas Gratuitas — Cuidados com o Idoso" tem finalidade estritamente educativa e informativa, proporcionando visão introdutória sobre a rotina, conduta e práticas de cuidado com idosos.
        </p>
        <h4 className="font-heading font-bold text-ciedh-blue-deep pt-2">2. Gratuidade</h4>
        <p>
          A participação nas 3 transmissões é inteiramente gratuita, sem cobrança de matrícula ou exigência de compra posterior.
        </p>
        <h4 className="font-heading font-bold text-ciedh-blue-deep pt-2">3. Propriedade Intelectual</h4>
        <p>
          Os materiais audiovisuais, logotipos, apresentações e apostilas são de propriedade exclusiva da CIEDH, protegidos pela legislação de direitos autorais.
        </p>
        <h4 className="font-heading font-bold text-ciedh-blue-deep pt-2">4. Certificação</h4>
        <p>
          O certificado digital de participação será disponibilizado aos inscritos que acompanharem as aulas, conforme orientações apresentadas durante o evento.
        </p>
      </LegalModal>

      {/* Botão Flutuante Instagram */}
      <FloatingSocial />
    </div>
  );
}
