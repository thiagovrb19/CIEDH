/**
 * CIEDH — Landing Page Interativa e Otimizada para Conversão
 * Funcionalidades:
 * - Máscara dinâmica de WhatsApp
 * - Validação de formulário amigável
 * - Interatividade nas situações (Seção 4)
 * - Accordion animado no FAQ (Seção 12)
 * - Controle de Modais (Sucesso, Privacidade e Termos)
 * - Rolagem suave com foco automático
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar Ano no Rodapé
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Máscara de Telefone / WhatsApp Brasileiro
  const whatsappInput = document.getElementById('whatsapp');
  if (whatsappInput) {
    whatsappInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 10) {
        // Formato Celular: (99) 99999-9999
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (value.length > 6) {
        // Formato Parcial: (99) 9999-9999
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (value.length > 2) {
        // Formato DDD: (99) 9999...
        value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (value.length > 0) {
        value = value.replace(/^(\d*)$/, '($1');
      }
      e.target.value = value;
      clearFieldError('whatsapp');
    });
  }

  // 3. Limpeza de erros ao digitar
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');

  if (nomeInput) {
    nomeInput.addEventListener('input', () => clearFieldError('nome'));
  }
  if (emailInput) {
    emailInput.addEventListener('input', () => clearFieldError('email'));
  }

  // 4. Envio e Validação do Formulário de Lead
  const leadForm = document.getElementById('leadForm');
  const btnSubmit = document.getElementById('btnSubmit');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = nomeInput ? nomeInput.value.trim() : '';
      const whatsapp = whatsappInput ? whatsappInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';

      let isValid = true;

      // Validação do Nome
      if (!nome || nome.length < 3) {
        showFieldError('nome', 'Por favor, digite seu nome completo (mínimo 3 letras).');
        isValid = false;
      }

      // Validação do WhatsApp
      const rawPhone = whatsapp.replace(/\D/g, '');
      if (!whatsapp || rawPhone.length < 10) {
        showFieldError('whatsapp', 'Por favor, informe um WhatsApp válido com DDD (ex: 11 98888-7777).');
        isValid = false;
      }

      // Validação do E-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Por favor, informe um endereço de e-mail válido.');
        isValid = false;
      }

      if (!isValid) return;

      // Simulação de Envio com Estado de Carregamento
      const originalBtnHtml = btnSubmit.innerHTML;
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Garantindo sua vaga...</span>';

      setTimeout(() => {
        // Armazenar localmente para referência
        const leadData = {
          nome,
          whatsapp,
          email,
          dataRegistro: new Date().toISOString()
        };
        try {
          const leads = JSON.parse(localStorage.getItem('ciedh_leads') || '[]');
          leads.push(leadData);
          localStorage.setItem('ciedh_leads', JSON.stringify(leads));
        } catch (err) {
          console.warn('Storage indisponível', err);
        }

        // Restaura botão e reseta campos
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalBtnHtml;
        leadForm.reset();

        // Abre modal de sucesso
        openModal('successModal');
      }, 750);
    });
  }

  // 5. Interatividade das Situações (Seção 4)
  const situationItems = document.querySelectorAll('.situation-item');
  situationItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });

  // 6. Accordion do FAQ (Seção 12)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha outros itens para foco limpo
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherQuestion = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Alterna o item clicado
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 7. Fechar modais ao teclar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModals = document.querySelectorAll('.modal.active');
      activeModals.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    }
  });

  // 8. Foco suave no formulário ao clicar em links âncora para #formulario
  document.querySelectorAll('a[href="#formulario"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const formCard = document.getElementById('formulario');
      if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          const firstInput = document.getElementById('nome');
          if (firstInput) firstInput.focus();
        }, 600);
      }
    });
  });
});

/**
 * Exibe erro de validação em campo
 */
function showFieldError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorSpan = document.getElementById(`error-${fieldId}`);
  if (input) input.classList.add('input-error');
  if (errorSpan) {
    errorSpan.textContent = message;
    errorSpan.classList.add('visible');
  }
}

/**
 * Limpa erro de validação em campo
 */
function clearFieldError(fieldId) {
  const input = document.getElementById(fieldId);
  const errorSpan = document.getElementById(`error-${fieldId}`);
  if (input) input.classList.remove('input-error');
  if (errorSpan) {
    errorSpan.textContent = '';
    errorSpan.classList.remove('visible');
  }
}

/**
 * Controle de Modais Globais
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
