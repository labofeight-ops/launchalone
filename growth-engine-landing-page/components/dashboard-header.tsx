export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-[var(--font-bebas)] text-4xl tracking-wide">
          GROWTH COMMAND CENTER
        </h1>
      </div>
      
      <div className="flex items-center gap-2 border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        live monitoring
      </div>
    </div>
  )
}
