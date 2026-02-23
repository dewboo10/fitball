import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-carbon/95 backdrop-blur-md border-b border-lime/15 shadow-[0_2px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-white/5'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between gap-8">

        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-3 group shrink-0">
          {/* Logo mark */}
          <div className="w-9 h-9 bg-lime flex items-center justify-center font-display text-carbon text-xl leading-none
                          group-hover:scale-110 transition-transform duration-200"
               style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
            F
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl text-white tracking-wide leading-none group-hover:text-lime transition-colors duration-200">
              FITBALL
            </span>
            <span className="font-heading text-[0.55rem] tracking-[4px] uppercase text-ash/70 mt-0.5">
              Sports &amp; Gym Store
            </span>
          </div>
        </NavLink>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative font-heading font-600 text-sm tracking-[2.5px] uppercase pb-1 transition-colors duration-200
                   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-lime after:transition-[width] after:duration-300
                   ${isActive
                     ? 'text-lime after:w-full'
                     : 'text-chalk/70 hover:text-white after:w-0 hover:after:w-full'
                   }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <NavLink to="/contact" className="hidden md:block btn-lime text-xs py-2.5 px-6">
          Visit Store →
        </NavLink>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 text-chalk"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
            }
          </svg>
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-graphite border-t border-lime/10 px-5 pb-6">
          <ul className="flex flex-col gap-0 pt-3 list-none">
            {LINKS.map(({ to, label }) => (
              <li key={to} className="border-b border-steel/60">
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block font-heading font-600 text-sm tracking-[3px] uppercase py-4
                     ${isActive ? 'text-lime' : 'text-chalk/70'}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-5">
              <NavLink to="/contact" className="btn-lime text-xs py-3 block text-center">
                Visit Store →
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
