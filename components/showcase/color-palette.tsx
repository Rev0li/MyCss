const colors = [
  { name: "Background", var: "bg", value: "#F7F4EF", class: "bg-background" },
  { name: "Surface", var: "surface", value: "#FCFBF8", class: "bg-secondary" },
  { name: "Card", var: "card", value: "#FFFFFF", class: "bg-card" },
  { name: "Text", var: "text", value: "#111111", class: "bg-foreground" },
  { name: "Text Muted", var: "textMuted", value: "#6B6B6B", class: "bg-muted-foreground" },
]

const accents = [
  { name: "Accent (Pink)", var: "accent", value: "#E8B7C4", class: "bg-primary" },
  { name: "Accent Soft", var: "accentSoft", value: "rgba(232, 183, 196, 0.18)", class: "bg-[var(--accent-soft)]" },
  { name: "Accent 2 (Turquoise)", var: "accent2", value: "#6EDAD3", class: "bg-accent" },
  { name: "Accent 2 Soft", var: "accent2Soft", value: "rgba(110, 218, 211, 0.16)", class: "bg-[var(--accent2-soft)]" },
]

const semantic = [
  { name: "Success", var: "success", value: "#65B48A", class: "bg-[var(--success)]" },
  { name: "Warning", var: "warning", value: "#D9A84C", class: "bg-[var(--warning)]" },
  { name: "Danger", var: "danger", value: "#D96B6B", class: "bg-destructive" },
]

export function ColorPalette() {
  return (
    <section id="colors">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Colors</h2>
        <p className="text-muted-foreground">
          Never use more than two strong colors at the same time. Prefer soft contrast over flashy contrast.
        </p>
      </div>

      <div className="space-y-10">
        {/* Base Colors */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">BASE COLORS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {colors.map((color) => (
              <div key={color.var} className="group">
                <div
                  className={`${color.class} h-20 rounded-2xl border border-border shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:shadow-[var(--shadow-hover)] group-hover:scale-[1.02]`}
                />
                <p className="mt-3 text-sm font-medium">{color.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{color.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accent Colors */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">ACCENT COLORS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {accents.map((color) => (
              <div key={color.var} className="group">
                <div
                  className={`${color.class} h-20 rounded-2xl border border-border shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:shadow-[var(--shadow-hover)] group-hover:scale-[1.02]`}
                />
                <p className="mt-3 text-sm font-medium">{color.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{color.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">SEMANTIC COLORS</h3>
          <div className="grid grid-cols-3 gap-4">
            {semantic.map((color) => (
              <div key={color.var} className="group">
                <div
                  className={`${color.class} h-20 rounded-2xl border border-border shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:shadow-[var(--shadow-hover)] group-hover:scale-[1.02]`}
                />
                <p className="mt-3 text-sm font-medium">{color.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{color.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
