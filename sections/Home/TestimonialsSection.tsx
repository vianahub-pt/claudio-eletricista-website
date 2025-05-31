"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      location: "Oliveira de Azeméis",
      rating: 5,
      text: "Excelente serviço! O Claudio resolveu um problema elétrico complexo na minha casa com rapidez e profissionalismo. Recomendo vivamente.",
    },
    {
      id: 2,
      name: "Maria Santos",
      location: "São João da Madeira",
      rating: 5,
      text: "Contratei os serviços para renovação da casa de banho e fiquei extremamente satisfeita. Trabalho impecável, dentro do prazo e do orçamento.",
    },
    {
      id: 3,
      name: "António Ferreira",
      location: "Santa Maria da Feira",
      rating: 5,
      text: "Profissional de confiança! Já utilizei os serviços várias vezes para problemas de canalização e sempre com resultados excelentes.",
    },
    {
      id: 4,
      name: "Carla Oliveira",
      location: "Ovar",
      rating: 4,
      text: "Serviço de qualidade na instalação elétrica da minha cozinha. Pontual, organizado e deixou tudo limpo após o trabalho.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testemunhos"
          subtitle="O que os nossos clientes dizem sobre nós"
          center
          light
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map(
                  (_, i) => (
                    <Star
                      key={i + testimonials[currentIndex].rating}
                      size={20}
                      className="text-yellow-400"
                    />
                  )
                )}
              </div>

              <p className="text-lg italic mb-6">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <p className="font-bold text-xl">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-white/80">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Testemunho anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Próximo testemunho"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Ver testemunho ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
