import jpHero from '../assets/jp-hero.webp'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.25fr_1fr] gap-12 md:gap-16 items-center">
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

          {/* Right — photo with mustard speech-bubble background */}
          <div className="relative flex items-center justify-center">

            {/* Mustard speech bubble background — large, behind the photo, with a tail pointing left toward the headline */}
            <svg
              viewBox="0 0 500 520"
              className="absolute inset-0 w-full h-auto z-0"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* Main bubble (slightly off-circle for organic feel) */}
              <ellipse
                cx="260"
                cy="260"
                rx="220"
                ry="230"
                fill="#F5C451"
              />
              {/* Speech bubble tail — pointing toward bottom-left */}
              <path
                d="M 90 380 Q 50 420, 30 470 Q 90 440, 130 410 Z"
                fill="#F5C451"
              />
            </svg>

            {/* Sky quarter-arc accent — sits behind, peeks out top-right */}
            <div
              className="absolute -top-2 -right-2 md:-right-6 w-32 h-32 rounded-full bg-sky -z-10 hidden md:block opacity-90"
              aria-hidden="true"
            ></div>

            {/* JP photo — circular, tight crop on face */}
            <div className="relative z-10 w-[78%] aspect-square rounded-full overflow-hidden shadow-lift bg-stone">
              <img
                src={jpHero}
                alt="JP McKay"
                className="w-full h-full object-cover scale-[1.6] origin-[50%_22%]"
              />
            </div>

            {/* "that's me" handwritten note — top right, angled */}
            <div
              className="absolute top-2 right-0 md:right-4 z-20 font-hand font-semibold text-2xl md:text-3xl text-ink rotate-[-6deg] pointer-events-none"
              aria-hidden="true"
            >
              that's me
              <svg
                className="absolute -bottom-7 right-3 w-14 h-10 text-ink"
                viewBox="0 0 56 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4 Q 24 18, 42 30 M 42 30 L 35 26 M 42 30 L 39 36"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Small coral squiggle accent — bottom left */}
            <svg
              className="absolute -bottom-2 -left-2 md:left-0 z-20 w-20 h-8 text-coral hidden md:block"
              viewBox="0 0 80 30"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 20 Q 15 5, 30 18 T 60 14 T 78 8"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
