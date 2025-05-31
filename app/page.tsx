import Footer from "@/components/Footer"
import HeroSection from "@/sections/Home/HeroSection"
import AboutSection from "@/sections/Home/AboutSection"
import ServicesSection from "@/sections/Home/ServicesSection"
import ProjectsSection from "@/sections/Home/ProjectsSection"
import TestimonialsSection from "@/sections/Home/TestimonialsSection"
import CtaSection from "@/sections/Home/CtaSection"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
