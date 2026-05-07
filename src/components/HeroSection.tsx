'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Shield, Award, TrendingUp } from 'lucide-react'

const trusts = [
  { icon: Shield, label: 'ISO 22000' },
  { icon: Award, label: 'ISO 9001' },
  { icon: CheckCircle, label: 'IFS' },
  { icon: TrendingUp, label: 'BRCGS' },
]

const floatVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-cz-green-pale to-white"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cz-green/10 to-cz-green-light/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-cz-green/8 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cz-green/5 blur-2xl"
        />

        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #39B54A 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-[8%] w-16 h-16 border-2 border-cz-green/20 rounded-xl rotate-12"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-40 right-[15%] w-10 h-10 bg-cz-green/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/2 left-[5%] w-8 h-8 border-2 border-cz-green/20 rotate-45"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-cz-green-pale border border-cz-green/20 rounded-full px-4 py-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-cz-green animate-pulse" />
            <span className="text-cz-green text-sm font-semibold tracking-wide">
              Cabinet de Consulting Certifié
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-cz-black"
          >
            Votre partenaire en{' '}
            <span className="gradient-text">certification,</span>{' '}
            qualité &amp; amélioration{' '}
            <span className="relative">
              continue
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cz-green to-cz-green-light rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-cz-gray text-lg leading-relaxed max-w-xl"
          >
            CERTIZEN accompagne les entreprises dans la mise en place des systèmes
            de management et l&apos;obtention des certifications ISO, avec une approche
            personnalisée et une expertise terrain reconnue.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('services')}
              className="btn-primary group text-base px-8 py-4"
            >
              Nos services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline text-base px-8 py-4"
            >
              Contactez-nous
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            {trusts.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/80 border border-cz-gray-border rounded-full px-4 py-2 shadow-card"
              >
                <Icon className="w-4 h-4 text-cz-green" />
                <span className="text-xs font-semibold text-cz-gray-dark">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Main card */}
          <div className="relative z-10 bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.12)] overflow-hidden border border-cz-gray-border/50 p-1">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-cz-green-pale to-white flex items-center justify-center">
              {/* Industry visual illustration */}
              <div className="text-center p-8">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-40 h-40 mx-auto mb-6 relative"
                >
                  <Image src="/logo.png" alt="CERTIZEN" fill className="object-contain" />
                </motion.div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {['ISO 22000', 'ISO 9001', 'HACCP', 'QHSE'].map((cert) => (
                    <div key={cert} className="bg-white rounded-xl p-3 shadow-card border border-cz-green/10">
                      <CheckCircle className="w-5 h-5 text-cz-green mb-1 mx-auto" />
                      <p className="text-xs font-bold text-cz-black text-center">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-10 top-12 bg-white rounded-2xl shadow-card-hover border border-cz-gray-border/50 p-4 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cz-green-pale flex items-center justify-center">
                <Award className="w-5 h-5 text-cz-green" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-cz-black">+200</p>
                <p className="text-xs text-cz-gray">Entreprises accompagnées</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-8 bottom-16 bg-white rounded-2xl shadow-card-hover border border-cz-gray-border/50 p-4 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cz-green-pale flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cz-green" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-cz-black">98%</p>
                <p className="text-xs text-cz-gray">Taux de réussite</p>
              </div>
            </div>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-gradient-to-br from-cz-green/8 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full text-white fill-current" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
