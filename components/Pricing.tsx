'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Pour tester CreatorFlow sans engagement.',
    features: [
      '1 créateur',
      '3 comptes connectés',
      '10 publications / mois',
      '5 scripts IA / mois',
      'Analytics de base',
      'Support communauté',
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    annualPrice: 23,
    description: 'Pour les créateurs qui veulent accélérer sérieusement.',
    features: [
      '1 créateur',
      'Comptes illimités',
      'Publications illimitées',
      'Scripts IA illimités',
      'Analytics avancés',
      'Hashtag Suggester',
      'Calendrier éditorial',
      'Support prioritaire',
    ],
    cta: 'Essayer Pro — 14 jours gratuits',
    highlighted: true,
    badge: 'Le plus populaire',
  },
  {
    name: 'Agency',
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'Pour les agences et créateurs avec une équipe.',
    features: [
      'Jusqu\'à 10 créateurs',
      'Comptes illimités',
      'Publications illimitées',
      'Scripts IA illimités',
      'White-label disponible',
      'Gestion des rôles équipe',
      'Rapports clients exportables',
      'Account manager dédié',
    ],
    cta: 'Contacter l\'équipe',
    highlighted: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="pricing" className="py-20 lg:py-28 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-yellow-light text-yellow-dark text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Tarifs
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] mb-4">
            Un tarif simple,{' '}
            <span className="text-gradient-yellow">sans surprise</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 mt-2">
            <span className={`text-sm font-medium ${!annual ? 'text-[#0D0D0D]' : 'text-gray-400'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-10 h-5 rounded-full transition-colors ${
                annual ? 'bg-[#FFD600]' : 'bg-gray-200'
              }`}
              aria-label="Toggle billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  annual ? 'translate-x-5' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-[#0D0D0D]' : 'text-gray-400'}`}>
              Annuel
            </span>
            {annual && (
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                -20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'bg-[#FFD600] scale-[1.03] shadow-yellow'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-[#0D0D0D] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    <Zap size={12} className="text-[#FFD600]" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h3 className={`font-syne font-bold text-xl mb-1 ${plan.highlighted ? 'text-[#0D0D0D]' : 'text-[#0D0D0D]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-[#0D0D0D]/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className={`font-syne font-extrabold text-4xl ${plan.highlighted ? 'text-[#0D0D0D]' : 'text-[#0D0D0D]'}`}>
                    {annual ? plan.annualPrice : plan.monthlyPrice}€
                  </span>
                  {(plan.monthlyPrice > 0 || plan.annualPrice > 0) && (
                    <span className={`text-sm mb-1.5 ${plan.highlighted ? 'text-[#0D0D0D]/70' : 'text-gray-400'}`}>
                      /mois
                    </span>
                  )}
                  {plan.monthlyPrice === 0 && (
                    <span className={`text-sm mb-1.5 ${plan.highlighted ? 'text-[#0D0D0D]/70' : 'text-gray-400'}`}>
                      pour toujours
                    </span>
                  )}
                </div>
                {annual && plan.monthlyPrice > 0 && (
                  <p className={`text-xs mt-1 ${plan.highlighted ? 'text-[#0D0D0D]/60' : 'text-gray-400'}`}>
                    Facturé {(plan.annualPrice * 12).toLocaleString('fr-FR')}€/an
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      plan.highlighted ? 'bg-[#0D0D0D]' : 'bg-[#FFD600]'
                    }`}>
                      <Check size={10} className={plan.highlighted ? 'text-[#FFD600]' : 'text-[#0D0D0D]'} />
                    </div>
                    <span className={plan.highlighted ? 'text-[#0D0D0D]' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`text-center font-semibold py-3.5 rounded-full text-sm transition-all ${
                  plan.highlighted
                    ? 'bg-[#0D0D0D] text-[#FFD600] hover:bg-gray-900'
                    : 'bg-[#FFD600] text-[#0D0D0D] hover:bg-[#F9A825]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Tous les plans incluent un essai gratuit de 14 jours. Aucune CB requise pour le plan Starter.
        </p>
      </div>
    </section>
  )
}
