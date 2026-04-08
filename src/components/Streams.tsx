import { motion } from 'framer-motion'

const streams = [
  {
    name: '1Team',
    tagline: 'Employee Benefits & Retention',
    description:
      "NZ's employee benefits platform helping corporates and membership associations retain and engage their people through real, tangible perks.",
    url: 'https://1team.org.nz',
    gradient: 'from-blue-600/20 to-blue-800/5',
    border: 'hover:border-blue-500/30',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    features: ['Corporate benefits platform', 'Membership associations', 'Staff retention strategy'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'LeadsBD',
    tagline: 'Business Development Made Simple',
    description:
      'Helping professional service providers master BD through a supportive, structured facilitation programme. Build confidence, consistency, and real commercial outcomes — without it feeling like sales.',
    url: 'https://leadsbd.co.nz',
    gradient: 'from-amber-600/20 to-amber-800/5',
    border: 'hover:border-amber-500/30',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    features: ['Facilitation programme & workshops', 'For service providers ready to grow', 'Data-driven BD strategy'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'Rove Agency',
    tagline: 'AI, Digital & Product Strategy',
    description:
      'Deep expertise in AI tools, digital product development, and project management — helping NZ businesses navigate the digital space and build smarter.',
    url: 'https://rove.agency',
    gradient: 'from-purple-600/20 to-purple-800/5',
    border: 'hover:border-purple-500/30',
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    features: ['AI tools & automation', 'No-code & low-code builds', 'Digital project management'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

export default function Streams() {
  return (
    <section id="streams" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent-blue uppercase tracking-widest mb-3">What I Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
            Three Businesses, One Mission
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Helping NZ organisations grow through smarter people strategy, practical BD, and the right use of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {streams.map((stream, i) => (
            <motion.a
              key={stream.name}
              href={stream.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`group relative flex flex-col rounded-2xl bg-dark-card border border-white/[0.06] ${stream.border} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Gradient top strip */}
              <div className={`h-1 w-full bg-gradient-to-r ${stream.gradient}`} />

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${stream.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-8 flex flex-col flex-1">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stream.accentBg} ${stream.accent} mb-5`}>
                  {stream.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 font-[family-name:var(--font-heading)]">{stream.name}</h3>
                <p className={`text-sm font-medium ${stream.accent} mb-4`}>{stream.tagline}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{stream.description}</p>

                {/* Feature list */}
                <ul className="mt-auto space-y-2 mb-6">
                  {stream.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className={`w-4 h-4 ${stream.accent} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className={`inline-flex items-center gap-2 text-sm font-medium ${stream.accent}`}>
                  Visit site
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
