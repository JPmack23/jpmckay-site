import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 30, suffix: '+', label: 'Years in NZ Business', detail: 'Agriculture, finance & technology' },
  { value: 3, suffix: '', label: 'Current Businesses', detail: '1Team, LeadsBD, Rove Agency' },
  { value: 55, suffix: '+', label: 'Apps & Platforms Built', detail: 'Plus 100+ websites & landing pages' },
  { value: 250, suffix: '+', label: 'Clients Served', detail: 'Across 1Team, Rove Agency & partners' },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 40
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
            The Numbers
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Three decades of building businesses, teams, and technology across New Zealand.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-accent-blue/20 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-accent-blue">{stat.label}</p>
                <p className="mt-1 text-xs text-gray-600">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
