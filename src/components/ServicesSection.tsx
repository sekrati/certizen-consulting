'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck, Award, ClipboardCheck, Search,
  Utensils, BarChart3, GraduationCap, BadgeCheck,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Mise en place ISO 22000',
    desc: 'Déploiement complet du système de management de la sécurité des aliments selon la norme ISO 22000.',
    tag: 'Sécurité alimentaire',
  },
  {
    icon: Award,
    title: 'Accompagnement ISO 9001',
    desc: 'Implémentation et optimisation de votre système de management de la qualité version 2015.',
    tag: 'Qualité',
  },
  {
    icon: ClipboardCheck,
    title: 'Système HACCP',
    desc: 'Analyse des dangers et points critiques pour la maîtrise des risques alimentaires.',
    tag: 'HACCP',
  },
  {
    icon: Search,
    title: 'Audit interne',
    desc: 'Évaluation rigoureuse de votre système de management et identification des axes d\'amélioration.',
    tag: 'Audit',
  },
  {
    icon: Utensils,
    title: 'Consulting agroalimentaire',
    desc: 'Conseil stratégique et opérationnel pour les entreprises du secteur agroalimentaire.',
    tag: 'Consulting',
  },
  {
    icon: BarChart3,
    title: 'Management QHSE',
    desc: 'Intégration des systèmes Qualité, Hygiène, Sécurité et Environnement pour une gestion globale.',
    tag: 'QHSE',
  },
  {
    icon: GraduationCap,
    title: 'Formation du personnel',
    desc: 'Programmes de formation adaptés pour sensibiliser et former vos équipes aux normes et pratiques.',
    tag: 'Formation',
  },
  {
    icon: BadgeCheck,
    title: 'Préparation certification',
    desc: 'Accompagnement complet jusqu\'à l\'obtention de votre certification avec un suivi personnalisé.',
    tag: 'Certification',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-cz-gray-light">
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
            Nos services
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            Des expertises au service de votre{' '}
            <span className="gradient-text">réussite</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            CERTIZEN propose une gamme complète de services pour accompagner votre
            entreprise vers l&apos;excellence et la conformité aux standards internationaux.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-cz-gray-border/50 cursor-pointer"
              >
                {/* Top accent bar */}
                <div className="h-1 -mt-6 -mx-6 mb-6 rounded-t-2xl bg-gradient-to-r from-cz-green to-cz-green-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-cz-green-pale group-hover:bg-gradient-to-br group-hover:from-cz-green group-hover:to-cz-green-dark flex items-center justify-center mb-4 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cz-green group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Tag */}
                <span className="text-[10px] font-semibold tracking-widest uppercase text-cz-green bg-cz-green-pale px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>

                {/* Content */}
                <h3 className="font-heading font-bold text-base text-cz-black mt-3 mb-2 group-hover:text-cz-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-cz-gray leading-relaxed">{service.desc}</p>

                {/* CTA */}
                <div className="flex items-center gap-1 mt-5 text-cz-green text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
