"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

const events = [
  {
    title: "Info Session #2",
    date: "September 2, 2025",
    time: "6:00 PM",
    location: "GDC 2.216",
    type: "Info Session",
    description: "Come learn about Convergent, our mission, and how to get involved.",
    attendees: 120,
    status: "past",
  },
  {
    title: "Coffee Chat #2",
    date: "September 3, 2025",
    time: "5:00 PM",
    location: "Dobie",
    type: "Social",
    description: "Grab a coffee and meet members of our leadership team in a casual setting.",
    attendees: 40,
    status: "upcoming",
  },
  {
    title: "Game Night Social",
    date: "September 4, 2025",
    time: "7:00 PM",
    location: "McCombs Atrium: CBA 3.300",
    type: "Social",
    description: "Join us for board games, networking, and a fun night with Convergent members.",
    attendees: 80,
    status: "upcoming",
  },
  {
    title: "Info Session #3",
    date: "September 4, 2025",
    time: "6:00 PM",
    location: "GDC room #",
    type: "Info Session",
    description: "Another chance to hear about Convergent’s opportunities and programs.",
    attendees: 100,
    status: "upcoming",
  },
  {
    title: "Application Due",
    date: "September 5, 2025",
    time: "11:59 PM",
    location: "Online",
    type: "Deadline",
    description: "Submit your Convergent application before the deadline.",
    attendees: 0,
    status: "deadline",
  },
  {
    title: "Application Office Hours",
    date: "September 5, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Zoom and McCombs Atrium",
    type: "Support",
    description: "Drop by to get help and feedback on your application before submitting.",
    attendees: 25,
    status: "upcoming",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for workshops, talks, and networking opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="default" className="mb-2">
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.attendees} expected attendees
                    </div>
                  </div>

                  <Button className="w-full group-hover:neon-glow transition-all cursor-pointer" onClick={() => window.location.href = '/events'}>
                    RSVP Now
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="cursor-pointer" onClick={() => window.location.href = '/events'}>
            View All Events
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
