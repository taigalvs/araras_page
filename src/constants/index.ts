import { FaBookOpen } from 'react-icons/fa'
import { FaHandsHoldingChild } from 'react-icons/fa6'
import { GiPartyFlags } from 'react-icons/gi'
import { RiMentalHealthFill } from 'react-icons/ri'

// URLs
export const DONATE_UNICO_URL =
  'https://link.mercadopago.com.br/doeararas'

export const DONATE_MENSAL_URL =
  'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849563a16501957157fefd0789'

// NAVIGATION
export const NAV_LINKS = [
  { href: '#sobre', key: 'about_us', label: 'QUEM SOMOS' },
  { href: '#oque-fazemos', key: 'what_we_do', label: 'O QUE FAZEMOS?' },
  { href: '#contato', key: 'contact_us', label: 'CONTATO' },
]

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Suporte à família',
    icon: FaHandsHoldingChild,
    description:
      'Orientação e recursos para fortalecer as famílias, promovendo um ambiente saudável e seguro para o crescimento das crianças.',
  },
  {
    title: 'Benefícios para a saúde',
    icon: RiMentalHealthFill,
    description:
      'Nosso foco é na saúde integral das crianças, orientando sobre aos serviços de saúde preventiva e programas de nutrição.',
  },
  {
    title: 'Educação',
    icon: FaBookOpen,
    description:
      'Proporcionamos um ambiente de aprendizado enriquecedor, com foco na educação básica e no desenvolvimento de habilidades essenciais para o futuro.',
  },
  {
    title: 'Eventos comemorativos',
    icon: GiPartyFlags,
    description:
      'Celebramos momentos especiais como a Festa da Páscoa, Festa Agostina, dia das crianças e o Natal com eventos que trazem alegria e fortalecem o senso de comunidade.',
  },
]
