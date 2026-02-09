"use client"

import { Button } from "@/components/ui/button"
import { ScrambleTextOnHover } from "@/components/scramble-text"

const opportunities = [
  {
    id: 1,
    platform: "X",
    time: "8 min ago",
    intent: 9,
    priority: "high",
    post: "Looking for a simple way to grow my personal brand on X without sounding fake. Any recommendations?",
    response:
      "Check out LAUNCHALONE. It is built for personal and business brands, locks your real voice, and gives you a clear plan. Setup takes under 5 minutes.",
  },
  {
    id: 2,
    platform: "X",
    time: "15 min ago",
    intent: 8,
    priority: "high",
    post: "My business account is stuck at 2K followers. Posting daily but no lift. What actually works?",
    response:
      "The lift comes from timing and reply placement. LAUNCHALONE finds high velocity posts in your niche and drafts replies that earn top placement without spam.",
  },
  {
    id: 3,
    platform: "X Community",
    time: "32 min ago",
    intent: 7,
    priority: "medium",
    post: "Any playbooks for turning impressions into real leads on X?",
    response:
      "Use a tight offer, a clean link in bio, and replies that drive profile taps. LAUNCHALONE handles the flow and tracks what converts.",
  },
]

export function LiveOpportunities() {
  return (
    <div className="border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-[var(--font-bebas)] text-2xl tracking-wide">
          LIVE OPPORTUNITIES
        </h2>
        <div className="bg-accent/10 border border-accent px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
          3 HIGH PRIORITY
        </div>
      </div>

      <div className="space-y-4">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className={`border-l-4 ${
              opp.priority === "high" ? "border-l-orange-500" : "border-l-accent"
            } bg-muted/30 p-6`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {opp.platform}
                </span>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {opp.time}
                </span>
              </div>
              <div className="flex items-center gap-1 border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                <span>⬡</span>
                <span>{opp.intent}/10 intent</span>
              </div>
            </div>

            <blockquote className="border-l-2 border-border pl-4 mb-4 font-mono text-sm text-foreground/90 italic">
              {opp.post}
            </blockquote>

            <div className="bg-muted p-4 mb-4 font-mono text-sm text-muted-foreground leading-relaxed">
              {opp.response}
            </div>

            <div className="flex items-center gap-2">
              <Button className="font-mono text-xs uppercase tracking-widest">
                <ScrambleTextOnHover text="Review & Post" as="span" duration={0.4} />
              </Button>
              <Button
                variant="outline"
                className="font-mono text-xs uppercase tracking-widest bg-transparent"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                className="font-mono text-xs uppercase tracking-widest bg-transparent"
              >
                Skip
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
