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
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      <AnimatedNoise opacity={0.03} />

      {/* Status badge */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          POWERING 12,483+ PERSONAL + BUSINESS BRANDS
        </div>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full max-w-5xl text-center">
        <h1 className="font-[var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
          <span className="text-accent">ULTRA SPECIALIST</span> FOR X GROWTH
          <br />
          PERSONAL + BUSINESS BRANDS
        </h1>

        <p className="mt-8 max-w-2xl mx-auto font-mono text-sm text-muted-foreground leading-relaxed">
          Built on 2026 X algorithm secrets. Zero AI detection. Drafts, schedules, and engages in your real voice.
          Setup under 5 minutes. No tech skills needed.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <div className="border border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
            ✓ SETUP UNDER 5 MIN
          </div>
          <div className="border border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
            ✓ NO TECH SKILLS
          </div>
          <div className="border border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
            ✓ ZERO AI DETECTION
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-3 border border-accent bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest text-accent-foreground hover:bg-accent/90 transition-all duration-200"
          >
            <ScrambleTextOnHover text="Start Growing Now" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            See The Secret Sauce
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[10px] text-muted-foreground max-w-2xl mx-auto">
          <div className="text-center border border-border p-4">
            <div className="text-3xl font-[var(--font-bebas)] text-accent mb-1">$500K+</div>
            <div className="uppercase tracking-widest">SECRET SAUCE VALUE</div>
          </div>
          <div className="text-center border border-border p-4">
            <div className="text-3xl font-[var(--font-bebas)] text-accent mb-1">25M+</div>
            <div className="uppercase tracking-widest">POSTS ANALYZED</div>
          </div>
          <div className="text-center border border-border p-4">
            <div className="text-3xl font-[var(--font-bebas)] text-accent mb-1">0%</div>
            <div className="uppercase tracking-widest">AI DETECTION RATE</div>
          </div>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          LAUNCHALONE / ULTRA GROWTH OS
        </div>
      </div>
    </section>
  )
}
