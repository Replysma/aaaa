import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const footerLinks = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Mises à jour', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Ressources: [
    { label: 'Blog créateurs', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Tutoriels vidéo', href: '#' },
    { label: 'Communauté', href: '#' },
  ],
  Légal: [
    { label: 'Conditions d\'utilisation', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Mentions légales', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter / X' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="font-syne text-xl font-extrabold text-white">
              Creator<span className="text-[#FFD600]">Flow</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Le dashboard tout-en-un pour créateurs TikTok, YouTube et Instagram.
              Planifie, analyse et crée avec l&apos;IA.
            </p>
            {/* Socials */}
            <div className="flex gap-2 mt-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FFD600] hover:text-[#0D0D0D] transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-syne font-bold text-sm text-white mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} CreatorFlow. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
              Conditions
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
