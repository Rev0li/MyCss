import { Check, ChevronRight, Bell, Settings, User } from "lucide-react"

export function ComponentShowcase() {
  return (
    <section id="components">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Components</h2>
        <p className="text-muted-foreground">
          Buttons are discreet and rounded. Cards are softly shadowed with large radius. Inputs are clean and readable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Buttons */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">BUTTONS</h3>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-[var(--shadow-soft)] transition-all duration-200 hover:shadow-[var(--shadow-hover)] hover:scale-[1.02] active:scale-[0.98]">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-transparent text-foreground border border-border rounded-full font-medium transition-all duration-200 hover:bg-secondary active:scale-[0.98]">
                Secondary
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium shadow-[var(--shadow-soft)] transition-all duration-200 hover:shadow-[var(--shadow-hover)] hover:scale-[1.02] active:scale-[0.98]">
                Accent Button
              </button>
              <button className="px-4 py-3 bg-transparent text-foreground border border-border rounded-full font-medium transition-all duration-200 hover:bg-secondary active:scale-[0.98] flex items-center gap-2">
                <span>With Icon</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-[var(--shadow-soft)] active:scale-95">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-[var(--shadow-soft)] active:scale-95">
                <Settings className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[var(--shadow-soft)] transition-all duration-200 hover:shadow-[var(--shadow-hover)] active:scale-95">
                <User className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">INPUTS</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 bg-background border border-border rounded-[1.125rem] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                placeholder="Write something..."
                rows={3}
                className="w-full px-4 py-3.5 bg-background border border-border rounded-[1.125rem] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">CARDS</h3>
          <div className="space-y-4">
            <div className="bg-secondary rounded-2xl border border-border p-6 transition-all duration-200 hover:shadow-[var(--shadow-soft)] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Project Card</p>
                  <p className="text-sm text-muted-foreground">With subtle hover</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cards use large radius and soft shadows. Hover states are subtle and fluid.
              </p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">BADGES & STATUS</h3>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[var(--accent-soft)] text-foreground rounded-full text-sm font-medium">
                Design
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent2-soft)] text-foreground rounded-full text-sm font-medium">
                Development
              </span>
              <span className="px-3 py-1.5 bg-secondary text-foreground border border-border rounded-full text-sm font-medium">
                Neutral
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                <span className="text-sm">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--warning)]" />
                <span className="text-sm">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span className="text-sm">Error</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[var(--accent-soft)] rounded-2xl">
              <Check className="w-5 h-5 text-[var(--success)]" />
              <span className="text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Motion Guidelines */}
      <div className="mt-8 bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
        <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">MOTION</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 transition-transform duration-[120ms] ease-[cubic-bezier(0.2,0,0,1)] hover:scale-110 cursor-pointer" />
            <p className="text-sm font-medium">Fast</p>
            <p className="text-xs text-muted-foreground font-mono">120ms</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-2xl mx-auto mb-4 transition-transform duration-[180ms] ease-[cubic-bezier(0.2,0,0,1)] hover:scale-110 cursor-pointer" />
            <p className="text-sm font-medium">Base</p>
            <p className="text-xs text-muted-foreground font-mono">180ms</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-muted-foreground rounded-2xl mx-auto mb-4 transition-transform duration-[240ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 cursor-pointer" />
            <p className="text-sm font-medium">Slow</p>
            <p className="text-xs text-muted-foreground font-mono">240ms</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-6 text-center">
          Animations must be short. Transitions must feel fluid and subtle. Motion supports clarity, not distraction.
        </p>
      </div>
    </section>
  )
}
