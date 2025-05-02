import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import GlassCard from "./glass-card"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link = "#",
  featured = false,
}: ProjectCardProps) {
  return (
    <GlassCard
      className={cn(
        "group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white/15",
        featured ? "transform rotate-1 hover:rotate-0" : "transform -rotate-1 hover:rotate-0",
      )}
    >
      <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 right-3 backdrop-blur-md bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/30">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
          {title}
          <a href={link} className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-5 w-5 text-purple-300" />
          </a>
        </h3>
        <p className="text-white/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full backdrop-blur-md bg-white/10 text-white/80 border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}
