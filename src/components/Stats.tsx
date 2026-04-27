const stats = [
  { value: '20+', label: 'Years in NZ business', detail: 'Agriculture, primary, technology' },
  { value: '55+', label: 'Apps & platforms built', detail: 'For 1Team, Rove, partners' },
  { value: '100+', label: 'Websites shipped', detail: 'Plus landing pages, brand sites' },
  { value: '250+', label: 'Clients served', detail: 'NZ-wide, mostly Hamilton-Auckland' },
]

export default function Stats() {
  return (
    <section className="relative py-24 md:py-28 border-t border-stone bg-stone/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="block w-8 h-px bg-ink/40"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            By the numbers
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative">
              <div className="font-display text-[56px] md:text-[72px] font-semibold text-ink leading-[0.95] tracking-[-0.03em] mb-3 relative inline-block">
                {stat.value}
                {/* Hand-drawn coral underline on first stat */}
                {idx === 0 && (
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5 Q 25 1, 50 4 T 98 4"
                      stroke="#F27B5A"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
              <div className="text-[14px] font-semibold text-ink mb-1 leading-[1.3]">
                {stat.label}
              </div>
              <div className="text-[13px] text-ink-soft leading-[1.4]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 font-hand text-2xl text-ink-soft rotate-[-1deg]">
          numbers are nice. work is better.
        </p>
      </div>
    </section>
  )
}
