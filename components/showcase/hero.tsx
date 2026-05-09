import { Sun, Moon } from "lucide-react"

interface HeroSectionProps {
  isDark: boolean
  toggleTheme: () => void
}

export function HeroSection({ isDark, toggleTheme }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-[var(--accent2-soft)] opacity-60" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-start mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-[var(--shadow-soft)]">
              <span className="text-primary-foreground font-semibold text-lg">M</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">MyCss</span>
          </div>
          
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-200 hover:shadow-[var(--shadow-soft)] active:scale-95"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </button>
        </div>

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">
            PERSONAL DESIGN SYSTEM
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-balance">
            Premium, minimal, calm.
            <br />
            <span className="text-muted-foreground">Apple-inspired.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
            Design tokens and visual guidelines for a coherent, refined product universe across all apps, portfolio pages, and self-hosted services.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Premium", "Minimal", "Calm", "Modern", "Airy", "Clean"].map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium transition-all duration-200 hover:shadow-[var(--shadow-soft)]"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
