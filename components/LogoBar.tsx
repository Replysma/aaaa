import { Rocket } from 'lucide-react'

function TikTokLogo() {
  return (
    <svg height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0D0D0D]">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  )
}

function YouTubeLogo() {
  return (
    <svg height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF0000]">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.12C19.54 3.58 12 3.58 12 3.58s-7.54 0-9.38.49A3.02 3.02 0 00.5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 002.12 2.12C4.46 20.42 12 20.42 12 20.42s7.54 0 9.38-.49a3.02 3.02 0 002.12-2.12C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.27V8.73l6.27 3.27-6.27 3.27z" />
    </svg>
  )
}

function InstagramLogo() {
  return (
    <svg height="32" viewBox="0 0 24 24" fill="none" className="text-[#E1306C]">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#FCAF45" />
          <stop offset="50%" stopColor="#F77737" />
          <stop offset="75%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  )
}

export default function LogoBar() {
  return (
    <section className="bg-[#F7F7F7] border-y border-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          Compatible avec les plateformes que tu utilises déjà
        </p>

        <div className="flex items-center gap-12 sm:gap-16 flex-wrap justify-center">
          <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <TikTokLogo />
            <span className="font-syne font-bold text-lg text-[#0D0D0D]">TikTok</span>
          </div>
          <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <YouTubeLogo />
            <span className="font-syne font-bold text-lg text-[#FF0000]">YouTube</span>
          </div>
          <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <InstagramLogo />
            <span className="font-syne font-bold text-lg text-[#E1306C]">Instagram</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white border border-yellow-DEFAULT/30 text-[#0D0D0D] text-sm font-semibold px-5 py-2.5 rounded-full shadow-yellow-sm">
          <Rocket size={16} className="text-yellow-dark" />
          12 000+ créateurs actifs 🚀
        </div>
      </div>
    </section>
  )
}
