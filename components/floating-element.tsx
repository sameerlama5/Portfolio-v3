import { cn } from "@/lib/utils"

interface FloatingElementProps {
  className?: string
  delay?: number
}

export default function FloatingElement({ className, delay = 0 }: FloatingElementProps) {
  return (
    <div
      className={cn("fixed w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob", className)}
      style={{ animationDelay: `${delay}ms` }}
    />
  )
}
