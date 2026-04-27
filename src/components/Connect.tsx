const links = [
  {
    label: 'Email',
    value: 'jp@rove.agency',
    href: 'mailto:jp@rove.agency',
    primary: true,
  },
  {
    label: 'LinkedIn',
    value: '/in/john-paul-mckay',
    href: 'https://www.linkedin.com/in/john-paul-mckay-59471319/',
  },
  {
    label: '1Team',
    value: '1team.org.nz',
    href: 'https://1team.org.nz',
  },
  {
    label: 'LeadsBD',
    value: 'leadsbd.co.nz',
    href: 'https://leadsbd.co.nz',
  },
]

export default function Connect() {
  return (
    <section id="connect" className="relative py-24 md:py-32 border-t border-stone">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Caveat eyebrow */}
        <p
          className="font-hand text-2xl md:text-3xl text-coral rotate-[-2deg] inline-block mb-6"
          aria-hidden="true"
        >
          if any of that resonates —
        </p>

        {/* Headline */}
        <h2 className="font-display text-[40px] md:text-[60px] font-medium text-ink leading-[1.05] tracking-[-0.02em] mb-6">
          Let's talk.
        </h2>

        {/* Sub */}
        <p className="text-lg text-ink-soft leading-[1.6] mb-12 max-w-xl mx-auto">
          Whether it's keeping good people, winning better work, or building something with AI — I'd like to hear from you. No pitch deck required.
        </p>

        {/* Primary email CTA */}
        <a
          href="mailto:jp@rove.agency"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-cream text-[17px] font-semibold hover:bg-ink/90 hover:-translate-y-0.5 transition-all duration-200 shadow-soft mb-12"
        >
          jp@rove.agency
          <span aria-hidden="true">→</span>
        </a>

        {/* Secondary links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links
            .filter((l) => !l.primary)
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[15px] text-ink-soft hover:text-coral transition-colors"
              >
                <span className="font-semibold text-ink">{link.label}</span>
                <span className="mx-2 text-ink/30">·</span>
                <span>{link.value}</span>
              </a>
            ))}
        </div>
      </div>
    </section>
  )
}
