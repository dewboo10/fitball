import { NavLink } from 'react-router-dom'
import { CONTACT_INFO, CATEGORIES } from '../data/siteData'

const QUICK_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/categories', label: 'All Categories' },
  { to: '/contact',    label: 'Visit Us' },
]

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-lime/10">

      {/* ── Top accent line ── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent" />

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-lime flex items-center justify-center font-display text-carbon text-2xl"
                 style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
              F
            </div>
            <div>
              <div className="font-display text-white text-2xl tracking-wide leading-none">FITBALL</div>
              <div className="font-heading text-[0.5rem] tracking-[4px] uppercase text-ash/60 mt-0.5">Sports & Gym Store</div>
            </div>
          </div>

          <p className="font-body text-ash/60 text-sm leading-relaxed max-w-xs">
            Your one-stop destination for everything sports and fitness in Indore —
            premium gear, expert advice, and unbeatable selection.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {Object.entries(CONTACT_INFO.social).map(([key, href]) => {
              const icons = { instagram: '📸', facebook: '📘', youtube: '▶️', whatsapp: '🟢' }
              return (
                <a
                  key={key}
                  href={href}
                  aria-label={key}
                  className="w-9 h-9 border border-lime/20 flex items-center justify-center text-sm
                             hover:bg-lime hover:border-lime transition-all duration-200 hover:scale-110"
                >
                  {icons[key]}
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-700 text-xs tracking-[3px] uppercase text-lime mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 list-none">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className="font-body text-ash/60 hover:text-lime text-sm transition-colors duration-200
                             flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-lime/30 group-hover:w-5 group-hover:bg-lime transition-all duration-200" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories quick view */}
        <div>
          <h4 className="font-heading font-700 text-xs tracking-[3px] uppercase text-lime mb-5">
            Categories
          </h4>
          <ul className="space-y-3 list-none">
            {CATEGORIES.slice(0, 7).map(cat => (
              <li key={cat.id}>
                <NavLink
                  to="/categories"
                  className="font-body text-ash/60 hover:text-lime text-sm transition-colors duration-200
                             flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-lime/30 group-hover:w-5 group-hover:bg-lime transition-all duration-200" />
                  {cat.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-700 text-xs tracking-[3px] uppercase text-lime mb-5">
            Contact
          </h4>
          <ul className="space-y-4 list-none font-body text-ash/60 text-sm">
            <li className="flex gap-2.5">
              <span className="shrink-0 mt-0.5">📍</span>
              <span className="leading-relaxed">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-2.5">
              <span>📞</span>
              <span>{CONTACT_INFO.phone1}</span>
            </li>
            <li className="flex gap-2.5">
              <span>📧</span>
              <span>{CONTACT_INFO.email}</span>
            </li>
            <li className="flex gap-2.5">
              <span>🕐</span>
              <span>Mon–Sat: 9 AM – 9 PM<br />Sun: 10 AM – 7 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-lime/8 max-w-7xl mx-auto px-5 py-5
                      flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="font-body text-xs text-ash/30">
          © {new Date().getFullYear()} Fitball Shop. All rights reserved.
        </span>
        <span className="font-heading text-xs tracking-widest uppercase text-lime/50">
          Built for Champions ⚡
        </span>
      </div>
    </footer>
  )
}
