"use client"

import { useEffect, useRef } from "react"
import { AnimatedNoise } from "@/components/animated-noise"
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
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center px-6 md:px-12 py-20 pt-24 md:pt-32"
    >
      <AnimatedNoise opacity={0.02} />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent pointer-events-none" />

      <div ref={contentRef} className="relative z-10 w-full max-w-6xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 border border-border/50 rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-sm text-muted-foreground">Powering 12,483+ personal + business brands</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          Own X.{" "}
          <span className="bg-gradient-to-r from-accent via-orange-500 to-accent bg-clip-text text-transparent animate-gradient">
            No Noise.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Built on 2026 X ranking signals. Drafts, schedules, and engages in your real voice.
          Setup under 5 minutes. No tech skills needed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-orange-500 px-8 py-4 text-base font-semibold text-white hover:shadow-xl hover:shadow-accent/25 hover:scale-[1.02] transition-all duration-300"
          >
            Start Growing Now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card/30 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground hover:border-accent hover:bg-card/50 transition-all duration-300"
          >
            See The System
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
            <div className="text-2xl font-semibold text-foreground mb-1">$500K+</div>
            <div className="uppercase tracking-widest text-[11px]">Secret Sauce Value</div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
            <div className="text-2xl font-semibold text-foreground mb-1">25M+</div>
            <div className="uppercase tracking-widest text-[11px]">Posts Analyzed</div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
            <div className="text-2xl font-semibold text-foreground mb-1">Zero</div>
            <div className="uppercase tracking-widest text-[11px]">Bot Tone</div>
          </div>
        </div>
      </div>
    </section>
  )
}
