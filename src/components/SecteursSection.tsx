'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { secteurs } from '@/lib/secteurs'

export default function SecteursSection() {
  return (
    <section id="secteurs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-tag justify-center">
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
            Nos secteurs
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            Nous intervenons dans{' '}
            <span className="gradient-text">15 secteurs</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Cliquez sur un secteur pour découvrir notre expertise, les certifications proposées et notre démarche d'accompagnement.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {secteurs.map((secteur, i) => (
            <motion.div
              key={secteur.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/secteurs/${secteur.slug}`}
                className="group flex flex-col h-full text-left bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover border border-cz-gray-border/50 hover:border-cz-green/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${secteur.colorPale} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {secteur.icon}
                </div>

                {/* Title */}
                <p className="font-heading font-bold text-sm text-cz-black leading-tight group-hover:text-cz-green transition-colors duration-300 flex-1">
                  {secteur.title}
                </p>

                {/* Tag */}
                <p className="text-[10px] text-cz-gray mt-1.5 leading-tight line-clamp-1">
                  {secteur.tag}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1 mt-3 text-cz-green text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Voir détails <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
