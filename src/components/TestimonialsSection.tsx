'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Karim Benali',
    role: 'Directeur Qualité',
    company: 'Industrie Alimentaire Benali',
    text: 'Grâce à CERTIZEN, nous avons obtenu notre certification ISO 22000 en un temps record. Leur expertise et leur accompagnement personnalisé ont été déterminants. L\'équipe est professionnelle, disponible et vraiment à l\'écoute de nos besoins.',
    rating: 5,
    initials: 'KB',
    color: 'from-emerald-400 to-green-600',
  },
  {
    name: 'Fatima Zahra Idrissi',
    role: 'Responsable QHSE',
    company: 'Abattoir Avicole du Nord',
    text: 'Une équipe remarquable qui maîtrise parfaitement les exigences du secteur avicole. Le système HACCP mis en place par CERTIZEN a transformé notre approche de la sécurité alimentaire. Je recommande vivement leurs services.',
    rating: 5,
    initials: 'FI',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Ahmed Cherkaoui',
    role: 'PDG',
    company: 'Charcuterie Atlas',
    text: 'CERTIZEN nous a accompagnés avec professionnalisme et rigueur tout au long de notre démarche ISO 9001. Leur connaissance du terrain et leur pédagogie ont facilité l\'adhésion de toutes nos équipes.',
    rating: 5,
    initials: 'AC',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Nadia Mansouri',
    role: 'Directrice Générale',
    company: 'Fruits & Légumes Premium',
    text: 'Un cabinet de très haut niveau. La méthodologie structurée de CERTIZEN et le suivi post-certification sont exemplaires. Nous avons renouvelé notre certification sans aucune non-conformité. Un vrai partenaire stratégique.',
    rating: 5,
    initials: 'NM',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Youssef Tazi',
    role: 'Responsable Production',
    company: 'Conserverie Moderne',
    text: 'La formation dispensée par CERTIZEN a considérablement amélioré la compétence de nos équipes. Approche pédagogique excellente, formateurs experts et contenu adapté à notre secteur. Un investissement rentable.',
    rating: 5,
    initials: 'YT',
    color: 'from-teal-400 to-cyan-600',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="section-padding bg-cz-gray-light overflow-hidden">
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
            Témoignages
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            Ce que disent nos <span className="gradient-text">clients</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Des entreprises qui nous font confiance et partagent leur expérience avec CERTIZEN.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-cz-green to-cz-green-dark rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-5">
            <Quote className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-white text-xl leading-relaxed font-light mb-8 italic"
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={current + 'author'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-white/70 text-sm">{testimonials[current].role} — {testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card border border-cz-gray-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-cz-gray leading-relaxed line-clamp-4 mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-cz-black text-sm">{t.name}</p>
                  <p className="text-xs text-cz-gray">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-2.5 bg-cz-green' : 'w-2.5 h-2.5 bg-cz-gray-border hover:bg-cz-green/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
