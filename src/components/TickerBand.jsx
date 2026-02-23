/**
 * TickerBand — animated scrolling marquee strip.
 *
 * Props:
 *   items      – array of strings
 *   reverse    – scroll direction
 *   bg         – Tailwind bg class  (default: 'bg-lime')
 *   textColor  – Tailwind text class (default: 'text-carbon')
 *   separator  – string between items (default: '◆')
 *   speed      – CSS animation-duration override (default uses CSS class)
 */
export default function TickerBand({
  items = [],
  reverse = false,
  bg = 'bg-lime',
  textColor = 'text-carbon',
  separator = '◆',
  className = '',
}) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={`relative overflow-hidden py-3.5 ${bg} ${className}`}>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none
                      bg-gradient-to-r from-current to-transparent opacity-20" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none
                      bg-gradient-to-l from-current to-transparent opacity-20" />

      <div
        className={`
          inline-flex gap-8 whitespace-nowrap
          ${reverse ? 'animate-ticker-rev' : 'animate-ticker'}
        `}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`
              inline-flex items-center gap-8
              font-heading font-700 text-sm tracking-[3px] uppercase
              ${textColor}
            `}
          >
            <span>{item}</span>
            <span className="opacity-40 text-xs">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
