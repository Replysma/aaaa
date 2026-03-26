import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CreatorFlow — Le dashboard tout-en-un pour créateurs TikTok, YouTube & Instagram',
  description:
    'Planifie tes publications, analyse tes performances et génère des scripts IA pour TikTok, YouTube et Instagram. Rejoint 12 000+ créateurs qui ont déjà boosté leur croissance.',
  keywords: [
    'créateur de contenu',
    'TikTok scheduler',
    'YouTube analytics',
    'Instagram planification',
    'scripts IA',
    'gestion réseaux sociaux',
    'CreatorFlow',
  ],
  openGraph: {
    title: 'CreatorFlow — Le dashboard tout-en-un pour créateurs',
    description:
      "Planifie, analyse et génère du contenu pour TikTok, YouTube et Instagram avec l'IA.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'CreatorFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreatorFlow — Dashboard créateurs de contenu',
    description:
      "Planifie, analyse et génère du contenu pour TikTok, YouTube et Instagram avec l'IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">{children}</body>
    </html>
  )
}
