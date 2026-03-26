'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import {
  CalendarDays,
  BarChart3,
  Bot,
  LayoutGrid,
  Hash,
  Users,
} from 'lucide-react'

const features = [
  {
    icon: CalendarDays,
    title: 'Planification multi-plateformes',
    desc: 'Programme tes posts TikTok, YouTube et Instagram depuis un calendrier unique. Publie au meilleur moment automatiquement.',
  },
  {
    icon: BarChart3,
    title: 'Analytics unifié',
    desc: 'Consolide toutes tes métriques en un tableau de bord : vues, abonnés, taux d\'engagement et revenus par plateforme.',
  },
  {
    icon: Bot,
    title: 'Générateur de scripts IA',
    desc: 'Donne un sujet, un ton et une durée. Notre IA rédige un script complet avec hook, développement et call-to-action.',
  },
  {
    icon: LayoutGrid,
    title: 'Calendrier éditorial',
    desc: 'Visualise ton planning de contenu sur semaine ou mois. Glisse-dépose tes posts et repère les trous en un coup d\'œil.',
  },
  {
    icon: Hash,
    title: 'Hashtag Suggester',
    desc: 'Analyse ta niche et suggère les meilleurs hashtags pour maximiser ta portée organique sur chaque plateforme.',
  },
  {
    icon: Users,
    title: 'Collaboration équipe',
    desc: 'Invite editors, community managers et brand managers. Assignez des rôles et validez les posts avant publication.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="features" className="py-20 lg:py-28 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-yellow-light text-yellow-dark text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Fonctionnalités
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0D0D0D] max-w-2xl mx-auto">
            Tout ce dont tu as besoin pour{' '}
            <span className="text-gradient-yellow">scaler ta présence</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Six outils puissants dans une seule app. Fini de payer 6 abonnements pour 6 outils qui ne se parlent pas.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: '0 8px 40px rgba(255, 214, 0, 0.2)' }}
                className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default transition-shadow"
              >
                <div className="w-12 h-12 bg-[#FFD600] rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#0D0D0D]" />
                </div>
                <h3 className="font-syne font-bold text-[#0D0D0D] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
