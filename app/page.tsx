import footer from "@/components/footer";
import HeroSection from "@/sections/Home/herosection";
import AboutSection from "@/sections/Home/aboutsection";
import ServicesSection from "@/sections/Home/servicessection";
import ProjectsSection from "@/sections/Home/projectssection";
import TestimonialsSection from "@/sections/Home/testimonialssection";
import CtaSection from "@/sections/Home/ctasection";

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
      <footer />
    </>
  );
}
