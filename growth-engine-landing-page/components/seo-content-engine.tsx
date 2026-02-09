const pages = [
  {
    title: "The 10 post onboarding sequence",
    url: "/blueprints/onboarding-sequence",
    visitors: 234,
    ranking: 3,
  },
  {
    title: "Founder story thread blueprint",
    url: "/blueprints/founder-story-thread",
    visitors: 189,
    ranking: 7,
  },
  {
    title: "Customer proof thread pack",
    url: "/blueprints/customer-proof-pack",
    visitors: 456,
    ranking: 2,
  },
  {
    title: "Reply ladder script for niche leaders",
    url: "/blueprints/reply-ladder-script",
    visitors: 123,
    ranking: 12,
  },
]

export function SeoContentEngine() {
  return (
    <div className="border border-border p-6">
      <h2 className="font-[var(--font-bebas)] text-2xl tracking-wide mb-4">
        CONTENT BLUEPRINTS
      </h2>

      <div className="flex items-center gap-6 mb-6 font-mono text-xs text-muted-foreground">
        <div>
          <span className="text-foreground font-semibold">89</span> blueprints ready
        </div>
        <div>
          <span className="text-foreground font-semibold">34</span> in rotation
        </div>
        <div>
          <span className="text-foreground font-semibold">2,450</span> drafts shipped
        </div>
      </div>

      <div className="space-y-3">
        {pages.map((page) => (
          <div
            key={page.url}
            className="flex items-center justify-between p-3 border border-border hover:border-accent/50 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="font-mono text-sm text-foreground truncate mb-1">
                {page.title}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {page.url}
              </div>
            </div>
            <div className="flex items-center gap-6 ml-4">
              <div className="text-right">
                <div className="font-mono text-xs text-muted-foreground">visitors</div>
                <div className="font-mono text-sm font-semibold">{page.visitors}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-xs text-muted-foreground">rank</div>
                <div className="font-mono text-sm font-semibold">#{page.ranking}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
