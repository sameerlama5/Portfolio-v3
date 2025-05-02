interface ResumeTimelineProps {
  title: string
  company: string
  date: string
  description: string
  skills: string[]
}

export default function ResumeTimeline({ title, company, date, description, skills }: ResumeTimelineProps) {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/20">
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-400 -translate-x-1/2"></div>

      <div className="mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
          <span>{company}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span>{date}</span>
        </div>
      </div>

      <p className="mb-3 text-white/80">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full backdrop-blur-md bg-white/10 text-white/80 border border-white/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
