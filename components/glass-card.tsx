import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl", className)}>
      {children}
    </div>
  )
}
