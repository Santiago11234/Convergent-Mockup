import { FloatingBlobs } from "@/components/floating-blobs"
import { Navbar } from "@/components/navbar"
import { EventsCalendar } from "@/components/events-calendar"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  return (
    <main className="relative">
      <FloatingBlobs />
      <Navbar />
      <div className="pt-20">
        <EventsCalendar />
      </div>
      <Footer />
    </main>
  )
}
