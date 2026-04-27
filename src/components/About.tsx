import aboutPhoto from '../assets/jp-about.jpg'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-stone">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="block w-8 h-px bg-ink/40"></span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            About me
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
          {/* Photo column */}
          <div className="relative md:sticky md:top-32 self-start">
            <div
              className="absolute -top-4 -right-4 w-3/4 h-3/4 rounded-full bg-sky -z-0 hidden md:block"
              aria-hidden="true"
            ></div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone shadow-soft z-10">
              <img
                src={aboutPhoto}
                alt="JP McKay at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Margin note */}
            <div
              className="absolute -bottom-6 -left-2 font-hand text-xl text-coral rotate-[-3deg] z-20"
              aria-hidden="true"
            >
              Hamilton, mostly.
            </div>
          </div>

          {/* Copy column */}
          <div>
            <h2 className="font-display text-[36px] md:text-[52px] font-medium text-ink leading-[1.05] tracking-[-0.02em] mb-10">
              From cooperatives to{' '}
              <em className="italic text-coral font-medium">code</em>.
            </h2>

            <div className="text-[18px] text-ink-soft leading-[1.65] space-y-6 max-w-[640px]">
              <p className="drop-cap">
                My career started in NZ's agriculture sector — CEO roles, boardrooms, cooperatives. Twenty years of that. I learned how NZ businesses really work, and where they get stuck.
              </p>

              <p>
                For the last decade I've been deep in technology. Building apps, launching platforms, shipping digital products. Not because tech is exciting on its own — because the businesses I'd spent my career around were getting left behind, and the tools to fix that are finally cheap enough for any operator to use.
              </p>

              <p>
                Today I wear three hats. <strong className="text-ink font-semibold">1Team</strong> helps NZ employers keep their best people, with real benefits — the kind staff actually use. <strong className="text-ink font-semibold">LeadsBD</strong> gives professional service firms a structured way to win more of the work they actually want. And <strong className="text-ink font-semibold">Rove Agency</strong> is where I build — AI tools, custom platforms, the things I'm working on that don't fit anywhere else.
              </p>

              <p>
                I'm not a developer. I build things anyway. AI plus modern no-code tooling, plus a stubborn bias to action — that combination ships software faster than most engineering teams I've worked with. Hamilton-based, NZ-focused, always building something.
              </p>
            </div>

            {/* Caveat margin note */}
            <div className="mt-10 inline-flex items-start gap-3">
              <span
                className="font-hand text-2xl text-ink-soft rotate-[-2deg]"
                aria-hidden="true"
              >
                ↳ that's the short version
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
