"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navSections = [
  {
    title: "main",
    items: [
      { label: "Dashboard", href: "/dashboard#overview", icon: "⬡" },
      { label: "Content Studio", href: "/dashboard#content-studio", icon: "⬢" },
      { label: "Reply Sniper", href: "/dashboard#reply-opportunities", icon: "⬡" },
      { label: "Analytics", href: "/dashboard#before-after", icon: "⬢" },
    ],
  },
  {
    title: "tools",
    items: [
      { label: "Scheduled Posts", href: "/dashboard#scheduled-posts", icon: "⬡" },
      { label: "Timing Plan", href: "/dashboard#timing-plan", icon: "⬢" },
      { label: "Lead Flow", href: "/dashboard#lead-flow", icon: "⬡" },
      { label: "Activity", href: "/dashboard#activity", icon: "⬢" },
    ],
  },
  {
    title: "settings",
    items: [
      { label: "Account Health", href: "/dashboard#account-health", icon: "⬢" },
      { label: "X Access", href: "/dashboard#content-studio", icon: "⬡" },
    ],
  },
]

export function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 border-r border-border bg-background z-50 overflow-y-auto">
      <div className="p-6 border-b border-border">
        <Link href="/" className="font-[var(--font-bebas)] text-2xl tracking-wide hover:text-accent transition-colors">
          LAUNCHALONE
        </Link>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          X Growth OS
        </div>
      </div>

      <nav className="px-3 py-6 space-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <div className="px-3 mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {section.title}
              </span>
            </div>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm font-mono transition-colors",
                      activeItem === item.label
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                    )}
                  >
                    <span className="text-xs">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Growth Status */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4 bg-card">
        <div className="text-center">
          <div className="font-[var(--font-bebas)] text-3xl text-accent">3,247</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Total Followers
          </div>
          <div className="mt-2 font-mono text-xs text-muted-foreground">
            +47 today <span className="text-accent">↑</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
