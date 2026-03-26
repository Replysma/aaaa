'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#FFD600] py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0D0D] leading-tight">
            Prêt à faire décoller
            <br className="hidden sm:block" /> ta création de contenu ?
          </h2>

          <p className="text-[#0D0D0D]/70 text-lg max-w-xl">
            Rejoins 12 000+ créateurs qui ont déjà automatisé leur workflow et boosté
            leur croissance avec CreatorFlow.
          </p>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 bg-[#0D0D0D] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-colors text-base shadow-lg"
          >
            Essai gratuit 14 jours — aucune CB requise
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="text-[#0D0D0D]/50 text-sm">
            ✓ Setup en 2 minutes &nbsp;·&nbsp; ✓ Sans engagement &nbsp;·&nbsp; ✓ Annulation en 1 clic
          </p>
        </motion.div>
      </div>
    </section>
  )
}
