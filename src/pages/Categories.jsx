import { useState } from 'react'
import { Link }      from 'react-router-dom'
import ImageBox       from '../components/ImageBox'
import TickerBand     from '../components/TickerBand'
import { CATEGORIES, CATEGORY_IMAGES, TICKER_ITEMS } from '../data/siteData'

// Filter tabs
const FILTERS = [
  { key: 'all',     label: 'All Categories' },
  { key: 'gym',     label: 'Gym & Fitness',  ids: ['gym_equipment','cardio_machines','yoga_pilates','accessories','supplements'] },
  { key: 'sport',   label: 'Sport Specific', ids: ['outdoor_sports','team_sports','combat_sports','water_sports','cycling'] },
  { key: 'apparel', label: 'Apparel',         ids: ['sportswear','footwear'] },
]

// ── Full category card ────────────────────────────────────────
function CategoryCard({ cat, imgSrc, index }) {
  return (
    <article
      className="group relative bg-graphite border border-steel/60 overflow-hidden
                 hover:border-lime/30 hover:shadow-[0_0_40px_rgba(200,244,0,0.07)]
                 transition-all duration-300"
    >
      {/* Index number */}
      <div className="absolute top-0 right-0 font-display text-8xl leading-none text-white/[0.03]
                      select-none pointer-events-none translate-x-2 -translate-y-2">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Left colour accent line */}
      <div
        className="absolute top-0 left-0 w-[3px] h-full scale-y-0 group-hover:scale-y-100
                   transition-transform duration-400 origin-top z-10"
        style={{ backgroundColor: cat.accent }}
      />

      {/* Category image / placeholder */}
      <ImageBox
        src={imgSrc}
        alt={cat.title}
        icon={cat.icon}
        className="h-52 w-full"
        overlay
      />

      {/* Body */}
      <div className="p-6">
        {/* Sub label */}
        <p
          className="font-heading font-600 text-[0.6rem] tracking-[4px] uppercase mb-1"
          style={{ color: cat.accent }}
        >
          {cat.subtitle}
        </p>

        {/* Title */}
        <h2 className="font-heading font-700 text-white text-xl mb-3
                       group-hover:text-lime transition-colors duration-200">
          {cat.title}
        </h2>

        {/* Description */}
        <p className="font-body text-ash/60 text-sm leading-relaxed mb-5">
          {cat.desc}
        </p>

        {/* Items grid (what's inside) */}
        <div>
          <p className="font-heading text-[0.6rem] tracking-[3px] uppercase text-ash/40 mb-3">
            What we stock
          </p>
          <div className="flex flex-wrap gap-2">
            {cat.items.map(item => (
              <span
                key={item}
                className="font-heading text-[0.65rem] tracking-wide px-2.5 py-1
                           bg-steel border border-steel-light/50 text-ash/70
                           group-hover:border-lime/20 transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Categories() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(cat =>
        FILTERS.find(f => f.key === activeFilter)?.ids?.includes(cat.id)
      )

  return (
    <div>

      {/* ════════════════ PAGE HEADER ════════════════ */}
      <div className="relative bg-graphite pt-[72px] pb-16 overflow-hidden border-b border-lime/10">
        <div className="absolute inset-0 grid-texture" />
        {/* Diagonal accent block */}
        <div className="absolute right-0 inset-y-0 w-1/3 bg-lime/3 slash-texture" />
        {/* Big bg word */}
        <div className="absolute right-8 bottom-0 font-display text-[14rem] leading-none
                        text-white/[0.025] select-none pointer-events-none">GEAR</div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-14">
          <div className="label-tag mb-4">⚡ Our Full Range</div>
          <h1
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            ALL<br />
            <span className="text-lime">CATEGORIES</span>
          </h1>
          <p className="font-body text-ash/60 text-base mt-4 max-w-lg leading-relaxed">
            12 sport and fitness categories. Hundreds of top-brand products. One store.
            Explore what Fitball has in stock for you.
          </p>
        </div>
      </div>

      {/* ════════════════ FILTER TABS ════════════════ */}
      <div className="sticky top-[72px] z-40 bg-carbon/95 backdrop-blur-md border-b border-lime/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex gap-3 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`
                font-heading font-600 text-xs tracking-[2px] uppercase px-5 py-2.5
                border transition-all duration-200
                ${activeFilter === f.key
                  ? 'bg-lime border-lime text-carbon'
                  : 'border-steel text-ash/60 hover:border-lime/40 hover:text-chalk bg-graphite'
                }
              `}
              style={activeFilter === f.key ? {} : {}}
            >
              {f.label}
            </button>
          ))}

          <span className="ml-auto self-center font-heading text-xs tracking-widest uppercase text-ash/30">
            {filtered.length} categories
          </span>
        </div>
      </div>

      {/* ════════════════ CATEGORY GRID ════════════════ */}
      <div className="max-w-7xl mx-auto px-5 py-14 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-32 text-ash/30 font-heading tracking-widest uppercase text-sm">
            No categories found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((cat, i) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                imgSrc={CATEGORY_IMAGES[cat.id]}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      {/* ════════════════ BOTTOM TICKER ════════════════ */}
      <TickerBand
        items={TICKER_ITEMS}
        bg="bg-lime"
        textColor="text-carbon"
      />

      {/* ════════════════ BOTTOM CTA ════════════════ */}
      <div className="bg-graphite border-t border-lime/10 py-16 px-5 text-center">
        <p className="font-heading font-600 text-xs tracking-[4px] uppercase text-lime mb-4">
          Can't find what you're looking for?
        </p>
        <h3 className="font-display text-white text-4xl mb-6">COME VISIT US</h3>
        <Link to="/contact" className="btn-lime">Get Store Location →</Link>
      </div>

    </div>
  )
}
