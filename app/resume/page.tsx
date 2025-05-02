import { ArrowLeft, Calendar, Briefcase, GraduationCap, Award } from "lucide-react"
import GlassCard from "@/components/glass-card"
import FloatingElement from "@/components/floating-element"
import ResumeTimeline from "@/components/resume-timeline"
import ResumeSkill from "@/components/resume-skill"
import portfolioData from "@/lib/portfolio-data"
import ResumeDownloadButton from "@/components/resume-download-button"
import ResponsiveNavbar from "@/components/responsive-navbar"

export default function ResumePage() {
  const { personalInfo, technicalSkills, experience, education, certifications } = portfolioData

  // Navigation items
  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Animated background elements */}
      <FloatingElement className="top-20 left-20 w-72 h-72 bg-pink-500 opacity-20" delay={0} />
      <FloatingElement className="top-40 right-20 w-72 h-72 bg-yellow-500 opacity-20" delay={2000} />
      <FloatingElement className="-bottom-8 left-40 w-72 h-72 bg-teal-500 opacity-20" delay={4000} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Responsive Navigation */}
        <ResponsiveNavbar items={navItems} currentPath="/resume" />

        {/* Resume Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <a href="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </a>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Professional Resume
            </h1>
          </div>
          <ResumeDownloadButton />
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" id="resume-content">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <GlassCard className="p-8 mb-8 transform rotate-1 hover:rotate-0 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Info</h2>

              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-white font-medium mb-1">Name</h3>
                  <p>{personalInfo.name}</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p>{personalInfo.email}</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p>{personalInfo.location}</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-1">Website</h3>
                  <p>{personalInfo.website}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 transform -rotate-1 hover:rotate-0 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>

              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <ResumeSkill key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2">
            <GlassCard className="p-8 mb-8 transform -rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-purple-300 mr-3" />
                <h2 className="text-2xl font-bold text-white">Work Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <ResumeTimeline
                    key={index}
                    title={job.title}
                    company={job.company}
                    date={job.date}
                    description={job.description}
                    skills={job.skills}
                  />
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 mb-8 transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-purple-300 mr-3" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <ResumeTimeline
                    key={index}
                    title={edu.degree}
                    company={edu.institution}
                    date={edu.date}
                    description={edu.description}
                    skills={edu.skills}
                  />
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 transform -rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-purple-300 mr-3" />
                <h2 className="text-2xl font-bold text-white">Certifications & Awards</h2>
              </div>

              <div className="space-y-4 text-white/80">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 mt-1 text-purple-300" />
                    <div>
                      <h3 className="text-white font-medium">
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors"
                          >
                            {cert.name}
                          </a>
                        ) : (
                          cert.name
                        )}
                      </h3>
                      <p className="text-sm">
                        {cert.issuer}, {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  )
}
