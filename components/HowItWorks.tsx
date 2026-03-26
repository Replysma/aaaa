'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link, CalendarDays, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Link,
    title: 'Connecte tes comptes',
    desc: 'Lie ton TikTok, YouTube et Instagram en quelques clics via OAuth sécurisé. Zéro configuration technique requise.',
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Planifie ton contenu',
    desc: 'Crée, programme et optimise tes posts depuis le calendrier éditorial. L\'IA t\'aide à trouver les meilleurs créneaux.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Analyse et optimise',
    desc: 'Suis tes performances en temps réel. Identifie ce qui fonctionne et réplique tes meilleurs contenus facilement.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-light text-yellow-dark text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Comment ça marche
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0D0D0D]">
            Opérationnel en{' '}
            <span className="text-gradient-yellow">moins de 5 minutes</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%-12px)] right-[calc(16.66%-12px)] h-0.5 bg-gradient-to-r from-[#FFD600] via-[#F9A825] to-[#FFD600]" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex-1 flex flex-col items-center text-center px-4 md:px-6 relative"
              >
                {/* Circle */}
                <div className="relative mb-6 z-10">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full bg-[#FFF9C4] flex items-center justify-center">
                    {/* Inner circle */}
                    <div className="w-14 h-14 rounded-full bg-[#FFD600] flex items-center justify-center shadow-yellow">
                      <Icon size={24} className="text-[#0D0D0D]" />
                    </div>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#0D0D0D] text-white text-[10px] font-extrabold font-syne rounded-full flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="font-syne font-bold text-lg text-[#0D0D0D] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#FFD600] text-[#0D0D0D] font-semibold px-7 py-3.5 rounded-full hover:bg-[#F9A825] transition-colors shadow-yellow"
          >
            Commencer maintenant — c&apos;est gratuit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
