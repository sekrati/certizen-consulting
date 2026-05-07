'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Target, Shield, TrendingUp, Users } from 'lucide-react'

const stats = [
  { value: '10+', label: "Années d'expérience" },
  { value: '200+', label: 'Entreprises accompagnées' },
  { value: '98%', label: 'Taux de réussite' },
  { value: '50+', label: 'Experts formés' },
]

const values = [
  { icon: Target, title: 'Qualité', desc: 'Systèmes de management conformes aux exigences internationales.' },
  { icon: Shield, title: 'Sécurité alimentaire', desc: 'Maîtrise des risques tout au long de la chaîne alimentaire.' },
  { icon: CheckCircle, title: 'Conformité', desc: 'Respect des normes réglementaires et des standards ISO.' },
  { icon: TrendingUp, title: 'Amélioration continue', desc: 'Accompagnement vers l\'excellence opérationnelle durable.' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="apropos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative z-10 bg-gradient-to-br from-cz-green-pale to-white rounded-3xl p-10 border border-cz-green/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16">
                  <Image src="/logo.png" alt="CERTIZEN" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl text-cz-black">
                    CERTI<span className="text-cz-green">Z</span>EN
                  </h3>
                  <p className="text-cz-gray text-sm">Consulting</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-5 shadow-card border border-cz-gray-border/50 text-center"
                  >
                    <p className="font-heading font-black text-3xl gradient-text mb-1">{s.value}</p>
                    <p className="text-xs text-cz-gray leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-cz-green/5 rounded-3xl -z-10 rotate-6" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cz-green/8 rounded-2xl -z-10 -rotate-3" />
          </motion.div>

          {/* Right: content */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <p className="section-tag">
                <span className="w-8 h-[2px] bg-cz-green inline-block" />
                À propos de nous
              </p>
              <h2 className="section-title mt-3">
                Un partenaire de confiance pour votre{' '}
                <span className="gradient-text">excellence</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="section-subtitle">
              Fondé par des experts passionnés, CERTIZEN est un cabinet spécialisé dans
              l&apos;accompagnement des entreprises vers l&apos;excellence opérationnelle.
              Nous combinons expertise terrain et maîtrise des référentiels internationaux
              pour vous guider vers la certification.
            </motion.p>

            <motion.p variants={fadeUp} className="text-cz-gray leading-relaxed">
              Notre approche sur mesure garantit que chaque entreprise, quelle que soit
              sa taille, bénéficie d&apos;un accompagnement adapté à ses enjeux et à sa culture.
              Nous ne nous contentons pas de vous certifier — nous transformons votre organisation.
            </motion.p>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-cz-green-pale transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cz-green-pale group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-cz-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-cz-black text-sm mb-1">{title}</p>
                    <p className="text-xs text-cz-gray leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-cz-green to-cz-green-dark flex items-center justify-center text-white text-xs font-bold"
                  >
                    {['E', 'A', 'C', 'M'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-cz-black">Notre équipe d&apos;experts</p>
                <p className="text-xs text-cz-gray">Consultants certifiés & auditeurs qualifiés</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
