import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 hover:bg-white/10 transition-all hover:scale-105 duration-300">
      <div className="text-white font-medium mb-2">{name}</div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full",
            level > 80
              ? "bg-gradient-to-r from-purple-400 to-pink-500"
              : level > 60
                ? "bg-gradient-to-r from-blue-400 to-purple-500"
                : "bg-gradient-to-r from-teal-400 to-blue-500",
          )}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <div className="text-right text-xs text-white/60 mt-1">{level}%</div>
    </div>
  )
}
