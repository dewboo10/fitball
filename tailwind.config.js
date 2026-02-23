/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette
        lime:     '#C8F400',   // electric neon lime — primary accent
        'lime-dim': '#9EB800', // darker lime for hover
        carbon:   '#0D0D0D',   // near-black
        graphite: '#1A1A1A',   // dark card bg
        steel:    '#2A2A2A',   // elevated surfaces
        'steel-light': '#3A3A3A',
        ash:      '#8A8A8A',   // muted text
        chalk:    '#E8E8E8',   // body text on dark
        white:    '#FFFFFF',
        // Accent pops
        fire:     '#FF4D1A',   // danger / highlight red-orange
        cyan:     '#00D4FF',   // optional secondary accent
      },
      fontFamily: {
        // Display — ultra-condensed, aggressive
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        // Headings — condensed
        heading: ['"Barlow Condensed"', 'sans-serif'],
        // Body — clean readable
        body:    ['"Barlow"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      backgroundImage: {
        'carbon-grid': `
          linear-gradient(rgba(200,244,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,244,0,0.04) 1px, transparent 1px)
        `,
        'slash-pattern': `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 6px,
          rgba(200,244,0,0.04) 6px,
          rgba(200,244,0,0.04) 7px
        )`,
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      animation: {
        'ticker':       'ticker 28s linear infinite',
        'ticker-rev':   'tickerRev 22s linear infinite',
        'fade-up':      'fadeUp 0.7s ease both',
        'slide-in-l':   'slideInLeft 0.8s cubic-bezier(.16,1,.3,1) both',
        'slide-in-r':   'slideInRight 0.8s cubic-bezier(.16,1,.3,1) both',
        'pulse-lime':   'pulseLime 2.5s ease-in-out infinite',
        'hero-pan':     'heroPan 18s ease-in-out infinite alternate',
        'count-up':     'fadeUp 0.6s ease both',
        'scan-line':    'scanLine 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerRev: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        pulseLime: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,244,0,0)' },
          '50%':       { boxShadow: '0 0 30px 6px rgba(200,244,0,0.25)' },
        },
        heroPan: {
          '0%':   { backgroundPosition: '0% 40%' },
          '100%': { backgroundPosition: '100% 60%' },
        },
        scanLine: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%':       { opacity: '1' },
          '90%':       { opacity: '1' },
          '100%':      { transform: 'translateY(400%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
