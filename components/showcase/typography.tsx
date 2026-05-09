export function TypographyShowcase() {
  return (
    <section id="typography">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Typography</h2>
        <p className="text-muted-foreground">
          Sans serif only. Premium, modern, minimalist tone. Prioritize readability and calm rhythm.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Font Sizes */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">FONT SIZES</h3>
          <div className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-xs text-foreground">xs — 12px</span>
              <span className="text-xs text-muted-foreground font-mono">0.75rem</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-sm text-foreground">sm — 14px</span>
              <span className="text-xs text-muted-foreground font-mono">0.875rem</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-base text-foreground">base — 16px</span>
              <span className="text-xs text-muted-foreground font-mono">1rem</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-lg text-foreground">lg — 20px</span>
              <span className="text-xs text-muted-foreground font-mono">1.25rem</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-xl text-foreground">xl — 24px</span>
              <span className="text-xs text-muted-foreground font-mono">1.5rem</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-2xl text-foreground">2xl — 32px</span>
              <span className="text-xs text-muted-foreground font-mono">2rem</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-4xl text-foreground">4xl — 56px</span>
              <span className="text-xs text-muted-foreground font-mono">3.5rem</span>
            </div>
          </div>
        </div>

        {/* Font Weights */}
        <div className="bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">FONT WEIGHTS</h3>
          <div className="space-y-6">
            <div>
              <p className="text-xl font-normal">Regular — 400</p>
              <p className="text-sm text-muted-foreground mt-1">Body text, descriptions</p>
            </div>
            <div>
              <p className="text-xl font-medium">Medium — 500</p>
              <p className="text-sm text-muted-foreground mt-1">Labels, navigation</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Semibold — 600</p>
              <p className="text-sm text-muted-foreground mt-1">Headings, emphasis</p>
            </div>
            <div>
              <p className="text-xl font-bold">Bold — 700</p>
              <p className="text-sm text-muted-foreground mt-1">Strong headings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Text */}
      <div className="mt-8 bg-card rounded-[1.75rem] border border-border p-8 shadow-[var(--shadow-soft)]">
        <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">SAMPLE TEXT</h3>
        <div className="max-w-2xl">
          <h4 className="text-3xl font-semibold tracking-tight mb-4 text-balance">
            Design is not just what it looks like. Design is how it works.
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Every element must have a reason to exist. Keep density low, give content room to breathe, 
            and prefer clear hierarchy with simple navigation. The result should feel confident, calm, 
            fast, professional, and pleasant to use.
          </p>
        </div>
      </div>
    </section>
  )
}
