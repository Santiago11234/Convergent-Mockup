"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingBlobs } from "@/components/floating-blobs"
import { useSearchParams } from "next/navigation"

const buildProjects = [
  {
    name: "Phizzy",
    description:
      "Phizzy makes physical therapy fun! Kids stay motivated to complete at-home exercises through exciting games and cute avatars, while therapists track progress in real time with videos sent directly by kids with parental approval.",
    semester: "SP25",
    image: "/logo.png",
  },
  {
    name: "FITD",
    description:
      "FITD is a digital closet web extension that lets users save clothing from any online store and build outfits out of pieces they wish to buy.",
    semester: "FA24",
    image: "/logo.png",  },
  {
    name: "ALIGN",
    description:
      "Gym-related injuries can quickly derail the motivation of fitness beginners. That's why it's essential to have an easy way to ALIGN your safety with your fitness goals. ALIGN is an affordable, computer vision–based fitness form checker designed to help every gym-going beginner work out with confidence and ease.",
    semester: "FA24",
    image: "/logo.png",  },
  {
    name: "Sensible",
    description: "Sensible is a diabetic neuropathy screening to enable early intervention and prevent amputations.",
    semester: "SP24",
    image: "/logo.png",  },
  {
    name: "SafeStep",
    description:
      "SafeStep is a safety-focused route guidance app that provides tourists & new residents with crowdsourced data to identify and select safer walking routes in urban areas.",
    semester: "SP24",
    image: "/logo.png",  },
  {
    name: "StemUp",
    description:
      "StemUp is a smart chair-attachable device with a complementary mobile app to help students and workers track and improve posture during extended periods of sitting.",
    semester: "SP24",
    image: "/logo.png",  },
  {
    name: "FactFlow",
    description:
      "FactFlow is an all-in-one tool that streamlines academic research and combats misinformation and unreliable sources prevalent in traditional search methods.",
    semester: "SP24",
    image: "/logo.png",  },
  {
    name: "Whoosh",
    description:
      "Whoosh is an AI-powered Gmail add-on that streamlines employee-to-client communication by generating tailored email responses.",
    semester: "SP24",
    image: "/logo.png",  },
  {
    name: "BridgeBill",
    description:
      "BridgeBill is a website that simplifies hospital bills, empowering non-native English-speaking immigrants through education and transparency.",
    semester: "FA18",
    image: "/logo.png",  },
  {
    name: "SureWalk",
    description:
      "SURE Walk is a popular ride service focused on UT student safety. It utilizes past user and ride data to ensure optimal routes and a streamlined process.",
    semester: "FA18",
    image: "/logo.png",  },
]

const forgeProjects = [
  {
    name: "Homekynd",
    description:
      "Homekynd is an AI-based virtual home stager that allows home buyers, real estate agents, and more to upload a 2D image of their room and turn it into an immersive 3D environment. Users can add and move furniture from their favorite brands into their homes in a matter of seconds.",
    details:
      "Over the past two semesters, the Homekynd team developed convolutional neural networks and heuristic algorithms to automatically place furniture into optimal locations in an empty room. The team also developed a stable diffusion inpainting model that can remove furniture from an image of a furnished room and make it unfurnished. Additionally, Google Cloud API endpoints were set up to host and use these models.",
    techStack: "Python, PyTorch, OpenCV, Stable Diffusion, Google Cloud Platform",
    semester: "SP25",
    image: "/logo.png",  },
  {
    name: "Alcan Dental",
    description:
      "First Principles is an adaptive learning platform aimed at training staff at dental practices. Using AI-role play, real-time feedback, and gamified experiences, it provides an innovative training ecosystem to help dental practices operate at the highest level.",
    details:
      "Texas Convergent developed the help section of the First Principles mobile app. This included panels for FAQ sections as well as an interactive AI chatbot. Additionally, we developed comprehensive user flows and designed more than 15 low and high fidelity screens for the overall app.",
    techStack: "React Native (via Expo), Next.js, Typescript, Python, FastAPI, Pinecone",
    semester: "FA24",
    image: "/logo.png",  },
  {
    name: "Jump Finance",
    description:
      "Jump Finance partners with universities and governments in West Africa to offer monthly tuition installment plans so that more students can complete their studies and pursue their dreams.",
    details:
      "Over the past 4 semesters, the Convergent team has worked with Jump Finance to build out their product. This Spring 2025 semester, the team primarily focused on developing a robust course registration system that allows students to register for classes directly through the Jump Finance portal. Additionally, the team expanded the student portal's resource section, improving access to academic and financial support materials.",
    techStack: "React.JS, FastAPI/Python, MySQL, Google Cloud",
    semester: "SP24",
    image: "/logo.png",  },
  {
    name: "Xebec",
    description:
      "Xebec is a hardware company focused on improving user productivity by allowing people to take their office setup wherever they go. Users can attach lightweight displays to their laptops on the go.",
    details:
      "We developed a cross-platform desktop toolbar that centralizes productivity tools, including transparent sticky notes, adaptive screen-warmth control, automatic professional background switching, and real-time unmute alerts for video calls. User settings are persistent upon exit and we created a seamless Windows installer that sets up the application within a few clicks.",
    techStack: "C++, Qt Software",
    semester: "FA24",
    image: "/logo.png",  },
]

