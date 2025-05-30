"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Here you would integrate with your email service
      // For example: EmailJS, Resend, or a custom API endpoint

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">{t.contact.title}</h1>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background rounded-lg shadow-lg p-8 border border-secondary">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-background py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.send}
              </button>

              {submitStatus === "success" && (
                <div className="text-green-600 text-center font-medium">{t.contact.form.success}</div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-600 text-center font-medium">{t.contact.form.error}</div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background rounded-lg shadow-lg p-8 border border-secondary">
              <h3 className="text-2xl font-bold text-text mb-6">Informações de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text mb-1">{t.contact.info.address}</h4>
                    <p className="text-text/70">
                      Av. António José de Almeida 70
                      <br />
                      3720-239 Oliveira de Azeméis
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text mb-1">{t.contact.info.phone}</h4>
                    <a href="tel:+351924243818" className="text-primary hover:text-primary/80 transition-colors">
                      +351 924 243 818
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text mb-1">{t.contact.info.whatsapp}</h4>
                    <a
                      href="https://wa.me/351924243818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +351 924 243 818
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text mb-1">Horário de Atendimento</h4>
                    <p className="text-text/70">
                      Segunda a Sexta: 8h00 - 18h00
                      <br />
                      Sábado: 8h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+351924243818"
                className="bg-primary text-background p-4 rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </a>
              <a
                href="https://wa.me/351924243818"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
