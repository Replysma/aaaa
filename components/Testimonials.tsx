'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Sofia Laurent',
    niche: 'Lifestyle & Voyage',
    subs: '340K abonnés',
    initials: 'SL',
    avatarBg: '#E8D5FF',
    avatarText: '#7C3AED',
    quote:
      'CreatorFlow a complètement changé ma façon de travailler. Je gagne 8 heures par semaine et mes stats sont montées de 40% depuis que je publie aux bons moments. Le script IA est bluffant.',
  },
  {
    name: 'Tom Mercier',
    niche: 'Tech & Productivity',
    subs: '220K abonnés',
    initials: 'TM',
    avatarBg: '#D0F5E8',
    avatarText: '#059669',
    quote:
      'En tant que créateur tech, j\'ai testé tous les outils du marché. CreatorFlow est le seul qui unifie vraiment les 3 plateformes sans friction. Le dashboard analytics est exactement ce dont j\'avais besoin.',
  },
  {
    name: 'Ambre Martin',
    niche: 'Beauty & Lifestyle',
    subs: '560K abonnés',
    initials: 'AM',
    avatarBg: '#FFE4E8',
    avatarText: '#DB2777',
    quote:
      'J\'ai doublé mon rythme de publication sans doubler mon temps de travail. Le générateur de hashtags m\'a donné +60% de portée organique sur Instagram en un mois. Indispensable.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[#FFD600] text-lg leading-none">★</span>
      ))}
    </div>
  )
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FFFDE7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-white border border-yellow-DEFAULT/30 text-yellow-dark text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0D0D0D]">
            Ils ont tout changé avec CreatorFlow
          </h2>
          <p className="mt-4 text-gray-500">
            Des milliers de créateurs ont déjà transformé leur workflow. Voici ce qu&apos;ils en disent.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-yellow-DEFAULT/20 shadow-yellow-sm flex flex-col gap-4 cursor-default"
            >
              <Stars />
              <p className="text-[#0D0D0D] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-syne"
                  style={{ backgroundColor: t.avatarBg, color: t.avatarText }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0D0D0D] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.niche} · {t.subs}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
