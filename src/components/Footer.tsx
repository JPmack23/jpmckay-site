export default function Footer() {
  return (
    <footer className="border-t border-stone py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + location */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="font-display font-semibold text-xl text-coral leading-none">
              JP McKay<span className="text-coral">.</span>
            </span>
            <span className="text-sm text-ink/30">·</span>
            <span className="text-sm text-ink-soft">Hamilton, New Zealand</span>
            <span className="text-sm text-ink/30">·</span>
            <a
              href="mailto:jp@rove.agency"
              className="text-sm text-ink-soft hover:text-coral transition-colors"
            >
              jp@rove.agency
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/john-paul-mckay-59471319/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-stone flex items-center justify-center text-ink-soft hover:bg-ink hover:text-cream transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:jp@rove.agency"
              className="w-9 h-9 rounded-full bg-stone flex items-center justify-center text-ink-soft hover:bg-ink hover:text-cream transition-all"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone/60 text-center">
          <p className="text-xs text-ink-mute">
            &copy; {new Date().getFullYear()} JP McKay · Built with a bias to action.
          </p>
        </div>
      </div>
    </footer>
  )
}
