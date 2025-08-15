"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
}

interface ResponsiveNavbarProps {
  items: NavItem[]
  currentPath?: string
}

export default function ResponsiveNavbar({ items, currentPath = "/" }: ResponsiveNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    // Add scroll effect
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-12 flex items-center justify-between sticky z-50 transition-all duration-300",
        scrolled ? "top-2 shadow-lg" : "top-4",
        isOpen && "rounded-2xl",
      )}
    >
      <div className="text-white font-bold text-xl">SawMeer.</div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-white hover:text-purple-300 transition-colors",
              currentPath === item.href && "text-purple-300",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-lg bg-purple border border-white/20 rounded-2xl py-4 px-6 md:hidden shadow-lg">
          <div className="flex flex-col space-y-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-white hover:text-purple-300 transition-colors py-2",
                  currentPath === item.href && "text-purple-300",
                )}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
