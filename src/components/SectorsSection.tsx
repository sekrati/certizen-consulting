'use client'

import { motion } from 'framer-motion'
import { Beef, Bird, Apple, Factory, Wheat, Cog } from 'lucide-react'

const sectors = [
  {
    icon: Factory,
    title: 'Industrie agroalimentaire',
    desc: 'Accompagnement global des industries de transformation alimentaire.',
    color: 'from-green-50 to-emerald-50',
  },
  {
    icon: Beef,
    title: 'Charcuterie',
    desc: 'Maîtrise des process de fabrication et conformité aux normes sanitaires.',
    color: 'from-rose-50 to-red-50',
  },
  {
    icon: Bird,
    title: 'Abattoirs avicoles',
    desc: 'Gestion de la sécurité alimentaire et traçabilité dans la filière volaille.',
    color: 'from-amber-50 to-yellow-50',
  },
  {
    icon: Apple,
    title: 'Fruits & légumes',
    desc: 'Systèmes HACCP adaptés aux spécificités des produits frais et transformés.',
    color: 'from-lime-50 to-green-50',
  },
  {
    icon: Wheat,
    title: 'Industrie alimentaire',
    desc: 'Optimisation des process et mise en conformité ISO 22000 / ISO 9001.',
    color: 'from-orange-50 to-amber-50',
  },
  {
    icon: Cog,
    title: 'Production industrielle',
    desc: 'Management QHSE et amélioration continue pour les sites de production.',
    color: 'from-blue-50 to-indigo-50',
  },
]

export default function SectorsSection() {
  return (
    <section id="formations" className="section-padding bg-cz-gray-light">
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
            Secteurs d&apos;activité
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            Nous intervenons dans votre{' '}
            <span className="gradient-text">secteur</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Une expertise multi-sectorielle pour répondre aux défis spécifiques
            de chaque industrie alimentaire.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-cz-gray-border/50 hover:border-cz-green/20 transition-all duration-300 cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-cz-green" />
                </div>
                <h3 className="font-heading font-bold text-lg text-cz-black mb-2 group-hover:text-cz-green transition-colors duration-300">
                  {sector.title}
                </h3>
                <p className="text-sm text-cz-gray leading-relaxed">{sector.desc}</p>

                {/* Bottom line */}
                <div className="mt-5 h-0.5 bg-gradient-to-r from-cz-green to-cz-green-light rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
