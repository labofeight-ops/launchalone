"use client"

export function Navigation() {
  const links = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Inspiration", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg font-black">
            X
          </span>
          <span className="hidden sm:inline">LaunchAlone</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/dashboard#x-login"
          className="rounded-full border border-border bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold hover:brightness-110 transition-all duration-150"
        >
          Sign in with X
        </a>
      </div>
    </nav>
  )
}
