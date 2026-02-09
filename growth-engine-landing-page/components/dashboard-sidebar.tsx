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
      { label: "X Login", href: "/dashboard#x-login", icon: "⬡" },
    ],
  },
]

export function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-60 border-r border-border/50 bg-background/70 backdrop-blur-xl z-50 md:flex md:flex-col">
      <div className="p-6 border-b border-border/50">
        <Link href="/" className="text-lg font-bold tracking-tight hover:text-foreground transition-colors">
          LAUNCHALONE
        </Link>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          X Growth OS
        </div>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-6 overflow-y-auto">
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
      <div className="border-t border-border/50 p-4 bg-card/40">
        <div className="text-center">
          <div className="text-2xl font-semibold text-foreground">3,247</div>
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
