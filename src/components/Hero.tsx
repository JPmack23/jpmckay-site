import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import heroPhoto from '../assets/jp-hero.jpg'

const roles = [
  { text: 'Employee Benefits & Retention', color: 'text-blue-400' },
  { text: 'Business Development Coaching', color: 'text-amber-400' },
  { text: 'AI & Digital Product Strategy', color: 'text-purple-400' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0e1020] to-[#0a0a0f]">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/[0.05] blur-[100px]" />
        {/* Subtle light wash behind photo area */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-slate-500/[0.04] blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content — split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:-gap-4 items-center" style={{ columnGap: 0 }}>
          {/* Left — Text content (3 cols) */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-gray-400 mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Hamilton, New Zealand
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-[family-name:var(--font-heading)] tracking-tight text-white leading-none"
            >
              <span style={{ textShadow: '0 0 20px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.4), 0 0 120px rgba(59,130,246,0.2)' }}>JP McKay</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-xl sm:text-2xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Helping NZ businesses keep great people and win better clients.
            </motion.p>

            {/* Rotating role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 h-10 flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-700" />
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className={`text-sm font-medium tracking-wide ${roles[roleIndex].color}`}
              >
                {roles[roleIndex].text}
              </motion.span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-700" />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="#streams"
                className="group relative px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <span className="relative z-10">See What I Do</span>
              </a>
              <a
                href="#connect"
                className="px-8 py-4 rounded-full text-gray-300 font-semibold text-sm border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right — Photo (2 cols), edges fade into background */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 sm:w-72 lg:w-full max-w-[400px]">
              {/* Soft coloured glow behind photo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-amber-500/15 rounded-full blur-3xl opacity-50" />

              {/* Photo with frame and dark overlay */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                <img
                  src={heroPhoto}
                  alt="JP McKay"
                  className="w-full h-full object-cover object-[center_20%]"
                />
                {/* Dark overlay to tame bright background areas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-[#0a0a0f]/15 to-[#0a0a0f]/50" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0f]/25" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
