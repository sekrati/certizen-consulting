'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, HeartHandshake, Factory, Puzzle, BookOpen } from 'lucide-react'

const stats = [
  { value: 200, suffix: '+', label: 'Entreprises certifiées' },
  { value: 10, suffix: '+', label: "Années d'expertise" },
  { value: 98, suffix: '%', label: 'Taux de réussite' },
  { value: 50, suffix: '+', label: 'Formations dispensées' },
]

const reasons = [
  {
    icon: Lightbulb,
    title: 'Expertise terrain',
    desc: "Nos consultants interviennent directement dans vos locaux avec une connaissance pointue des contraintes réelles de l'industrie.",
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement personnalisé',
    desc: "Chaque mission est unique. Nous adaptons notre méthodologie à vos spécificités, vos objectifs et votre culture d'entreprise.",
  },
  {
    icon: Factory,
    title: 'Expérience industrielle',
    desc: 'Une connaissance approfondie des secteurs agroalimentaires, de la production jusqu\'à la distribution.',
  },
  {
    icon: Puzzle,
    title: 'Solutions adaptées',
    desc: 'Des recommandations pragmatiques et réalisables, alignées avec vos contraintes opérationnelles et budgétaires.',
  },
  {
    icon: BookOpen,
    title: 'Méthodologie professionnelle',
    desc: 'Une approche structurée et éprouvée qui garantit des résultats durables et mesurables pour votre organisation.',
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const start = Date.now()
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading font-black text-4xl lg:text-5xl gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
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
            Pourquoi CERTIZEN
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            Ce qui nous <span className="gradient-text">distingue</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 p-8 bg-gradient-to-r from-cz-green-pale via-white to-cz-green-pale rounded-3xl border border-cz-green/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <p className="text-sm text-cz-gray mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group relative p-7 rounded-2xl border transition-all duration-300 cursor-default hover:-translate-y-1 ${
                  i === 0
                    ? 'bg-gradient-to-br from-cz-green to-cz-green-dark text-white border-transparent shadow-green-md'
                    : 'bg-white border-cz-gray-border/50 shadow-card hover:shadow-card-hover hover:border-cz-green/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  i === 0 ? 'bg-white/20' : 'bg-cz-green-pale group-hover:bg-gradient-to-br group-hover:from-cz-green group-hover:to-cz-green-dark transition-all duration-300'
                }`}>
                  <Icon className={`w-6 h-6 ${i === 0 ? 'text-white' : 'text-cz-green group-hover:text-white transition-colors duration-300'}`} />
                </div>
                <h3 className={`font-heading font-bold text-lg mb-3 ${i === 0 ? 'text-white' : 'text-cz-black'}`}>
                  {reason.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/85' : 'text-cz-gray'}`}>
                  {reason.desc}
                </p>
                {i === 0 && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">★</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
