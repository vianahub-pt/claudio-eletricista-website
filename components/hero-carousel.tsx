"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    alt: "Trabalhos de acabamentos interiores",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    alt: "Estruturas metálicas e construção",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    alt: "Instalação de estruturas no teto",
  },
  {
    id: 4,
    image: "/images/hero-slide-4.jpg",
    alt: "Renovação de casa de banho - antes e depois",
  },
  {
    id: 5,
    image: "/images/hero-slide-5.jpg",
    alt: "Trabalhos de fachada exterior",
  },
  {
    id: 6,
    image: "/images/hero-slide-6.jpg",
    alt: "Casa de banho moderna",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
          const isNext = index === (currentSlide + 1) % slides.length

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-800 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-20"
                  : isPrev
                    ? "opacity-0 scale-110 -translate-x-full z-10"
                    : isNext
                      ? "opacity-0 scale-110 translate-x-full z-10"
                      : "opacity-0 scale-95 z-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className={`object-cover transition-transform duration-800 ${isActive ? "scale-100" : "scale-105"}`}
                priority={index === 0}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

              {/* Animated Elements */}
              <div
                className={`absolute inset-0 transition-all duration-1000 delay-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-background/60 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/80 rounded-full animate-bounce" />
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary/70 rounded-full animate-ping" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows with Enhanced Design */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-text p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm disabled:opacity-50 z-30"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-text p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm disabled:opacity-50 z-30"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentSlide
                ? "w-8 h-3 bg-background rounded-full"
                : "w-3 h-3 bg-background/60 hover:bg-background/80 rounded-full hover:scale-125"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          >
            {index === currentSlide && <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse" />}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-6000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/50 text-background px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm z-30">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}
