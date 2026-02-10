"use client"

export function StatsSection() {
  const stats = [
    { value: "5 min", label: "full setup" },
    { value: "3x", label: "reply visibility" },
    { value: "$0", label: "ad spend needed" },
    { value: "24/7", label: "signal tracking" },
  ]

  return (
    <section className="relative py-24 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
            >
              <div className="text-3xl md:text-4xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
