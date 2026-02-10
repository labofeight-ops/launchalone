const activities = [
  {
    id: 1,
    title: "Scheduled 3 posts",
    time: "2 hours ago",
    stats: "Next post in 2h",
  },
  {
    id: 2,
    title: "Reply won top placement",
    time: "4 hours ago",
    stats: "Signal score 92/100",
  },
  {
    id: 3,
    title: "New follower wave",
    time: "5 hours ago",
    stats: "+47 today",
  },
  {
    id: 4,
    title: "DM starter triggered",
    time: "7 hours ago",
    stats: "14 replies started",
  },
  {
    id: 5,
    title: "Blueprint rotated",
    time: "9 hours ago",
    stats: "Story thread active",
  },
  {
    id: 6,
    title: "Offer CTA clicked",
    time: "11 hours ago",
    stats: "9 profile clicks",
  },
]

export function RecentActivity() {
  return (
    <div className="border border-border p-6">
      <h2 className="font-[var(--font-bebas)] text-2xl tracking-wide mb-4">
        RECENT ACTIVITY
      </h2>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 border border-border hover:border-accent/50 transition-colors"
          >
            <div className="mt-1">
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-sm text-foreground mb-1">
                {activity.title}
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span>{activity.time}</span>
                <span>•</span>
                <span>{activity.stats}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
