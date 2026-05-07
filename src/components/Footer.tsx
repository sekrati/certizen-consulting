'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Formations', href: '#formations' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

const certifications = ['ISO 22000', 'ISO 9001', 'HACCP', 'QHSE', 'Audit interne', 'FSSC 22000']

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <footer className="bg-cz-black text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="CERTIZEN" fill className="object-contain p-0.5" />
              </div>
              <div>
                <p className="font-heading font-black text-lg tracking-wider">
                  CERTI<span className="text-cz-green">Z</span>EN
                </p>
                <p className="text-[10px] tracking-[0.2em] text-white/50 uppercase">Consulting</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Cabinet spécialisé en certification ISO, sécurité alimentaire et management QHSE.
              Votre partenaire de confiance pour l&apos;excellence opérationnelle.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-cz-green flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-cz-green transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white/40 mb-5">
              Expertises
            </h4>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert}>
                  <span className="flex items-center gap-2 text-sm text-white/60 hover:text-cz-green transition-colors duration-200 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-cz-green flex-shrink-0" />
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white/40 mb-5">
              Nous contacter
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '+212 6XX XXX XXX' },
                { icon: Mail, text: 'contact@certizen.ma' },
                { icon: MapPin, text: 'Casablanca, Maroc' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-cz-green" />
                  </div>
                  <span className="text-sm text-white/60">{text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter mini */}
            <div className="mt-6">
              <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cz-green transition-colors"
                />
                <button className="w-9 h-9 bg-cz-green rounded-lg flex items-center justify-center hover:bg-cz-green-dark transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} CERTIZEN Consulting. Tous droits réservés.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Conçu avec <Heart className="w-3 h-3 text-cz-green fill-cz-green" /> pour l&apos;excellence qualité
          </p>
          <div className="flex gap-4">
            {['Mentions légales', 'Confidentialité', 'CGU'].map((l) => (
              <a key={l} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
