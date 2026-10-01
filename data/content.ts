export interface LessonTopic {
  badge: string;
  title: string;
  description: string;
  topics: string[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  city: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PillarItem {
  title: string;
  desc: string;
}

export const SITE_CONFIG = {
  name: 'CIEDH',
  fullName: 'Centro Integrado de Educação e Desenvolvimento Humano',
  courseName: '3 Aulas Gratuitas — Cuidados com o Idoso',
  slogan: 'A educação que desenvolve pessoas e transforma possibilidades em oportunidades.',
  instagram: {
    handle: '@leonardo.ciedh',
    url: 'https://www.instagram.com/leonardo.ciedh?stkn=b2RpMWZuN3BoZXRi',
  },
};

export const HIGHLIGHTS = [
  { text: '3 aulas gratuitas', strong: true },
  { text: 'Conteúdo introdutório e prático', strong: true },
  { text: 'Para iniciantes (sem experiência prévia)', strong: false },
  { text: 'Certificado de participação oficial CIEDH', strong: true },
];

export const SITUATIONS = [
  'Quero trabalhar cuidando de pessoas e fazer a diferença na vida delas.',
  'Tenho interesse na área da saúde e quero dar os primeiros passos.',
  'Quero aprender a cuidar melhor de um familiar idoso com mais segurança.',
  'Estou procurando uma nova oportunidade profissional que está em alta no mercado.',
  'Quero conhecer a área antes de investir em uma formação mais longa.',
];

export const LESSONS: LessonTopic[] = [
  {
    badge: 'AULA 01',
    title: 'Conhecendo o universo do cuidado com o idoso',
    description:
      'Introdução clara à profissão: entenda como funciona a rotina diária do cuidador, as principais responsabilidades éticas e o panorama de oportunidades.',
    topics: [
      'O que faz e o que não faz um cuidador profissional',
      'Postura ética e limites de atuação',
      'Como funciona a rotina de trabalho domiciliar e institucional',
    ],
    featured: false,
  },
  {
    badge: 'AULA 02',
    title: 'Cuidados básicos no dia a dia com segurança',
    description:
      'Conceitos fundamentais para uma rotina de cuidado organizada, com medidas preventivas de acidentes, bem-estar e acolhimento do idoso.',
    topics: [
      'Prevenção de quedas e adaptação do ambiente residencial',
      'Noções de mobilidade e transferência segura',
      'Organização de rotinas diárias e hábitos saudáveis',
    ],
    featured: true,
  },
  {
    badge: 'AULA 03',
    title: 'O papel do cuidador e os próximos passos',
    description:
      'Competências comportamentais essenciais, os desafios reais da profissão e caminhos recomendados para quem deseja continuar sua formação.',
    topics: [
      'Comunicação empática com o idoso e familiares',
      'Desafios emocionais e valorização profissional',
      'Orientações para certificação profissional e continuidade',
    ],
    featured: false,
  },
];

export const VALUE_PILLARS = [
  {
    title: 'CONHECIMENTO',
    desc: 'Tenha contato direto com conceitos fundamentais e orientações essenciais para cuidar de idosos com segurança.',
  },
  {
    title: 'EXPERIÊNCIA',
    desc: 'Conheça melhor a rotina diária, as situações práticas mais comuns e os desafios reais envolvidos no cuidado.',
  },
  {
    title: 'DIRECIONAMENTO',
    desc: 'Entenda quais podem ser os seus próximos passos caso decida aprofundar seus estudos e seguir carreira na área.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
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

export const OBJECTIONS = [
  {
    q: 'Mas eu nunca trabalhei como cuidador(a). Posso participar?',
    a: 'Não tem problema algum! As três aulas são 100% introdutórias e foram planejadas exatamente para pessoas que desejam conhecer melhor a área, sem necessidade de conhecimento prévio.',
  },
  {
    q: 'Preciso ter formação ou experiência prévia na área da saúde?',
    a: 'Não. Você não precisa ser enfermeiro, técnico ou ter experiência em hospitais. O conteúdo foi elaborado de forma simples, humana e de fácil compreensão para qualquer pessoa.',
  },
  {
    q: 'As aulas realmente são 100% gratuitas ou tem cobrança oculta?',
    a: 'Sim, as três aulas desta campanha são totalmente gratuitas. Não cobramos taxa de inscrição, mensalidade ou qualquer valor oculto para assistir.',
  },
  {
    q: 'Vou receber certificado de participação?',
    a: 'Sim! Os participantes que acompanharem as 3 aulas do evento receberão o Certificado Digital de Participação emitido pela CIEDH para enriquecer seu currículo.',
  },
];

export const FAQS: FaqItem[] = [
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
