"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Users } from "lucide-react"

const areas = [
  {
    icon: Code,
    title: "Engineering",
    description: "Build innovative products with the latest tech",
    details: "From web development to AI/ML, we work on projects that push the boundaries of what's possible.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Create beautiful, user-centered experiences",
    details: "UI/UX design, product design, and design thinking methodologies to solve real problems.",
  },
  {
    icon: Users,
    title: "Product",
    description: "Turn ideas into market-ready solutions",
    details: "Product strategy, market research, and go-to-market planning for innovative solutions.",
  }
]

export function WhatWeDoSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">How Convergent Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore innovation at the intersection of engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 neon-glow"
                  >
                    <area.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-serif">{area.title}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {area.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
