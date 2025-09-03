"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Star, ArrowRight } from "lucide-react"

export function ProgramsSection() {
  const buildSteps = [
    { number: "1", title: "Apply", description: "Join during recruitment cycles" },
    { number: "2", title: "Brainstorm", description: "Choose a case you're passionate about" },
    { number: "3", title: "Build", description: "Work with your team to build your idea" },
    { number: "4", title: "Demo", description: "Showcase at Demo Day" },
  ]

  const forgeSteps = [
    { number: "1", title: "Apply", description: "Complete company or member application" },
    { number: "2", title: "Build", description: "Meet your pod and plan deliverables" },
    { number: "3", title: "Network", description: "Access skills, mentorship, and funding" },
    { number: "4", title: "Demo", description: "Present at Forge Showcase" },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 gradient-text">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your path to innovation and impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="neon-glow h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16  bg-primary  rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-primary">BUILD TEAMS</CardTitle>
                <p className="text-muted-foreground">New Ideas!</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {buildSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary  rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 neon-glow" onClick={() => window.location.href= "/about#build"}>
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="neon-glow h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-secondary">FORGE</CardTitle>
                <p className="text-muted-foreground">Existing Projects</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forgeSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="mySpecial" className="w-full mt-6 bg-secondary !hover:bg-secondary/90" onClick={() => window.location.href= "/about#forge"}>
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
