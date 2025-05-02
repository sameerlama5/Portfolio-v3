"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import portfolioData from "@/lib/portfolio-data"
import { jsPDF } from "jspdf"

export default function ResumeDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const { personalInfo } = portfolioData

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Add content to PDF
      pdf.setFontSize(24)
      pdf.text(personalInfo.name, 20, 20)

      pdf.setFontSize(14)
      pdf.text(personalInfo.title, 20, 30)

      pdf.setFontSize(10)
      pdf.text(`Email: ${personalInfo.email}`, 20, 40)
      pdf.text(`Location: ${personalInfo.location}`, 20, 45)
      pdf.text(`Website: ${personalInfo.website}`, 20, 50)

      pdf.setFontSize(16)
      pdf.text("Professional Experience", 20, 65)

      // Add experience
      let yPosition = 75
      portfolioData.experience.forEach((exp) => {
        pdf.setFontSize(12)
        pdf.text(`${exp.title} - ${exp.company}`, 20, yPosition)

        pdf.setFontSize(10)
        pdf.text(exp.date, 20, yPosition + 5)

        // Split description into multiple lines if needed
        const descriptionLines = pdf.splitTextToSize(exp.description, 170)
        pdf.text(descriptionLines, 20, yPosition + 10)

        yPosition += 10 + descriptionLines.length * 5 + 10
      })

      // Add education
      pdf.setFontSize(16)
      pdf.text("Education", 20, yPosition)
      yPosition += 10

      portfolioData.education.forEach((edu) => {
        pdf.setFontSize(12)
        pdf.text(`${edu.degree} - ${edu.institution}`, 20, yPosition)

        pdf.setFontSize(10)
        pdf.text(edu.date, 20, yPosition + 5)

        yPosition += 15
      })

      // Add skills
      pdf.setFontSize(16)
      pdf.text("Technical Skills", 20, yPosition)
      yPosition += 10

      let skillText = ""
      portfolioData.technicalSkills.forEach((skill) => {
        skillText += `${skill.name}, `
      })
      skillText = skillText.slice(0, -2) // Remove last comma and space

      const skillLines = pdf.splitTextToSize(skillText, 170)
      pdf.setFontSize(10)
      pdf.text(skillLines, 20, yPosition)

      // Save the PDF
      const filename = `${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`
      pdf.save(filename)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full flex items-center transition-all border border-white/30 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? "Generating..." : "Download Resume"} <Download className="ml-2 h-4 w-4" />
    </button>
  )
}
