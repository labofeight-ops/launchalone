"use client"

import { ScrambleTextOnHover } from "@/components/scramble-text"

export function Navigation() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#hero" className="font-[var(--font-bebas)] text-2xl tracking-wide">
          LAUNCHALONE
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="border border-accent bg-accent px-6 py-2 font-mono text-xs uppercase tracking-widest text-accent-foreground hover:bg-accent/90 transition-all duration-200"
        >
          <ScrambleTextOnHover text="Start In 5 Minutes" as="span" duration={0.6} />
        </a>
      </div>
    </nav>
  )
}
