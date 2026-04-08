export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
              JPMcKay<span className="text-blue-500">.</span>
            </span>
            <span className="text-sm text-gray-600">|</span>
            <span className="text-sm text-gray-600">Hamilton, New Zealand</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jpmckay/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-600 hover:text-white hover:border-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:jp@rove.agency"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-600 hover:text-white hover:border-white/10 transition-all"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.03] text-center">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} JP McKay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
