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
          <div className="inline-block border border-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
            SIMPLE 3-STEP PROCESS
          </div>
          <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight">
            FROM ZERO TO<br/>
            GROWTH IN UNDER 5 MINUTES
          </h2>
          <p className="mt-4 font-mono text-sm text-muted-foreground max-w-2xl mx-auto">
            No technical skills. No complicated setup. Just a clear growth plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border"></div>
              )}
              
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <div className="absolute inset-0 border border-accent rotate-45"></div>
                <span className="font-[var(--font-bebas)] text-2xl text-accent relative z-10">
                  {step.number}
                </span>
              </div>
              
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wide mb-3">
                {step.title}
              </h3>
              
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Time-to-value callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 border border-accent px-8 py-4">
            <div>
              <div className="font-[var(--font-bebas)] text-4xl text-accent">5 MIN</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Setup Time</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="font-[var(--font-bebas)] text-4xl text-accent">24 HRS</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">First Momentum</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="font-[var(--font-bebas)] text-4xl text-accent">90 DAYS</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Compounding Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
