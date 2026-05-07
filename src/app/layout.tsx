import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CERTIZEN Consulting | Certification, Qualité & Sécurité Alimentaire',
  description:
    'CERTIZEN accompagne les entreprises dans la mise en place des systèmes de management et l\'obtention des certifications ISO 22000, ISO 9001, HACCP et QHSE.',
  keywords: [
    'ISO 22000', 'ISO 9001', 'HACCP', 'QHSE', 'sécurité alimentaire',
    'certification', 'consulting', 'audit interne', 'agroalimentaire',
    'système management qualité', 'formation', 'CERTIZEN',
  ],
  authors: [{ name: 'CERTIZEN Consulting' }],
  openGraph: {
    title: 'CERTIZEN Consulting | Certification, Qualité & Sécurité Alimentaire',
    description: 'Cabinet spécialisé en certification ISO, sécurité alimentaire et management QHSE.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
