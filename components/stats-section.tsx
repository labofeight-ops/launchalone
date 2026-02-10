"use client"

export function StatsSection() {
  const stats = [
    { value: "5 min", label: "Full setup" },
    { value: "3x", label: "Reply visibility" },
    { value: "$0", label: "Ad spend needed" },
    { value: "24/7", label: "Signal tracking" },
  ]

  return (
    <section className="relative py-16 px-4 md:px-10 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
