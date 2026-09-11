export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="Kampung Indonesia home">
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10.5V20h13v-9.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="15" r="2.2" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-display text-[1.0625rem] font-semibold tracking-tight">
          Kampung Indonesia
        </span>
        {!compact && (
          <span className="mt-1 hidden truncate text-[0.6875rem] font-medium tracking-[0.12em] text-muted-foreground uppercase lg:block">
            Education &amp; Community Development
          </span>
        )}
      </span>
    </a>
  );
}
