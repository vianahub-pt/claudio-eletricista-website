"use client";

import type React from "react";
import { useState } from "react";
import SectionTitle from "@/components/sectionTitle";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const phoneNumber = "351924243818"; // Sem o "+" para o WhatsApp
  const emailAddress = "claudioantunessil@gmail.com";

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, insira um email válido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "O assunto é obrigatório";
    }

    if (!formData.message.trim()) {
      newErrors.message = "A mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focar no primeiro campo com erro
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio de email
      const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
      `;

      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || "Contacto do Website"
      )}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main id="main-content">
        {/* Banner */}
        <section className="bg-gray-800 text-white py-20" role="banner">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-400">Contacto</span>
              </h1>
              <p className="text-xl">
                Entre em contacto connosco para solicitar um orçamento gratuito
                ou esclarecer qualquer dúvida.
              </p>
            </div>
          </div>
        </section>

        {/* Informações de Contacto */}
        <section
          className="py-20 bg-white"
          aria-labelledby="contact-info-heading"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações */}
              <div>
                <SectionTitle
                  title="Fale Connosco"
                  subtitle="Estamos aqui para ajudar"
                  level={2}
                />

                <div className="space-y-6" role="list">
                  <div className="flex items-start" role="listitem">
                    <div
                      className="bg-blue-100 p-3 rounded-lg mr-4"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#2563eb"
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <p className="text-gray-600">
                        <a
                          href={`https://wa.me/${phoneNumber}`}
                          className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                          aria-label="Contactar via WhatsApp: +351 924 243 818"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +351 924 243 818
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        Resposta rápida via WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" role="listitem">
                    <div
                      className="bg-blue-100 p-3 rounded-lg mr-4"
                      aria-hidden="true"
                    >
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a
                          href={`mailto:${emailAddress}`}
                          className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                          aria-label="Enviar email para claudioantunessil@gmail.com"
                        >
                          {emailAddress}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        Resposta em até 24 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" role="listitem">
                    <div
                      className="bg-blue-100 p-3 rounded-lg mr-4"
                      aria-hidden="true"
                    >
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Morada</h3>
                      <address className="text-gray-600 not-italic">
                        Av. António José de Almeida 70
                        <br />
                        3720-239 Oliveira de Azeméis
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start" role="listitem">
                    <div
                      className="bg-blue-100 p-3 rounded-lg mr-4"
                      aria-hidden="true"
                    >
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Horário de Funcionamento
                      </h3>
                      <div className="text-gray-600">
                        <p>Segunda a Sexta: 8h - 18h</p>
                        <p>Sábado: 9h - 13h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3
                    className="text-2xl font-bold mb-6"
                    id="contact-form-heading"
                  >
                    Envie-nos uma Mensagem
                  </h3>

                  {submitStatus === "success" && (
                    <div
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center"
                      role="alert"
                      aria-live="polite"
                    >
                      <CheckCircle
                        size={20}
                        className="mr-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        Mensagem enviada com sucesso! Entraremos em contacto em
                        breve.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center"
                      role="alert"
                      aria-live="polite"
                    >
                      <AlertCircle
                        size={20}
                        className="mr-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        Erro ao enviar mensagem. Tente novamente ou contacte-nos
                        diretamente.
                      </span>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    aria-labelledby="contact-form-heading"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome{" "}
                        <span className="text-red-600" aria-label="obrigatório">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="O seu nome"
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="error-message flex items-center mt-1"
                          role="alert"
                        >
                          <AlertCircle
                            size={16}
                            className="mr-1"
                            aria-hidden="true"
                          />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email{" "}
                        <span className="text-red-600" aria-label="obrigatório">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="o.seu.email@exemplo.com"
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="error-message flex items-center mt-1"
                          role="alert"
                        >
                          <AlertCircle
                            size={16}
                            className="mr-1"
                            aria-hidden="true"
                          />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+351 xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Assunto{" "}
                        <span className="text-red-600" aria-label="obrigatório">
                          *
                        </span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        aria-invalid={errors.subject ? "true" : "false"}
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Orçamento - Instalação Elétrica">
                          Orçamento - Instalação Elétrica
                        </option>
                        <option value="Orçamento - Canalização">
                          Orçamento - Canalização
                        </option>
                        <option value="Orçamento - Casa de Banho">
                          Orçamento - Casa de Banho
                        </option>
                        <option value="Emergência">Emergência</option>
                        <option value="Informações Gerais">
                          Informações Gerais
                        </option>
                        <option value="Outro">Outro</option>
                      </select>
                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="error-message flex items-center mt-1"
                          role="alert"
                        >
                          <AlertCircle
                            size={16}
                            className="mr-1"
                            aria-hidden="true"
                          />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Mensagem{" "}
                        <span className="text-red-600" aria-label="obrigatório">
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Descreva o seu projeto ou dúvida..."
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="error-message flex items-center mt-1"
                          role="alert"
                        >
                          <AlertCircle
                            size={16}
                            className="mr-1"
                            aria-hidden="true"
                          />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-describedby="submit-button-description"
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="animate-spin mr-2"
                            aria-hidden="true"
                          >
                            ⏳
                          </span>
                          A enviar...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" aria-hidden="true" />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                    <p id="submit-button-description" className="sr-only">
                      Clique para enviar a sua mensagem. Será redirecionado para
                      o seu cliente de email.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA de Emergência */}
        <section
          className="py-16 bg-blue-600 text-white"
          aria-labelledby="emergency-heading"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 id="emergency-heading" className="text-3xl font-bold mb-4">
              Precisa de Ajuda Urgente?
            </h2>
            <p className="text-xl mb-8">
              Estamos disponíveis 24/7 para emergências elétricas e de
              canalização.
            </p>
            <a
              href={`https://wa.me/${phoneNumber}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              aria-label="Contactar via WhatsApp para emergências: +351 924 243 818"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: +351 924 243 818
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
