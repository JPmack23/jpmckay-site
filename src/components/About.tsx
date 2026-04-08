import { motion } from 'framer-motion'
import aboutPhoto from '../assets/jp-about.jpg'

const timeline = [
  {
    role: 'Business Manager',
    org: '1Team (CSC Group NZ)',
    period: 'Current',
    description: 'Leading NZ\'s employee benefits and retention platform — serving corporates and membership associations.',
  },
  {
    role: 'Business Growth Partner',
    org: 'LeadsBD',
    period: 'Current',
    description: 'Helping professional service providers master BD through structured facilitation, strategy, and workshops.',
  },
  {
    role: 'Founder',
    org: 'Rove Agency',
    period: 'Current',
    description: 'Building digital products, AI tools, and automations for NZ businesses.',
  },
  {
    role: 'CEO',
    org: 'NZ Farm Finance',
    period: 'Previous',
    description: 'Led a specialist rural finance company serving New Zealand\'s agricultural sector.',
  },
  {
    role: 'Acting CEO / Business & Operations Manager',
    org: 'Anexa',
    period: 'Previous',
    description: 'Led and created the Anexa brand through a period of strategic change to become one of NZ\'s largest veterinary clinics.',
  },
]

const tools = ['Claude', 'Claude Code', 'Lovable', 'Supabase', 'Certified Framer Expert', 'Certified Webflow Developer', 'Certified Persana Pro', 'FlutterFlow', 'Firebase']

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column — Photo + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Photo */}
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-dark-card to-[#16162a] border border-white/5 overflow-hidden mb-6 relative group">
              <img
                src={aboutPhoto}
                alt="JP McKay"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-dark-card border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">PGDip Management Studies</p>
                    <p className="text-xs text-gray-500">University of Waikato</p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-dark-card border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Bachelor of Agriculture</p>
                    <p className="text-xs text-gray-500">Massey University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="mt-6">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Tools I use daily</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-gray-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — Bio + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <p className="text-sm font-medium text-accent-blue uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight mb-6">
              Business builder. Tech enthusiast.
              <br />
              <span className="text-gray-500">Hamilton, NZ.</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-10">
              <p>
                John-Paul (JP) McKay's career started in New Zealand's Agriculture sector — CEO roles, boardrooms, cooperatives.
                But for the last decade, I've been deep in technology: building apps, launching platforms,
                shipping digital products, and helping businesses grow.
              </p>
              <p>
                Today, that experience comes together across three businesses. 1Team helps companies retain
                their best people through real, tangible benefits. LeadsBD gives professional service providers
                a structured way to win more work. And Rove Agency is where I build AI tools, digital products,
                and figure out what's next.
              </p>
              <p>
                I'm not a developer — but I build things. I use AI and no-code tools, with a bias toward action,
                to turn ideas into working products. Hamilton-based, NZ-focused, always building something.
              </p>
            </div>

            {/* Career timeline */}
            <div className="space-y-1">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.org}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex flex-col items-center pt-1">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.period === 'Current' ? 'bg-green-500' : 'bg-gray-700'}`} />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/5 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-white">{item.role}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.period === 'Current' ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-gray-600'}`}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent-blue mb-1">{item.org}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
