"use client"

import { FloatingBlobs } from "@/components/floating-blobs"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Rocket, Trophy, Code, BarChart, Palette, ArrowRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const overviewRef = useRef<HTMLDivElement>(null)
  const buildRef = useRef<HTMLDivElement>(null)
  const forgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["overview", "build", "forge"].includes(hash)) {
        setActiveSection(hash)
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    window.history.pushState(null, "", `#${section}`)
    const refs = {
      overview: overviewRef,
      build: buildRef,
      forge: forgeRef,
    }
    const targetRef = refs[section as keyof typeof refs]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">About Texas Convergent</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since our origins in 2016, our mission has been to unite multidisciplinary talent at UT to create
              impactful technology that transforms lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
         

              {[
                { id: "overview", label: "Overview" },
                { id: "build", label: "Build Teams" },
                { id: "forge", label: "Forge Program" },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>

          {activeSection === "overview" && (
            <motion.div
              id="overview"
              ref={overviewRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <Card className="neon-glow bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                  Since our origins, our mission has been to unite multidisciplinary talent at UT to create impactful technology that transforms lives. Whether you join Build Team or Forge, we offer opportunities to apply industry-level technical and product-thinking skills similar to those used in top tech companies. Beyond skill-building, Convergent fosters lifelong connections among diverse peers and provides access to an extensive nationwide alumni network across various industries. As such, we strongly encourage students of all backgrounds and majors to join our community!
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card
                  className="neon-glow hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToSection("build")}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Build Teams</h3>
                    <p className="text-muted-foreground mb-4">New Ideas!</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Agile, multidisciplinary teams that turn ideas into minimum viable products through hands-on
                      learning.
                    </p>
                    <ArrowRight className="w-5 h-5 mx-auto mt-4 text-primary" />
                  </CardContent>
                </Card>

                <Card
                  className="neon-glow hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToSection("forge")}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Forge Program</h3>
                    <p className="text-muted-foreground mb-4">Existing Projects</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bridge startups to UT students through semester-long software projects with real-world impact.
                    </p>
                    <ArrowRight className="w-5 h-5 mx-auto mt-4 text-primary" />
                  </CardContent>
                </Card>
              </div>

            </motion.div>
          )}

          {activeSection === "build" && (
            <motion.div
              id="build"
              ref={buildRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Build Teams</h2>
                <p className="text-lg text-muted-foreground">Developing and prototyping ideas</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">How Build Teams Work</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Build Teams are agile, multidisciplinary teams of 5-10 students that turn ideas into minimum viable
                    products. Over the course of a semester, Build Team members learn to build and design tech
                    prototypes, business proposals, and pitches through a hands-on, case-based curriculum.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We welcome students from all majors and experience levels!
                  </p>
                </div>

                <Card className="neon-glow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">5-10 Students</p>
                      </div>
                      <div className="text-center">
                        <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Ideas to MVPs</p>
                      </div>
                      <div className="text-center">
                        <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Semester Long</p>
                      </div>
                      <div className="text-center">
                        <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">All Majors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    step: "1",
                    title: "Apply",
                    description:
                      "Apply to Build Teams through our website during our fall or spring recruitment cycles.",
                  },
                  {
                    step: "2",
                    title: "Brainstorm",
                    description: "Choose a case you're passionate about and brainstorm with your diverse team.",
                  },
                  {
                    step: "3",
                    title: "Build",
                    description: "Work together with your team and leads to build out your big idea.",
                  },
                  {
                    step: "4",
                    title: "Demo",
                    description: "Showcase your hard work at Demo Day alongside other Build Team projects.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="neon-glow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Roles Available</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="neon-glow">
                    <CardContent className="p-6">
                      <Code className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2">Engineers</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Responsible for technical production, delivery, and handoff of client projects. Use various
                        frameworks and languages to build solutions devised by Tech Leads.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="neon-glow">
                    <CardContent className="p-6">
                      <BarChart className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2">Product Analysts</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Integrate product feedback into actionable items. Research market trends, analyze limitations,
                        mitigate risk, and provide go-to-market strategies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="neon-glow">
                    <CardContent className="p-6">
                      <Palette className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold mb-2">Designers</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Create and iterate designs based on feedback. Handle research, wireframing, prototyping, user
                        testing, and work with engineering on implementation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "forge" && (
            <motion.div
              id="forge"
              ref={forgeRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">Forge Program</h2>
                <p className="text-lg text-muted-foreground">Coding for Good</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">How Forge Works</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Convergent Forge focuses on bridging startups around Texas to UT students who are aspiring tech
                    professionals. Students serve as technical leads, product leads, design leads, designers, product
                    analysts, and engineers to create impactful solutions and experiences through semester-long software
                    projects!
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Forge is an opportunity for you to code & build products that create a large-scale impact!
                  </p>
                </div>

                <Card className="neon-glow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <Rocket className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-sm font-medium">Real Startups</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-sm font-medium">Tech Professionals</p>
                      </div>
                      <div className="text-center">
                        <Code className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-sm font-medium">Software Projects</p>
                      </div>
                      <div className="text-center">
                        <Trophy className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-sm font-medium">Large Impact</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    step: "1",
                    title: "Apply",
                    description: "Complete our company application (if you're a startup) or member application.",
                  },
                  { step: "2", title: "Build", description: "Meet your pod and plan deliverables for the semester." },
                  {
                    step: "3",
                    title: "Network",
                    description: "Leverage resources to gain access to skills, mentorship, and funding.",
                  },
                  {
                    step: "4",
                    title: "Demo",
                    description: "Present your startup at Forge Showcase at the end of the semester.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="neon-glow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Roles Available</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="neon-glow">
                    <CardContent className="p-6">
                      <Code className="w-8 h-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Engineers</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Responsible for technical production, delivery, and handoff of client projects. Use various
                        frameworks and languages to build solutions devised by Tech Leads.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="neon-glow">
                    <CardContent className="p-6">
                      <BarChart className="w-8 h-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Product Analysts</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Integrate product feedback into actionable items. Research market trends, analyze limitations,
                        mitigate risk, and provide go-to-market strategies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="neon-glow">
                    <CardContent className="p-6">
                      <Palette className="w-8 h-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Designers</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Create and iterate designs based on feedback. Handle research, wireframing, prototyping, user
                        testing, and work with engineering on implementation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
