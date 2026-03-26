'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Users, Eye } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

const stats = [
  { platform: 'TikTok', value: '+12.4K', label: 'abonnés ce mois', color: '#010101', icon: '♪' },
  { platform: 'YouTube', value: '+3.2K', label: 'nouveaux vues', color: '#FF0000', icon: '▶' },
  { platform: 'Instagram', value: '+8.7K', label: 'impressions', color: '#E1306C', icon: '◆' },
]

const barData = [40, 65, 50, 80, 70, 95, 85]
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(255,214,0,0.18) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-soft/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col items-start gap-6">
            {/* Badge pill */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 bg-yellow-light border border-yellow-DEFAULT/40 text-[#0D0D0D] text-xs font-semibold px-4 py-2 rounded-full"
            >
              <span>✨</span>
              <span>Nouveau : Génération IA de scripts</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-[#0D0D0D]"
            >
              Crée du contenu{' '}
              <span className="text-gradient-yellow">viral</span>
              <br />
              sans te noyer dans les outils
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-500 text-lg leading-relaxed max-w-xl"
            >
              CreatorFlow unifie tes publications TikTok, YouTube et Instagram,
              centralise tes analytics et génère tes scripts en secondes grâce à l&apos;IA.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <a
                href="#pricing"
                className="group flex items-center justify-center gap-2 bg-[#FFD600] text-[#0D0D0D] font-semibold px-6 py-3.5 rounded-full hover:bg-[#F9A825] transition-all shadow-yellow"
              >
                Essai gratuit 14 jours
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 border-2 border-gray-200 text-[#0D0D0D] font-semibold px-6 py-3.5 rounded-full hover:border-[#FFD600] hover:bg-yellow-light transition-all"
              >
                <Play size={16} className="fill-current" />
                Voir la démo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xs text-gray-400"
            >
              ✓ Aucune CB requise &nbsp;·&nbsp; ✓ Annulation à tout moment &nbsp;·&nbsp; ✓ Setup en 2 min
            </motion.p>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-[520px]"
            >
              {/* Window chrome */}
              <div className="bg-white rounded-2xl shadow-yellow border border-gray-100 overflow-hidden">
                {/* macOS topbar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#F7F7F7] border-b border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-center border border-gray-200">
                      app.creatorflow.io/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="flex" style={{ minHeight: 340 }}>
                  {/* Sidebar */}
                  <div className="w-14 bg-[#0D0D0D] flex flex-col items-center py-4 gap-4">
                    <div className="w-8 h-8 bg-[#FFD600] rounded-xl flex items-center justify-center text-[10px] font-extrabold font-syne">
                      CF
                    </div>
                    {['◉', '◈', '◧', '◦'].map((icon, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                          i === 0 ? 'bg-[#FFD600]/20 text-[#FFD600]' : 'text-gray-600'
                        }`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 bg-[#F7F7F7]">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Vue d&apos;ensemble · Mars 2026
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {stats.map((s) => (
                        <div key={s.platform} className="bg-white rounded-xl p-2.5 border border-gray-100">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-[10px]" style={{ color: s.color }}>
                              {s.icon}
                            </span>
                            <span className="text-[9px] text-gray-400 font-medium">{s.platform}</span>
                          </div>
                          <p className="text-sm font-extrabold font-syne text-[#0D0D0D]">{s.value}</p>
                          <p className="text-[9px] text-gray-400 leading-tight">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bar chart */}
                    <div className="bg-white rounded-xl p-3 border border-gray-100 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-semibold text-[#0D0D0D]">Engagement cette semaine</p>
                        <div className="flex items-center gap-1 text-[9px] text-green-500 font-semibold">
                          <TrendingUp size={10} />
                          +24%
                        </div>
                      </div>
                      <div className="flex items-end gap-1.5 h-14">
                        {barData.map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full rounded-sm"
                              style={{
                                height: `${h}%`,
                                background:
                                  i === 5
                                    ? 'linear-gradient(to top, #FFD600, #F9A825)'
                                    : '#E5E7EB',
                              }}
                            />
                            <span className="text-[8px] text-gray-400">{days[i]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming posts */}
                    <div className="bg-white rounded-xl p-2.5 border border-gray-100">
                      <p className="text-[9px] font-semibold text-gray-400 uppercase mb-2">
                        Prochaines publications
                      </p>
                      {[
                        { title: 'Mon routine matinale 🌅', platform: 'TikTok', time: 'Demain 9h' },
                        { title: 'Review produit tech', platform: 'YouTube', time: 'Ven. 14h' },
                      ].map((post) => (
                        <div key={post.title} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                          <div>
                            <p className="text-[10px] font-medium text-[#0D0D0D]">{post.title}</p>
                            <p className="text-[9px] text-gray-400">{post.platform}</p>
                          </div>
                          <span className="text-[9px] bg-yellow-light text-yellow-dark font-semibold px-2 py-0.5 rounded-full">
                            {post.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
              >
                <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp size={14} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0D0D0D]">+340 abonnés</p>
                  <p className="text-[9px] text-gray-400">Aujourd&apos;hui</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-4 bottom-1/4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2"
              >
                <div className="w-7 h-7 bg-yellow-light rounded-full flex items-center justify-center text-xs">
                  🤖
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0D0D0D]">Script généré</p>
                  <p className="text-[9px] text-gray-400">en 3 secondes</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
