import jpHero from '../assets/jp-hero.webp'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.25fr_1fr] gap-16 md:gap-20 items-center">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-ink/40"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
                Hamilton, New Zealand
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[44px] md:text-[64px] lg:text-[76px] font-semibold text-ink leading-[0.98] tracking-[-0.025em] mb-8">
              Helping NZ businesses keep good people and win{' '}
              <span className="squiggle-sky">better</span> work.
            </h1>

            {/* Supporting paragraph */}
            <p className="text-lg md:text-xl text-ink-soft leading-[1.55] max-w-[560px] mb-10">
              I'm JP — Business Manager at <strong className="text-ink font-semibold">1Team</strong>, a Growth Partner at <strong className="text-ink font-semibold">LeadsBD</strong>, and the person behind <strong className="text-ink font-semibold">Rove</strong>. Three different hats, one underlying job: making it easier for NZ businesses to hold on to the people they've got and bring in the work they actually want.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#streams"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-cream text-[15px] font-semibold hover:bg-ink/90 hover:-translate-y-0.5 transition-all duration-200 shadow-soft"
              >
                See what I do
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-[1.5px] border-ink text-ink text-[15px] font-semibold hover:bg-ink hover:text-cream transition-all duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative">
            {/* Mustard burst behind photo */}
            <div
              className="absolute top-6 -left-4 w-[95%] h-[95%] rounded-full bg-mustard -z-0 hidden md:block"
              aria-hidden="true"
            ></div>

            {/* Photo container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone shadow-lift z-10">
              <img
                src={jpHero}
                alt="JP McKay"
                className="w-full h-full object-cover"
              />
            </div>

            {/* "that's me" handwritten note */}
            <div
              className="absolute -top-2 -right-2 md:-right-6 z-20 font-hand font-semibold text-2xl md:text-3xl text-ink rotate-[-4deg]"
              aria-hidden="true"
            >
              that's me
              <svg
                className="absolute -bottom-6 right-2 w-12 h-8 text-ink"
                viewBox="0 0 50 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4 Q 22 14, 38 24 M 38 24 L 32 20 M 38 24 L 36 30"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Sky quarter-arc decoration */}
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-sky -z-0 hidden md:block"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
