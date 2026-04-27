import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'What I do', href: '#streams' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#connect' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-stone'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-semibold text-2xl tracking-tight text-coral leading-none"
        >
          JP McKay<span className="text-coral">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink/75 hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-ink text-cream hover:bg-ink/90 transition-all duration-200"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ink hover:text-coral"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-b border-stone px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-ink/75 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-3 text-sm font-semibold px-5 py-2.5 rounded-full bg-ink text-cream"
          >
            Let's talk
          </a>
        </div>
      )}
    </nav>
  )
}
