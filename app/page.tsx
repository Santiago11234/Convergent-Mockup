import { FloatingBlobs } from "@/components/floating-blobs"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { ProgramsSection } from "@/components/programs-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <FloatingBlobs />
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ProgramsSection />
      <EventsSection />
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  )
}
