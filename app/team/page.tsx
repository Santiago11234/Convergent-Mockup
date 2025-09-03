import { FloatingBlobs } from "@/components/floating-blobs"
import { Navbar } from "@/components/navbar"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
     
export default function TeamPage() {
  return (
    <main className="relative">
      <FloatingBlobs />
      <Navbar />
      <div className="pt-20">
        <TeamSection isFullPage={true} />
      </div>
      <Footer />
    </main>
  )
}
