import { Link } from 'react-router-dom'
import ImageBox   from '../components/ImageBox'
import TickerBand from '../components/TickerBand'
import { heroImage, CATEGORIES, STATS, WHY_US, TICKER_ITEMS, CATEGORY_IMAGES } from '../data/siteData'

// ── Inline SVG icon components ───────────────────────────────
const SlashIcon = () => (
  <svg className="w-4 h-4 text-lime shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.5 3L7 21h-2L15.5 3z" />
  </svg>
)

// ── Stat counter card ────────────────────────────────────────
function StatCard({ value, label, delay = '' }) {
  return (
    <div className={`text-center animate-fade-up ${delay}`}>
      <div className="font-display text-lime leading-none mb-1"
           style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
        {value}
      </div>
      <div className="font-heading text-xs tracking-[3px] uppercase text-ash/70">{label}</div>
    </div>
  )
}

// ── Featured category card (home page preview) ────────────────
function FeaturedCard({ cat, imgSrc, index }) {
  const delay = `delay-${Math.min(index * 100 + 100, 700)}`
  return (
    <Link
      to="/categories"
      className={`group block relative overflow-hidden bg-graphite border border-steel/60
                  hover:border-lime/40 transition-all duration-300 animate-fade-up ${delay}`}
    >
      {/* Image / placeholder */}
      <ImageBox
        src={imgSrc}
        alt={cat.title}
        icon={cat.icon}
        className="h-48 w-full"
        overlay
      />

      {/* Lime left-border accent */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-lime
                      scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top z-10" />

      {/* Number tag */}
      <div className="absolute top-3 right-3 font-display text-xs text-lime/30 leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5">{cat.icon}</span>
          <div>
            <p className="font-heading text-[0.6rem] tracking-[3px] uppercase text-lime mb-0.5"
               style={{ color: cat.accent }}>
              {cat.subtitle}
            </p>
            <h3 className="font-heading font-700 text-white text-lg leading-tight
                           group-hover:text-lime transition-colors duration-200">
              {cat.title}
            </h3>
          </div>
        </div>
        <p className="font-body text-ash/60 text-sm mt-3 leading-relaxed line-clamp-2">{cat.desc}</p>

        <div className="flex items-center gap-2 mt-4 text-lime/50 group-hover:text-lime transition-colors duration-200">
          <span className="font-heading font-600 text-xs tracking-widest uppercase">Explore</span>
          <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
               fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const featured = CATEGORIES.slice(0, 6)

  return (
    <div>

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbon">

        {/* Background */}
        {heroImage ? (
          <div className="absolute inset-0">
            <img src={heroImage} alt="Fitball Shop" className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/60 to-carbon/90" />
          </div>
        ) : (
          /* Fallback geometric background */
          <div className="absolute inset-0 grid-texture" />
        )}

        {/* Big diagonal slash decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 slash-texture" />
        </div>

        {/* Vertical accent lines */}
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime/20 to-transparent" />
        <div className="absolute left-[11.5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime/8 to-transparent" />

        {/* Large bg number */}
        <div className="absolute right-8 bottom-0 font-display text-[22rem] leading-none text-white/[0.02] select-none pointer-events-none">
          01
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            {/* Label tag */}
            <div className="label-tag mb-6 animate-fade-up">
              🏆 Indore's Premier Sports Store
            </div>

            {/* Main headline */}
            <h1
              className="font-display text-white leading-[0.88] tracking-wide animate-slide-l"
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
            >
              GEAR
              <br />
              <span className="text-lime glow-lime">UP.</span>
              <br />
              TRAIN
              <br />
              HARD.
            </h1>

            {/* Sub line */}
            <p className="font-body text-ash/70 text-base leading-relaxed mt-6 mb-8 max-w-md animate-fade-up delay-300">
              Everything you need to train, compete, and win — gym equipment,
              sports gear, supplements, footwear and more. All under one roof.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Link to="/categories" className="btn-lime">Browse Categories →</Link>
              <Link to="/contact"    className="btn-ghost">Find Our Store</Link>
            </div>

            {/* Quick stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/8 animate-fade-up delay-500">
              {STATS.slice(0, 3).map(s => (
                <div key={s.label}>
                  <div className="font-display text-lime text-3xl leading-none">{s.value}</div>
                  <div className="font-heading text-ash/50 text-[0.6rem] tracking-[2px] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image box */}
          <div className="hidden lg:block relative animate-slide-r">
            <ImageBox
              src={heroImage}
              alt="Fitball Shop – Sports & Gym"
              icon="🏋️"
              className="w-full aspect-[4/5] max-h-[600px]"
              overlay={!!heroImage}
            />
            {/* Decorative corner marks */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-lime" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-lime" />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-lime px-5 py-3 animate-pulse-lime"
                 style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
              <div className="font-display text-carbon text-2xl leading-none">500+</div>
              <div className="font-heading text-carbon text-[0.55rem] tracking-[3px] uppercase">Products</div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-10 bg-lime animate-bounce" />
          <span className="font-heading text-[0.55rem] tracking-[4px] uppercase text-chalk">Scroll</span>
        </div>
      </section>

      {/* ════════════════ TICKER 1 — LIME ════════════════ */}
      <TickerBand
        items={TICKER_ITEMS}
        bg="bg-lime"
        textColor="text-carbon"
      />

      {/* ════════════════ FEATURED CATEGORIES ════════════════ */}
      <section className="py-24 px-5 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-tag mb-3">⚡ What We Stock</div>
            <h2 className="font-display text-white leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              SPORT<br />
              <span className="text-lime">CATEGORIES</span>
            </h2>
          </div>
          <Link to="/categories" className="btn-ghost shrink-0 self-start sm:self-auto">
            View All 12 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((cat, i) => (
            <FeaturedCard
              key={cat.id}
              cat={cat}
              imgSrc={CATEGORY_IMAGES[cat.id]}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ════════════════ TICKER 2 — DARK (reversed) ════════════════ */}
      <TickerBand
        items={TICKER_ITEMS.slice().reverse()}
        reverse
        bg="bg-graphite"
        textColor="text-lime"
        separator="/"
        className="border-y border-lime/10"
      />

      {/* ════════════════ STATS SECTION ════════════════ */}
      <section className="relative py-24 px-5 overflow-hidden bg-graphite">
        <div className="absolute inset-0 grid-texture opacity-50" />
        {/* Big decorative background text */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-[18rem] leading-none
                        text-white/[0.015] select-none pointer-events-none">
          FIT
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="label-tag justify-center mb-3">📊 By the Numbers</div>
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              THE <span className="text-lime">FITBALL</span> EDGE
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0
                          divide-y lg:divide-y-0 lg:divide-x divide-lime/10">
            {STATS.map((s, i) => (
              <div key={s.label} className={`px-8 py-6 text-center ${i > 0 ? 'pt-8 lg:pt-6' : ''}`}>
                <StatCard value={s.value} label={s.label} delay={`delay-${i * 100 + 100}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHY CHOOSE US ════════════════ */}
      <section className="py-24 px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="label-tag mb-4 animate-fade-up">✅ Why Fitball</div>
            <h2 className="font-display text-white mb-2 animate-fade-up delay-100"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              MORE THAN<br />
              <span className="text-lime">JUST A SHOP.</span>
            </h2>
            <p className="font-body text-ash/60 text-base leading-relaxed mb-10 max-w-md animate-fade-up delay-200">
              We've been Indore's go-to sports destination for over a decade — not just selling gear,
              but helping athletes at every level find what they truly need.
            </p>

            {/* Why us items */}
            <div className="space-y-5">
              {WHY_US.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex gap-4 items-start group animate-fade-up delay-${(i + 2) * 100}`}
                >
                  <div className="w-11 h-11 bg-graphite border border-lime/20 flex items-center justify-center
                                  text-xl shrink-0 group-hover:bg-lime group-hover:border-lime
                                  transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-white text-base mb-0.5 group-hover:text-lime transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="font-body text-ash/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + decorative grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {/* Large image */}
              <ImageBox
                src=""
                alt="Inside Fitball Shop"
                icon="🏆"
                className="col-span-2 h-64"
              />
              {/* Two smaller slots */}
              <ImageBox src="" alt="Gym Equipment" icon="🏋️" className="h-40" />
              <ImageBox src="" alt="Sports Gear"   icon="⚽" className="h-40" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-lime flex flex-col items-center justify-center
                            rounded-none animate-pulse-lime"
                 style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}>
              <span className="font-display text-carbon text-4xl leading-none">10+</span>
              <span className="font-heading text-carbon text-[0.5rem] tracking-[2px] uppercase">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ BRANDS TICKER ════════════════ */}
      <TickerBand
        items={['NIKE','ADIDAS','DECATHLON','SG','COSCO','YONEX','BDM','BSN','OPTIMUM NUTRITION','WILSON','SPALDING','REEBOK']}
        bg="bg-steel"
        textColor="text-chalk/50"
        separator="·"
        className="border-y border-lime/8"
      />

      {/* ════════════════ CTA STRIP ════════════════ */}
      <section className="relative py-20 px-5 overflow-hidden bg-lime">
        {/* Big text bg */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-carbon/10 leading-none"
                style={{ fontSize: 'clamp(8rem, 20vw, 18rem)' }}>
            GO
          </span>
        </div>

        <div className="relative z-10 text-center">
          <h2 className="font-display text-carbon leading-none mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            READY TO LEVEL UP?
          </h2>
          <p className="font-heading font-600 text-carbon/70 text-sm tracking-[3px] uppercase mb-8">
            Visit us in-store or reach out today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-carbon text-white
                         font-heading font-700 text-sm tracking-[3px] uppercase
                         hover:bg-graphite hover:-translate-y-0.5 transition-all duration-200"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Get Directions →
            </Link>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-carbon text-carbon
                         font-heading font-700 text-sm tracking-[3px] uppercase
                         hover:bg-carbon hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
