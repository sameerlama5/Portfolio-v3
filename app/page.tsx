import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import GlassCard from "@/components/glass-card"
import FloatingElement from "@/components/floating-element"
import portfolioData from "@/lib/portfolio-data"
import ResponsiveNavbar from "@/components/responsive-navbar"

export default function Home() {
  const { personalInfo, projects, skills } = portfolioData

  // Filter featured and non-featured projects
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  // Navigation items
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Animated background elements */}
      <FloatingElement className="top-20 left-20 w-72 h-72 bg-pink-500 opacity-20" delay={0} />
      <FloatingElement className="top-40 right-20 w-72 h-72 bg-yellow-500 opacity-20" delay={2000} />
      <FloatingElement className="-bottom-8 left-40 w-72 h-72 bg-teal-500 opacity-20" delay={4000} />
      <FloatingElement className="top-1/3 left-1/3 w-48 h-48 bg-blue-500 opacity-15" delay={1000} />
      <FloatingElement className="bottom-1/4 right-1/4 w-56 h-56 bg-purple-500 opacity-15" delay={3000} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Responsive Navigation */}
        <ResponsiveNavbar items={navItems} />

        {/* Hero Section - Asymmetrical Design */}
        <section id="about" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 lg:pr-12">
              <GlassCard className="p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-all duration-500">
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-6">
                  {personalInfo.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">{personalInfo.bio}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full flex items-center transition-all border border-white/30 hover:border-white/50"
                  >
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    className="backdrop-blur-md bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-full flex items-center transition-all border border-white/30"
                  >
                    View projects
                  </a>
                  <a
                    href="/resume"
                    className="backdrop-blur-md bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-full flex items-center transition-all border border-white/30"
                  >
                    Resume <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <GlassCard className="p-4 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="relative h-80 w-full overflow-hidden rounded-xl">
                    <Image src="/samir-portfolio-hero.png" alt="Profile" fill className="object-contain" />
                  </div>
                </GlassCard>
                <div className="absolute -bottom-6 -right-6">
                  <GlassCard className="p-4 transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="flex space-x-4 p-2">
                      <a
                        href={personalInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href={personalInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href={personalInfo.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-white hover:text-purple-300 transition-colors"
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the content remains the same */}
        {/* Projects Section - Staggered Layout */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {featuredProject && (
              <div className="md:col-span-8">
                <ProjectCard
                  title={featuredProject.title}
                  description={featuredProject.longDescription || featuredProject.description}
                  image={featuredProject.image}
                  tags={featuredProject.tags}
                  link={featuredProject.link}
                  featured={true}
                />
              </div>
            )}

            {otherProjects.map((project, index) => {
              // Create a dynamic layout with different column spans
              const colSpans = ["md:col-span-4", "md:col-span-5", "md:col-span-7"]
              const colSpan = colSpans[index % colSpans.length]

              return (
                <div key={project.id} className={colSpan}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    link={project.link}
                  />
                </div>
              )
            })}
          </div>
        </section>

        {/* Skills Section - Hexagonal Grid */}
        <section id="skills" className="py-20">
          <GlassCard className="max-w-5xl mx-auto p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-500">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Skills & Expertise
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Contact Section - Split Layout */}
        <section id="contact" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <GlassCard className="p-8 h-full flex flex-col justify-center transform rotate-1 hover:rotate-0 transition-all duration-500">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                    Let's Work Together
                  </span>
                </h2>
                <p className="text-white/80 mb-6">
                  I'm currently available for freelance work and exciting opportunities. If you have a project that
                  needs creative solutions, let's talk!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-white/80">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Linkedin className="h-5 w-5 mr-3" />
                    <span>{personalInfo.socialLinks.linkedin.replace("https://", "")}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Github className="h-5 w-5 mr-3" />
                    <span>{personalInfo.socialLinks.github.replace("https://", "")}</span>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div>
              <GlassCard className="p-8 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-white/60">
          <GlassCard className="p-4 inline-block">
            <p>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </GlassCard>
        </footer>
      </div>
    </main>
  )
}
