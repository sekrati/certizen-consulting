'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+212 616 108 737',
    sub: 'Lun-Sam, 8h-18h',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'certizenconsulting@gmail.com',
    sub: 'Réponse sous 24h',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Casablanca, Maroc',
    sub: 'Interventions nationales',
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: 'Lun - Sam',
    sub: '8h00 – 18h00',
  },
]

const services = [
  'ISO 22000', 'ISO 9001', 'IFS', 'BRCGS',
  'Audit interne', 'Formation', 'Autre',
]

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="section-padding bg-white">
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
            Contact
            <span className="w-8 h-[2px] bg-cz-green inline-block" />
          </p>
          <h2 className="section-title mt-3">
            Parlons de votre <span className="gradient-text">projet</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Obtenez un diagnostic gratuit et découvrez comment CERTIZEN peut vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Intro card */}
            <div className="bg-gradient-to-br from-cz-green to-cz-green-dark rounded-2xl p-7 text-white">
              <MessageSquare className="w-10 h-10 mb-4 text-white/70" />
              <h3 className="font-heading font-bold text-xl mb-3">
                Démarrons ensemble
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Chaque projet commence par un échange. Dites-nous ce dont vous avez besoin,
                et nous vous proposerons la solution la plus adaptée.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-cz-gray-light rounded-xl border border-cz-gray-border/50 hover:border-cz-green/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-cz-green-pale flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cz-green" />
                  </div>
                  <div>
                    <p className="text-xs text-cz-gray">{label}</p>
                    <p className="font-semibold text-cz-black text-sm">{value}</p>
                    <p className="text-xs text-cz-gray">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-48 bg-cz-green-pale rounded-2xl overflow-hidden border border-cz-green/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <MapPin className="w-8 h-8 text-cz-green mb-2" />
                <p className="text-sm font-semibold text-cz-black">Casablanca, Maroc</p>
                <p className="text-xs text-cz-gray mt-1">Interventions sur tout le Maroc</p>
                <div className="mt-3 px-4 py-1.5 bg-cz-green text-white text-xs rounded-full font-medium">
                  Voir sur la carte
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #39B54A 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-card-hover border border-cz-gray-border/50 p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-cz-green-pale flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-cz-green" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-cz-black mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-cz-gray max-w-sm">
                    Notre équipe vous contactera dans les 24h pour discuter de votre projet.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 btn-outline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-bold text-xl text-cz-black mb-6">
                    Demande de devis gratuit
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Nom complet', placeholder: 'Votre nom', type: 'text' },
                      { name: 'email', label: 'Email', placeholder: 'votre@email.com', type: 'email' },
                      { name: 'phone', label: 'Téléphone', placeholder: '+212 6XX XXX XXX', type: 'tel' },
                      { name: 'company', label: 'Entreprise', placeholder: 'Nom de votre entreprise', type: 'text' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-cz-gray-dark mb-1.5">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-cz-gray-border focus:border-cz-green focus:ring-2 focus:ring-cz-green/20 outline-none transition-all text-sm text-cz-black placeholder-cz-gray bg-cz-gray-light/50"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cz-gray-dark mb-1.5">
                      Service souhaité
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cz-gray-border focus:border-cz-green focus:ring-2 focus:ring-cz-green/20 outline-none transition-all text-sm text-cz-black bg-cz-gray-light/50"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cz-gray-dark mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez votre projet et vos besoins..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cz-gray-border focus:border-cz-green focus:ring-2 focus:ring-cz-green/20 outline-none transition-all text-sm text-cz-black placeholder-cz-gray bg-cz-gray-light/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-cz-gray text-center">
                    Réponse garantie sous 24h · Diagnostic gratuit sans engagement
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
