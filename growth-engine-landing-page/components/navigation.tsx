"use client"

export function Navigation() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight">
          LAUNCHALONE
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="rounded-xl bg-gradient-to-r from-accent to-orange-500 px-6 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-200"
        >
          Start In 5 Minutes
        </a>
      </div>
    </nav>
  )
}
