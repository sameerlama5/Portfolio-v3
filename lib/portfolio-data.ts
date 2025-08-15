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
      id: "1",
      title: "Sambridhi Bazzar",
      description: "Analytics platform with machine learning insights",
      longDescription:
        "Samridhi Bazaar is a comprehensive loan marketplace designed to connect individuals with a wide network of trusted financial institutions. ",
      image: "/sambridhi.png?height=400&width=400",
      tags: ["HTML5", "ACF", "JS", "GSAP", "BOOSTRAP"],
      link: "https://samridhibazaar.com",
      // github: "https://github.com",
      featured: false,
    },
     {
      id: "2",
      title: "Amaalya Sk FOundation",
      description: "A modern shopping experience with React and Node.js",
      longDescription:
        "We are a non-profit organization dedicated to improving the standards of early childhood and primary education in Nepal. ",
      image: "/amaalya.png?height=400&width=600",
      tags: ["HTML5", "ACF", "JS", "GSAP", "BOOSTRAP"],
      link: "https://www.amaalyask.org.np",
      // github: "https://github.com",
      featured: true,
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
