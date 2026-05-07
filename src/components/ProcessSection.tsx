'use client'

import { motion } from 'framer-motion'
import { Search, BarChart2, Calendar, Rocket, GraduationCap, ClipboardCheck, BadgeCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse',
    desc: 'Étude approfondie de votre contexte organisationnel, de vos activités et de vos enjeux spécifiques.',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Diagnostic',
    desc: 'Évaluation de l\'état actuel de votre système par rapport aux exigences normatives.',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Planification',
    desc: 'Élaboration d\'un plan d\'action détaillé avec jalons, responsabilités et ressources nécessaires.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Mise en œuvre',
    desc: 'Déploiement opérationnel du système de management avec accompagnement terrain.',
  },
  {
    number: '05',
    icon: GraduationCap,
    title: 'Formation',
    desc: 'Sensibilisation et formation de vos équipes aux nouvelles procédures et exigences.',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Audit',
    desc: 'Réalisation d\'audits internes et préparation à l\'audit de certification externe.',
  },
  {
    number: '07',
    icon: BadgeCheck,
    title: 'Certification',
    desc: 'Obtention de la certification et mise en place du suivi pour le maintien de votre label.',
  },
]

export default function ProcessSection() {
  return (
    <section id="certifications" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag justify-center">
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
            Notre processus
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            7 étapes vers votre{' '}
            <span className="gradient-text">certification</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Une méthodologie éprouvée qui garantit votre succès à chaque étape du parcours.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cz-green/20 via-cz-green to-cz-green/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative lg:flex lg:items-center lg:gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } mb-8`}
                >
                  {/* Card */}
                  <div className={`lg:w-[calc(50%-3rem)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group bg-white border border-cz-gray-border/50 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-cz-green/20 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-10 h-10 rounded-xl bg-cz-green-pale group-hover:bg-gradient-to-br group-hover:from-cz-green group-hover:to-cz-green-dark flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <Icon className="w-5 h-5 text-cz-green group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-cz-green uppercase">
                            Étape {step.number}
                          </span>
                          <h3 className="font-heading font-bold text-lg text-cz-black">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-cz-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-cz-green to-cz-green-dark items-center justify-center flex-shrink-0 shadow-green-sm z-10 mx-auto">
                    <span className="font-heading font-black text-white text-sm">{step.number}</span>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-[calc(50%-3rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-10 bg-gradient-to-r from-cz-green to-cz-green-dark rounded-3xl text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <h3 className="font-heading font-black text-2xl md:text-3xl mb-3 relative z-10">
            Prêt à lancer votre parcours de certification ?
          </h3>
          <p className="text-white/80 mb-6 relative z-10">
            Contactez nos experts et obtenez un diagnostic gratuit sous 48h.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-white text-cz-green font-bold px-8 py-4 rounded-xl hover:bg-cz-green-pale transition-colors duration-300 relative z-10"
          >
            Démarrer maintenant
            <BadgeCheck className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
