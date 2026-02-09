"use client"

import { AnimatedNoise } from "@/components/animated-noise"
import { ScrambleTextOnHover } from "@/components/scramble-text"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      description: "Perfect for testing the waters",
      features: [
        "10 voice-matched drafts per day",
        "25 proven post blueprints",
        "Basic reply recommendations",
        "Growth dashboard",
        "Email support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Growth",
      price: "$49",
      period: "/mo",
      description: "Most popular for serious growth",
      features: [
        "Unlimited drafts and rewrites",
        "Full blueprint library",
        "Reply Sniper automation",
        "Auto DM starter flows",
        "Competitor intel",
        "Optimal timing planner",
        "Account health guardrails",
        "Priority support + strategy calls",
      ],
      cta: "Start Growing",
      popular: true,
    },
    {
      name: "Pro",
      price: "$149",
      period: "/mo",
      description: "For influencers & brands",
      features: [
        "Everything in Growth",
        "Multi-account management (up to 5)",
        "Approval-based auto-posting",
        "Advanced competitor intelligence",
        "Custom blueprint packs",
        "A/B testing engine",
        "White-label reports",
        "Dedicated growth strategist",
        "API access",
      ],
      cta: "Go Pro",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block border border-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
            TRANSPARENT PRICING
          </div>
          <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight">
            CHOOSE YOUR<br/>GROWTH SPEED
          </h2>
          <p className="mt-4 font-mono text-sm text-muted-foreground max-w-2xl mx-auto">
            Start free. Upgrade when you're ready to scale. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border ${
                plan.popular ? "border-accent scale-105" : "border-border"
              } bg-card p-8 hover:border-accent transition-all duration-300`}
            >
              <AnimatedNoise opacity={0.02} />
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-accent px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-foreground">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="font-[var(--font-bebas)] text-2xl tracking-wide mb-2">
                  {plan.name}
                </h3>
                
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="font-[var(--font-bebas)] text-5xl">{plan.price}</span>
                  <span className="font-mono text-sm text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 min-h-[280px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="font-mono text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">⬡</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/dashboard"
                  className={`block w-full text-center border ${
                    plan.popular
                      ? "border-accent bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border-foreground/20 text-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  } px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200`}
                >
                  <ScrambleTextOnHover text={plan.cta} as="span" duration={0.6} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 border border-border bg-card p-8 max-w-4xl mx-auto">
          <AnimatedNoise opacity={0.02} />
          <div className="relative z-10">
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wide mb-4 text-center">
              SIMPLE MATH: YOUR ROI
            </h3>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
              <div className="text-center">
                <div className="text-accent font-[var(--font-bebas)] text-3xl mb-2">10K</div>
                <div className="text-muted-foreground">Followers in 90 days</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-[var(--font-bebas)] text-3xl mb-2">2%</div>
                <div className="text-muted-foreground">Convert to customers</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-[var(--font-bebas)] text-3xl mb-2">200</div>
                <div className="text-muted-foreground">New customers</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                Even at just $50/customer = <span className="text-accent">$10,000 revenue</span> from a $49/mo investment
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
