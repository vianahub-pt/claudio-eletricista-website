import Footer from "@/components/footer";
import HeroSection from "@/sections/Home/heroSection";
import AboutSection from "@/sections/Home/aboutSection";
import ServicesSection from "@/sections/Home/servicesSection";
import ProjectsSection from "@/sections/Home/projectsSection";
import TestimonialsSection from "@/sections/Home/testimonialsSection";
import CtaSection from "@/sections/Home/ctaSection";

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
  );
}
