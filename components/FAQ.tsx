'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'CreatorFlow fonctionne vraiment avec TikTok, YouTube et Instagram ?',
    a: 'Oui, les trois plateformes sont intégrées nativement via leurs APIs officielles. Tu peux connecter tes comptes en moins de 2 minutes via OAuth sécurisé. La planification, la publication et les analytics sont disponibles pour les trois plateformes simultanément.',
  },
  {
    q: 'Puis-je annuler mon abonnement à tout moment ?',
    a: 'Absolument. Aucun engagement, aucun frais de résiliation. Si tu annules, tu gardes l\'accès jusqu\'à la fin de ta période de facturation. Tes données restent exportables pendant 30 jours après résiliation.',
  },
  {
    q: 'Comment fonctionne le générateur de scripts IA ?',
    a: 'Tu renseignes le sujet, le ton souhaité (inspirant, éducatif, divertissant...), la durée cible et la plateforme. Notre IA, entraînée sur des milliers de vidéos virales, génère un script structuré avec hook accrocheur, développement et call-to-action. Tu peux régénérer ou affiner le résultat en un clic.',
  },
  {
    q: 'L\'essai gratuit nécessite-t-il une carte bancaire ?',
    a: 'Non. Le plan Starter est gratuit pour toujours et ne demande aucune CB. Pour les plans Pro et Agency, l\'essai de 14 jours ne requiert pas de CB non plus. Tu ne seras facturé qu\'à la fin de la période d\'essai, si tu choisis de continuer.',
  },
  {
    q: 'Y a-t-il des réductions pour les étudiants ou créateurs débutants ?',
    a: 'Oui ! Nous offrons -50% pendant 6 mois aux étudiants vérifiés via UNiDAYS. Pour les créateurs débutants (moins de 10 000 abonnés cumulés), contacte notre équipe — nous avons un programme d\'accompagnement avec tarif adapté.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-yellow-light text-yellow-dark text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0D0D0D]">
            Questions fréquentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  isOpen
                    ? 'border-l-4 border-l-[#FFD600] border-t-gray-200 border-r-gray-200 border-b-gray-200 bg-yellow-light/30'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#0D0D0D] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-[#FFD600]' : 'bg-[#F7F7F7]'
                  }`}>
                    {isOpen ? (
                      <Minus size={14} className="text-[#0D0D0D]" />
                    ) : (
                      <Plus size={14} className="text-[#0D0D0D]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-sm text-gray-500"
        >
          Une autre question ?{' '}
          <a href="mailto:hello@creatorflow.io" className="text-[#0D0D0D] font-semibold underline underline-offset-2 hover:text-yellow-dark">
            Écris-nous
          </a>{' '}
          — on répond en moins de 24h.
        </motion.p>
      </div>
    </section>
  )
}
