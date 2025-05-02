// Types for portfolio data
export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  website: string
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
    instagram?: string
  }
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "design" | "other"
}

export interface TechnicalSkill {
  name: string
  level: number
}

export interface Experience {
  title: string
  company: string
  location?: string
  date: string
  description: string
  skills: string[]
}

export interface Education {
  degree: string
  institution: string
  location?: string
  date: string
  description: string
  skills: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  link?: string
}

// Portfolio data
const portfolioData = {
  personalInfo: {
    name: "Samir Tamang",
    title: "Creative Fullstack Devloper",
    bio: "I build modern, responsive, and interactive web applications with cutting-edge technologies and a focus on user experience.",
    email: "tamansameer5@gmail.com",
    phone: "+977 9808724075",
    location: "Bhaktapur, Suryabinayak",
    website: "lamasamir.com.np",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    },
  },

  projects: [
    {
      id: "demo1",
      title: "Demo",
      description: "A modern shopping experience with React and Node.js",
      longDescription:
        "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing with Stripe, inventory management, and an admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://ecommerce-example.com",
      github: "https://github.com",
      featured: true,
    },
    {
      id: "demo2",
      title: "Demo",
      description: "Analytics platform with machine learning insights",
      longDescription:
        "A dashboard that visualizes data using machine learning algorithms to provide actionable insights. Built with Python, TensorFlow, and Next.js.",
      image: "/placeholder.svg?height=400&width=400",
      tags: ["Python", "TensorFlow", "Next.js", "Data Visualization"],
      link: "https://ai-dashboard-example.com",
      github: "https://github.com",
      featured: false,
    },
  ],

  skills: [
    { name: "React", level: 80, category: "frontend" },
    { name: "Next.js", level: 70, category: "frontend" },
    { name: "TypeScript", level: 60, category: "frontend" },
    { name: "Node.js", level: 70, category: "backend" },
    { name: "UI/UX Design", level: 45, category: "design" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "MongoDb", level: 70, category: "backend" },
    { name: "MySql", level: 60, category: "backend" },
   
  ] as Skill[],

  technicalSkills: [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 70 },
    { name: "UI/UX Design", level: 55 },
  ],

  experience: [
    {
      title: "Frontend Developer",
      company: "ProfoxStudio",
      location: "Kaushaltar",
      date: "Feb 2024 - 2025",
      description:
        "Led the development of interactive web applications using WordPress and JavaScript. " +
        "Implemented responsive designs and animations using Bootstrap CSS and GSAP. " +
        "Collaborated with designers to create seamless user experiences. " +
        "Mentored junior developers and conducted code reviews.",
      skills: ["JS", "Wordpress", "React", "Custom Shortcode", "Acf", "Pagebuilder", "Team Leadership"]
    },
  ],

  education: [
    {
      degree: "Bachlor in Computer application",
      institution: "Swastik College",
      location: "Thimi, Chardobato",
      date: "2021 - present",
      skills: ["Research", "UI/UX", "Web Development", "Machine Learning"],
    },
  ],

  certifications: [
    {
      name: "Frontend Developer",
      issuer: "Broadway Infoysis",
      date: "2023",
    },
    {
      name: "Fulstack Devloper",
      issuer: "Broadway Infoysis",
      date: "2024",
    },
  ],
}

export default portfolioData
