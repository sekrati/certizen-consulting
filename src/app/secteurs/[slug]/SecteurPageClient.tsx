'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'
import type { Secteur } from '@/lib/secteurs'
import { secteurs } from '@/lib/secteurs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function SecteurPageClient({ secteur }: { secteur: Secteur }) {
  const others = secteurs.filter((s) => s.slug !== secteur.slug).slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* ── Navbar mini ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="CERTIZEN" fill className="object-contain" />
            </div>
            <span className="font-heading font-black text-base tracking-wider text-gray-900">
              CERTI<span className="text-cz-green">Z</span>EN
            </span>
          </Link>
          <Link
            href="/#secteurs"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-cz-green transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les secteurs
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className={`bg-gradient-to-br ${secteur.colorPale} py-20 relative overflow-hidden`}>
        {/* Background dots */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #39B54A 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-10"
          >
            <Link href="/" className="hover:text-cz-green transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#secteurs" className="hover:text-cz-green transition-colors">Secteurs</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-cz-green font-medium">{secteur.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-lg text-4xl mb-6"
              >
                {secteur.icon}
              </motion.div>

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/80 border border-cz-green/20 rounded-full px-4 py-1.5 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-cz-green" />
                <span className="text-cz-green text-xs font-bold tracking-wide uppercase">{secteur.tag}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-heading text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5"
              >
                {secteur.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 text-lg leading-relaxed mb-8"
              >
                {secteur.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/#contact" className="btn-primary group">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/#secteurs" className="btn-outline">
                  Voir tous les secteurs
                </Link>
              </motion.div>
            </div>

            {/* Certifications pill list */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
                  Certifications proposées
                </p>
                <div className="space-y-3">
                  {secteur.certifications.map((cert, i) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-cz-green-pale transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cz-green-pale group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                        <CheckCircle className="w-4 h-4 text-cz-green" />
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-14">

            {/* Description longue */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="section-tag">
                <span className="w-6 h-[2px] bg-cz-green inline-block" />
                Notre expertise
              </p>
              <h2 className="font-heading text-2xl font-black text-gray-900 mt-3 mb-5">
                CERTIZEN dans le secteur {secteur.title}
              </h2>
              {secteur.descriptionLong.map((para, i) => (
                <p key={i} className="text-gray-500 leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>

            {/* Avantages */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <p className="section-tag">
                <span className="w-6 h-[2px] bg-cz-green inline-block" />
                Ce que vous gagnez
              </p>
              <h2 className="font-heading text-2xl font-black text-gray-900 mt-3 mb-6">
                Les bénéfices pour votre entreprise
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {secteur.avantages.map((av, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-cz-green/20 hover:bg-cz-green-pale transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-xl bg-cz-green-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-cz-green" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{av}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <p className="section-tag">
                <span className="w-6 h-[2px] bg-cz-green inline-block" />
                Notre démarche
              </p>
              <h2 className="font-heading text-2xl font-black text-gray-900 mt-3 mb-6">
                Comment nous vous accompagnons
              </h2>
              <div className="space-y-4">
                {secteur.process.map((step, i) => (
                  <motion.div
                    key={step.step}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-cz-green/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cz-green to-cz-green-dark flex items-center justify-center flex-shrink-0 text-white font-heading font-black text-sm shadow-green-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 mb-1 group-hover:text-cz-green transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cz-green to-cz-green-dark rounded-3xl p-7 text-white sticky top-24"
            >
              <div className="text-3xl mb-4">{secteur.icon}</div>
              <h3 className="font-heading font-black text-xl mb-3">
                Prêt pour votre certification ?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Nos experts en {secteur.title.toLowerCase()} analysent votre situation gratuitement sous 48h.
              </p>
              <Link
                href="/#contact"
                className="block w-full text-center bg-white text-cz-green font-bold py-3.5 rounded-xl hover:bg-cz-green-pale transition-colors text-sm"
              >
                Demander un diagnostic gratuit
              </Link>
              <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <CheckCircle className="w-4 h-4 text-white/50" />
                  Réponse garantie sous 48h
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <CheckCircle className="w-4 h-4 text-white/50" />
                  Diagnostic 100% gratuit
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <CheckCircle className="w-4 h-4 text-white/50" />
                  Sans engagement
                </div>
              </div>
            </motion.div>

            {/* Certifications (mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:hidden bg-white rounded-3xl border border-gray-100 shadow-card p-6"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {secteur.certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1.5 bg-cz-green-pale text-cz-green text-xs font-bold rounded-full border border-cz-green/20">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Autres secteurs ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-16 border-t border-gray-100"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-tag">
                <span className="w-6 h-[2px] bg-cz-green inline-block" />
                Autres secteurs
              </p>
              <h3 className="font-heading font-black text-2xl text-gray-900 mt-2">
                Découvrez nos autres expertises
              </h3>
            </div>
            <Link href="/#secteurs" className="hidden sm:flex items-center gap-2 text-cz-green font-semibold text-sm hover:underline">
              Voir tous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/secteurs/${s.slug}`}
                  className="group block bg-white rounded-2xl p-5 border border-gray-100 hover:border-cz-green/25 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.colorPale} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {s.icon}
                  </div>
                  <p className="font-heading font-bold text-sm text-gray-900 group-hover:text-cz-green transition-colors">
                    {s.title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-cz-green text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Voir détails <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Footer mini ── */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg p-1">
              <Image src="/logo.png" alt="CERTIZEN" width={28} height={28} className="object-contain" />
            </div>
            <span className="font-heading font-black text-sm tracking-wider">
              CERTI<span className="text-cz-green">Z</span>EN <span className="font-normal text-white/40">Consulting</span>
            </span>
          </div>
          <p className="text-white/40 text-xs">© 2025 CERTIZEN Consulting. Tous droits réservés.</p>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← Retour au site
          </Link>
        </div>
      </footer>
    </div>
  )
}
