"use client"

import { FloatingBlobs } from "@/components/floating-blobs"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, Building, Mail, FileText, Presentation, Handshake } from "lucide-react"
import Image from "next/image"


export default function PartnershipsPage() {
  const stats = [
    { number: "200+", label: "Total Members" },
    { number: "25+", label: "Majors/Minors" },
    { number: "75%", label: "Technical Background" },
    { number: "25+", label: "Job-Searching Seniors" },
  ]

  const opportunities = [
    {
      title: "Resume Book",
      description: "Get access to resumes from all officers and members.",
      exposure: "500+ Members",
      icon: FileText,
    },
    {
      title: "Career Fair",
      description: "Be included in multiple career fair and networking events.",
      exposure: "300+ Members",
      icon: Users,
    },
    {
      title: "General Meeting",
      description: "Org-wide event featuring startup ecosystem speakers.",
      exposure: "200 Members",
      icon: Presentation,
    },
    {
      title: "BT Demo Day",
      description: "Final event for members to pitch projects to judges.",
      exposure: "100 Members",
      icon: TrendingUp,
    },
    {
      title: "Forge Showcase",
      description: "Final event for members to pitch progress to clients.",
      exposure: "50 Members",
      icon: Building,
    },
    {
      title: "Flexible Partnership",
      description: "Open to discussing any event/partnerships",
      exposure: "100 Members",
      icon: Handshake,
    },
  ]

  const companyLogos = [
    { name: "Affirm", logo: "/placeholder.svg?height=40&width=120&text=Affirm" },
    { name: "Dropbox", logo: "/placeholder.svg?height=40&width=120&text=Dropbox" },
    { name: "Airbnb", logo: "/placeholder.svg?height=40&width=120&text=Airbnb" },
    { name: "IBM", logo: "/placeholder.svg?height=40&width=120&text=IBM" },
    { name: "Palantir", logo: "/placeholder.svg?height=40&width=120&text=Palantir" },
    { name: "Clover", logo: "/placeholder.svg?height=40&width=120&text=Clover" },
    { name: "NASA JPL", logo: "/placeholder.svg?height=40&width=120&text=NASA+JPL" },
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120&text=Amazon" },
    { name: "Goldman Sachs", logo: "/placeholder.svg?height=40&width=120&text=Goldman+Sachs" },
    { name: "Indeed", logo: "/placeholder.svg?height=40&width=120&text=Indeed" },
    { name: "Spotify", logo: "/placeholder.svg?height=40&width=120&text=Spotify" },
    { name: "Medallia", logo: "/placeholder.svg?height=40&width=120&text=Medallia" },
    { name: "BazaarVoice", logo: "/placeholder.svg?height=40&width=120&text=BazaarVoice" },
    { name: "BCG", logo: "/placeholder.svg?height=40&width=120&text=BCG" },
    { name: "Qualcomm", logo: "/placeholder.svg?height=40&width=120&text=Qualcomm" },
    { name: "Stripe", logo: "/placeholder.svg?height=40&width=120&text=Stripe" },
    { name: "Apple", logo: "/placeholder.svg?height=40&width=120&text=Apple" },
    { name: "Point72", logo: "/placeholder.svg?height=40&width=120&text=Point72" },
    { name: "Bloomberg", logo: "/placeholder.svg?height=40&width=120&text=Bloomberg" },
    { name: "Twitter", logo: "/placeholder.svg?height=40&width=120&text=Twitter" },
    { name: "23andMe", logo: "/placeholder.svg?height=40&width=120&text=23andMe" },
    { name: "Tableau", logo: "/placeholder.svg?height=40&width=120&text=Tableau" },
    { name: "Deloitte", logo: "/placeholder.svg?height=40&width=120&text=Deloitte" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120&text=Microsoft" },
    { name: "Credit Suisse", logo: "/placeholder.svg?height=40&width=120&text=Credit+Suisse" },
    { name: "Google", logo: "/placeholder.svg?height=40&width=120&text=Google" },
    { name: "Uber", logo: "/placeholder.svg?height=40&width=120&text=Uber" },
    { name: "HP Enterprise", logo: "/placeholder.svg?height=40&width=120&text=HP+Enterprise" },
    { name: "Lyft", logo: "/placeholder.svg?height=40&width=120&text=Lyft" },
    { name: "Capital One", logo: "/placeholder.svg?height=40&width=120&text=Capital+One" },
    { name: "Dolby", logo: "/placeholder.svg?height=40&width=120&text=Dolby" },
    { name: "JP Morgan", logo: "/placeholder.svg?height=40&width=120&text=JP+Morgan" },
    { name: "Abnormal Security", logo: "/placeholder.svg?height=40&width=120&text=Abnormal" },
    { name: "Facebook", logo: "/placeholder.svg?height=40&width=120&text=Facebook" },
    { name: "UT System", logo: "/placeholder.svg?height=40&width=120&text=UT+System" },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBlobs />
      <Navbar />

      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">Partnerships</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partner to build the future of technology & business
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
              We are looking to partner with corporations that align with our mission and values to provide more
              opportunities for our members in product management, software engineering, and UX design. This can be a
              mutually beneficial partnership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="neon-glow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 gradient-text">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We offer our partners multiple opportunities each year to meet our members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="neon-glow h-full">
                    <CardHeader className="text-center">
                      <opportunity.icon className="w-12 h-12 text-primary mx-auto mb-2" />
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{opportunity.description}</p>
                      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-3">
                        <div className="text-sm font-semibold gradient-text">{opportunity.exposure}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Convergent provides the foundation for your <span className="gradient-text">future career</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sorry again about the images
              </p>
            </div>

            <Card className="neon-glow">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                  {companyLogos.map((company, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <Image
                        width={120}
                        height={40}
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-16"
          >
            <Card className="neon-glow bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">
                  We&apos;ve partnered with over 20 organizations in the past decade
                </h3>
                <Button size="lg" className="neon-glow" onClick={() => window.location.href = "/#contact"}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact us to Partner
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
