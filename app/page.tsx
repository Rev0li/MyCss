"use client"

import { useState } from "react"
import { ColorPalette } from "@/components/showcase/color-palette"
import { TypographyShowcase } from "@/components/showcase/typography"
import { ComponentShowcase } from "@/components/showcase/components"
import { SpacingShowcase } from "@/components/showcase/spacing"
import { HeroSection } from "@/components/showcase/hero"

export default function MyCssShowcase() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <HeroSection isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-24">
        <ColorPalette />
        <TypographyShowcase />
        <SpacingShowcase />
        <ComponentShowcase />
      </main>

      <footer className="border-t border-border py-12 text-center">
        <p className="text-muted-foreground text-sm">
          MyCss v1.0.0 — Personal Design System
        </p>
      </footer>
    </div>
  )
}
