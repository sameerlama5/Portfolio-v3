interface ResumeSkillProps {
  name: string
  level: number
}

export default function ResumeSkill({ name, level }: ResumeSkillProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-white">{name}</span>
        <span className="text-white/60">{level}%</span>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}
