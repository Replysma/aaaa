'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'

const beforeItems = [
  {
    title: 'Tu jongle entre 5 apps différentes',
    desc: 'Buffer, Later, Hootsuite, Notion, Google Sheets... chaque outil dans son propre onglet, chaque workflow cassé.',
  },
  {
    title: 'Tes analytics sont éparpillés partout',
    desc: 'Les stats TikTok ici, YouTube Studio là, Instagram Insights ailleurs. Impossible de voir la vraie performance globale.',
  },
  {
    title: 'Tu passes des heures à écrire des scripts',
    desc: 'Brainstorm, structure, rédaction, reformulation... Autant de temps volé à la création et au montage.',
  },
]

const afterItems = [
  {
    title: 'Un seul dashboard pour publier partout',
    desc: 'Planifie et publie sur TikTok, YouTube et Instagram depuis une interface unique. Fini le copier-coller.',
  },
  {
    title: 'Toutes tes métriques unifiées en temps réel',
    desc: 'Vue 360° de ta croissance : abonnés, vues, taux d\'engagement et revenus, toutes plateformes confondues.',
  },
  {
    title: 'Notre IA génère scripts et hashtags en secondes',
    desc: 'Donne un sujet, choisis un ton, reçois un script prêt à l\'emploi avec hooks, hashtags et appel à l\'action.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="problem" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-yellow-light text-yellow-dark text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Le problème
          </span>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0D0D0D]">
            La création de contenu ne devrait pas ressembler à un{' '}
            <span className="text-gradient-yellow">chaos organisé</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Before */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <X size={14} className="text-red-500" />
              </div>
              <h3 className="font-syne font-bold text-lg text-[#0D0D0D]">Sans CreatorFlow</h3>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col gap-4"
            >
              {beforeItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className="bg-[#FFF5F5] border border-red-200 rounded-2xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <X size={16} className="text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#0D0D0D] mb-1 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check size={14} className="text-green-500" />
              </div>
              <h3 className="font-syne font-bold text-lg text-[#0D0D0D]">Avec CreatorFlow</h3>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col gap-4"
            >
              {afterItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="bg-[#F1FFF4] border border-green-200 rounded-2xl p-5 cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#0D0D0D] mb-1 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