const buildSemesters = ["All", "SP25", "FA24", "SP24", "FA18"]
const forgeSemesters = ["All", "SP25", "FA24", "SP24"]

export default function PastPage() {
  const searchParams = useSearchParams()
  const [currentType, setCurrentType] = useState<"build" | "forge">("build")
  const [selectedSemester, setSelectedSemester] = useState("All")

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "forge") {
      setCurrentType("forge")
    } else {
      setCurrentType("build")
    }
  }, [searchParams])

  const currentProjects = currentType === "build" ? buildProjects : forgeProjects
  const currentSemesters = currentType === "build" ? buildSemesters : forgeSemesters

  const filteredProjects =
    selectedSemester === "All"
      ? currentProjects
      : currentProjects.filter((project) => project.semester === selectedSemester)

  return (

    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBlobs />
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Past {currentType === "build" ? "Build Team Projects" : "Forge Portfolio"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentType === "build"
                ? "I'm sorry about the images, I don't have the patience to go through and snip every image"
                : "I'm sorry about the images, I don't have the patience to go through and snip every image"}
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-4 mb-8"
          >
            <Button
              variant={currentType === "build" ? "default" : "outline"}
              onClick={() => {
                setCurrentType("build")
                setSelectedSemester("All")
              }}
              className={`transition-all duration-200 ${
                currentType === "build" ? "neon-glow" : "hover:border-primary/50"
              }`}
            >
              Build Teams
            </Button>
            <Button
              variant={currentType === "forge" ? "default" : "outline"}
              onClick={() => {
                setCurrentType("forge")
                setSelectedSemester("All")
              }}
              className={`transition-all duration-200 ${
                currentType === "forge" ? "neon-glow" : "hover:border-primary/50"
              }`}
            >
              Forge Portfolio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {currentSemesters.map((semester) => (
              <Button
                key={semester}
                variant={selectedSemester === semester ? "default" : "outline"}
                onClick={() => setSelectedSemester(semester)}
                className={`transition-all duration-200 ${
                  selectedSemester === semester ? "neon-glow" : "hover:border-primary/50"
                }`}
              >
                {semester}
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-serif gradient-text">{project.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {project.semester}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                    {currentType === "forge" && "details" in project && (
                      <>
                        <CardDescription className="text-xs text-muted-foreground/80 leading-relaxed">
                          {String(project.details)}
                        </CardDescription>
                        {"techStack" in project && (
                          <div>
                            <p className="text-xs font-semibold text-primary mb-1">Tech Stack:</p>
                            <p className="text-xs text-muted-foreground">{String(project.techStack)}</p>
                          </div>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found for {selectedSemester}</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
