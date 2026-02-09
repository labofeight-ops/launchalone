"use client"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect X + Choose Mode",
      description: "Connect your account, pick personal or business mode, and set your niche. Setup stays under 5 minutes.",
    },
    {
      number: "02",
      title: "Lock Voice + Goals",
      description: "Paste a few posts to lock your voice, then set your growth goal. Launchalone builds your plan.",
    },
    {
      number: "03",
      title: "Approve + Schedule",
      description: "Review drafts, post with one click, or schedule. Engagement runs in the background.",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No technical skills. No complicated setup. Just a clear growth plan in under 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <div className="absolute inset-0 border border-accent rounded-xl"></div>
                <span className="font-[var(--font-bebas)] text-2xl text-accent">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="/dashboard#x-login"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-orange-500 px-8 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-200"
          >
            Connect X
          </a>
        </div>

        {/* Time-to-value callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 border border-border/50 rounded-2xl bg-card/40 backdrop-blur-sm px-8 py-4">
            <div>
              <div className="text-3xl font-semibold text-foreground">5 MIN</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Setup Time</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="text-3xl font-semibold text-foreground">24 HRS</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">First Momentum</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="text-3xl font-semibold text-foreground">90 DAYS</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Compounding Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
