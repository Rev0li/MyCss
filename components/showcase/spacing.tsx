const spaces = [
  { name: "xs", value: "4px", size: "w-1 h-1" },
  { name: "sm", value: "8px", size: "w-2 h-2" },
  { name: "md", value: "16px", size: "w-4 h-4" },
  { name: "lg", value: "24px", size: "w-6 h-6" },
  { name: "xl", value: "32px", size: "w-8 h-8" },
  { name: "2xl", value: "48px", size: "w-12 h-12" },
  { name: "3xl", value: "64px", size: "w-16 h-16" },
]

const radii = [
  { name: "xs", value: "8px" },
  { name: "sm", value: "12px" },
  { name: "md", value: "18px" },
  { name: "lg", value: "28px" },
  { name: "xl", value: "36px" },
  { name: "full", value: "9999px" },
]

export function SpacingShowcase() {
  return (
    <section id="spacing">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Spacing & Radius</h2>
        <p className="text-muted-foreground">
          Keep spacing airy and consistent. Prefer large radii and soft shadows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Spacing Scale */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">SPACING SCALE</h3>
          <div className="space-y-4">
            {spaces.map((space) => (
              <div key={space.name} className="flex items-center gap-4">
                <div className={`${space.size} bg-primary rounded-sm flex-shrink-0`} />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-sm font-medium">{space.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{space.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Border Radius */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">BORDER RADIUS</h3>
          <div className="grid grid-cols-3 gap-4">
            {radii.map((radius) => (
              <div key={radius.name} className="text-center">
                <div 
                  className="w-16 h-16 bg-primary mx-auto mb-3 transition-transform duration-200 hover:scale-105"
                  style={{ borderRadius: radius.value }}
                />
                <p className="text-sm font-medium">{radius.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{radius.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shadows */}
      <div className="mt-8 bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
        <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">SHADOWS</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-full h-24 bg-card rounded-2xl shadow-[var(--shadow-soft)] border border-border mb-4" />
            <p className="text-sm font-medium">Soft</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">0 8px 30px rgba(0,0,0,0.06)</p>
          </div>
          <div className="text-center">
            <div className="w-full h-24 bg-card rounded-2xl shadow-[var(--shadow-hover)] border border-border mb-4" />
            <p className="text-sm font-medium">Hover</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">0 12px 40px rgba(0,0,0,0.08)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
