"use client"

export function FooterSection() {
  const footerColumns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Dashboard", href: "/dashboard" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Setup In 5 Minutes", href: "#how-it-works" },
        { label: "Blueprint Library", href: "#features" },
        { label: "Growth Playbook", href: "#features" },
        { label: "Support", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#hero" },
        { label: "X Growth OS", href: "#features" },
        { label: "Contact", href: "#pricing" },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-border px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wide mb-4">
              LAUNCHALONE
            </h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              The ultra specialist for X growth built for personal and business brands.
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground text-center">
            © 2026 LAUNCHALONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
