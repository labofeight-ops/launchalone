type DashboardStat = {
  label: string
  value: string
  change: string
  positive?: boolean
}

const defaultStats: DashboardStat[] = [
  {
    label: "followers gained",
    value: "312",
    change: "last 7 days",
    positive: true,
  },
  {
    label: "impressions",
    value: "148K",
    change: "last 7 days",
    positive: true,
  },
  {
    label: "engagement rate",
    value: "3.9%",
    change: "+2.1 pts",
    positive: true,
  },
  {
    label: "profile CTR",
    value: "2.1%",
    change: "+1.5 pts",
    positive: true,
  },
]

export function DashboardStats({ stats = defaultStats }: { stats?: DashboardStat[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all"
        >
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
            {stat.label}
          </div>
          <div className="text-3xl font-semibold text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-muted-foreground">
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  )
}
