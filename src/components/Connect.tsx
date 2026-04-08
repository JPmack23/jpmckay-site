import { motion } from 'framer-motion'

const links = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/john-paul-mckay-59471319/',
    description: 'Connect and follow',
    color: 'group-hover:border-blue-500/30',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: '1Team',
    url: 'https://1team.org.nz',
    description: 'Employee benefits platform',
    color: 'group-hover:border-blue-500/30',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'LeadsBD',
    url: 'https://leadsbd.co.nz',
    description: 'BD made simple for service providers',
    color: 'group-hover:border-amber-500/30',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    label: 'Email',
    url: 'mailto:jp@rove.agency',
    description: 'jp@rove.agency',
    color: 'group-hover:border-purple-500/30',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function Connect() {
  return (
    <section id="connect" className="py-24 sm:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-accent-blue uppercase tracking-widest mb-3">Connect</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
            Let's Talk
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Whether it's employee retention, business development, or navigating the digital landscape — I'd like to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={`group flex items-center gap-4 p-5 rounded-xl bg-dark-card border border-white/[0.06] ${link.color} transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 group-hover:text-white transition-colors shrink-0">
                {link.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{link.label}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{link.description}</p>
              </div>
              <svg className="w-4 h-4 text-gray-700 group-hover:text-gray-400 ml-auto transition-all group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
