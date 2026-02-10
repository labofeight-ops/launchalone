"use client"

import { AnimatedNoise } from "@/components/animated-noise"

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free. Upgrade when you are ready to scale. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border ${
                plan.popular ? "border-accent/50 shadow-xl shadow-accent/10" : "border-border/50"
              } rounded-3xl bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300`}
            >
              <AnimatedNoise opacity={0.02} />
              
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-accent rounded-full px-4 py-1 text-[10px] font-medium uppercase tracking-widest text-accent-foreground">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 min-h-[280px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/dashboard#x-login"
                  className="block w-full text-center rounded-2xl bg-gradient-to-r from-accent to-orange-500 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all duration-300"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 border border-border/50 rounded-3xl bg-card/50 backdrop-blur-sm p-8 max-w-4xl mx-auto">
          <AnimatedNoise opacity={0.02} />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              SIMPLE MATH: YOUR ROI
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-3xl font-semibold text-foreground mb-2">10K</div>
                <div className="text-muted-foreground">Followers in 90 days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-foreground mb-2">2%</div>
                <div className="text-muted-foreground">Convert to customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-foreground mb-2">200</div>
                <div className="text-muted-foreground">New customers</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Even at $50/customer = <span className="text-accent">$10,000 revenue</span> from a $49/mo investment
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
