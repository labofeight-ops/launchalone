"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-background">
      <AnimatedNoise opacity={0.02} />

      {/* Status badge - Skillkit style */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-2 rounded-lg backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            100% X-SAFE • ZERO AUTOMATION RISK
          </span>
        </div>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full max-w-6xl text-center">
        <h1 className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-tight">
          <span className="text-foreground">AI-Powered X Growth</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent to-blue-400 bg-clip-text text-transparent">
            Without the Suspension Risk
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Generate viral content with AI. Review it. Post it manually. 
          <span className="text-foreground font-medium"> Zero automation = Zero bans.</span>
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <div className="border border-border bg-card/50 backdrop-blur-sm px-4 py-2 rounded-md">
            <span className="text-sm text-muted-foreground">✓ No Auto-Posting</span>
          </div>
          <div className="border border-border bg-card/50 backdrop-blur-sm px-4 py-2 rounded-md">
            <span className="text-sm text-muted-foreground">✓ Manual Review</span>
          </div>
          <div className="border border-border bg-card/50 backdrop-blur-sm px-4 py-2 rounded-md">
            <span className="text-sm text-muted-foreground">✓ 100% Compliant</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
          >
            <ScrambleTextOnHover text="Start Growing Safely" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-3 border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-accent/50 px-8 py-4 rounded-lg font-medium transition-all duration-200"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof - Skillkit style */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-accent to-blue-400 bg-clip-text text-transparent mb-2">
              $500K+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              Secret Sauce Value
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-accent to-blue-400 bg-clip-text text-transparent mb-2">
              0%
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              AI Detection Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-accent to-blue-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              X Policy Compliant
            </div>
          </div>
        </div>
      </div>

      {/* Floating tag - bottom right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border bg-card/80 backdrop-blur-sm px-4 py-2 rounded-md">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            LAUNCHALONE / SAFE GROWTH
          </span>
        </div>
      </div>
    </section>
  )
}
