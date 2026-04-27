const hats = [
  {
    role: 'Day Job',
    roleColor: 'bg-coral text-cream',
    name: '1Team',
    tagline: 'Keeping good people',
    description:
      'Business Manager at 1Team (CSC Buying Group). An employee benefits platform helping NZ employers retain their best people with real, tangible perks — not pizza Fridays.',
    link: 'https://1team.org.nz',
    linkLabel: '1team.org.nz',
  },
  {
    role: 'Partnership',
    roleColor: 'bg-mustard text-ink',
    name: 'LeadsBD',
    tagline: 'Winning better work',
    description:
      'Business Growth Partner in a BD coaching programme for professional service firms — ag-tech, tech services, lawyers, accountants. Structured ways to win more of the work you actually want.',
    link: 'https://leadsbd.co.nz',
    linkLabel: 'How we work',
  },
  {
    role: 'My Studio',
    roleColor: 'bg-ink text-cream',
    name: 'Rove Agency',
    tagline: 'Building with AI',
    description:
      'Where I do my own consulting and platform-build work. AI tools, digital products, custom builds — shipped by one non-developer using a modern AI stack with a bias to action.',
    link: '#connect',
    linkLabel: 'Recent builds',
  },
]

export default function Streams() {
  return (
    <section id="streams" className="relative py-24 md:py-32 border-t border-stone">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 mb-16 md:mb-20 items-end">
          <h2 className="font-display text-[36px] md:text-[52px] font-medium text-ink leading-[1.05] tracking-[-0.02em]">
            One person,{' '}
            <em className="italic text-coral font-medium">three hats.</em>
            <br />
            Different work,{' '}
            <span className="text-ink-soft">same approach.</span>
          </h2>
          <div>
            <p className="font-hand text-2xl text-ink-soft mb-3 rotate-[-1deg]">
              not three businesses I founded —
            </p>
            <p className="text-ink-soft leading-[1.55]">
              I'm one person who shows up differently depending on what the work needs. Grounded, practical, built for NZ.
            </p>
          </div>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {hats.map((hat) => (
            <div
              key={hat.name}
              className="group bg-cream border border-stone rounded-2xl p-8 md:p-9 hover:-translate-y-1 hover:shadow-lift transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Role tag */}
              <span
                className={`inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-md mb-6 ${hat.roleColor}`}
              >
                {hat.role}
              </span>

              {/* Name */}
              <h3 className="font-display text-[30px] font-semibold text-ink leading-[1.1] tracking-[-0.01em] mb-2">
                {hat.name}
              </h3>

              {/* Tagline */}
              <p className="italic text-ink-soft text-[15px] mb-5">
                {hat.tagline}
              </p>

              {/* Description */}
              <p className="text-[15px] text-ink-soft leading-[1.6] mb-7">
                {hat.description}
              </p>

              {/* Link */}
              <a
                href={hat.link}
                target={hat.link.startsWith('http') ? '_blank' : undefined}
                rel={hat.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-coral group-hover:gap-3 transition-all duration-200"
              >
                {hat.linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
