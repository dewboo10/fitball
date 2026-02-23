import { useState }   from 'react'
import { Link }        from 'react-router-dom'
import ImageBox        from '../components/ImageBox'
import TickerBand      from '../components/TickerBand'
import { CONTACT_INFO, SHOP_IMAGES, TICKER_ITEMS } from '../data/siteData'

// ── Input base class ─────────────────────────────────────────
const INP = `w-full px-4 py-3.5 bg-steel border border-steel-light/50 font-body text-sm text-chalk
             focus:outline-none focus:border-lime focus:bg-graphite transition-colors duration-200
             placeholder:text-ash/40`

const PURPOSES = [
  'Select purpose', 'Gym Equipment Enquiry', 'Sports Gear', 'Bulk / Team Order',
  'Supplement Enquiry', 'Equipment Repair / Service', 'General Enquiry',
]

// ── Contact detail row ────────────────────────────────────────
function ContactRow({ icon, label, lines }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 bg-lime flex items-center justify-center text-carbon text-lg shrink-0"
           style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}>
        {icon}
      </div>
      <div>
        <p className="font-heading font-600 text-[0.6rem] tracking-[3px] uppercase text-lime mb-1">{label}</p>
        {lines.map((l, i) => <p key={i} className="font-body text-chalk/80 text-sm leading-relaxed">{l}</p>)}
      </div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', purpose: '', message: '' })
  const [sent, setSent]  = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div>

      {/* ════════════════ PAGE HEADER ════════════════ */}
      <div className="relative bg-graphite pt-[72px] pb-16 overflow-hidden border-b border-lime/10">
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute right-8 bottom-0 font-display text-[14rem] leading-none
                        text-white/[0.02] select-none pointer-events-none">GO</div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-14">
          <div className="label-tag mb-4">📍 Find Us</div>
          <h1 className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}>
            VISIT<br /><span className="text-lime">FITBALL</span>
          </h1>
          <p className="font-body text-ash/60 text-base mt-4 max-w-lg leading-relaxed">
            We're located in the heart of Indore — drop by, our team is always ready to help you find exactly the gear you need.
          </p>
        </div>
      </div>

      {/* ════════════════ MAIN LAYOUT ════════════════ */}
      <div className="max-w-7xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ── LEFT: Info ── */}
        <div>

          {/* Shop images */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <ImageBox
              src={SHOP_IMAGES.exterior}
              alt="Fitball Shop Front"
              icon="🏪"
              className="col-span-2 h-56"
            />
            <ImageBox src={SHOP_IMAGES.interior1} alt="Inside the shop" icon="🏋️" className="h-36" />
            <ImageBox src={SHOP_IMAGES.interior2} alt="Sports section"  icon="⚽" className="h-36" />
          </div>

          {/* Contact details */}
          <div className="space-y-6 mb-10">
            <ContactRow
              icon="📍" label="Shop Address"
              lines={[CONTACT_INFO.address]}
            />
            <ContactRow
              icon="📞" label="Call Us"
              lines={[CONTACT_INFO.phone1, CONTACT_INFO.phone2]}
            />
            <ContactRow
              icon="📧" label="Email"
              lines={[CONTACT_INFO.email]}
            />
            <ContactRow
              icon="🟢" label="WhatsApp"
              lines={[CONTACT_INFO.whatsapp, 'Message us anytime for stock enquiries']}
            />
          </div>

          {/* Hours table */}
          <div>
            <h3 className="font-display text-white text-3xl mb-4">
              STORE HOURS
            </h3>
            <div className="border border-steel-light/30 overflow-hidden">
              {CONTACT_INFO.hours.map((h, i) => (
                <div
                  key={h.day}
                  className={`flex justify-between px-5 py-3.5
                              font-body text-sm border-b border-steel-light/20 last:border-b-0
                              ${i % 2 === 0 ? 'bg-graphite' : 'bg-steel/40'}`}
                >
                  <span className="text-ash/60">{h.day}</span>
                  <span className="text-lime font-heading font-600 tracking-wide">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 h-52 border border-lime/15 bg-graphite grid-texture
                          flex flex-col items-center justify-center text-ash/30 relative overflow-hidden">
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-lime/30 to-transparent animate-scan" />
            <span className="text-4xl mb-3">🗺️</span>
            <span className="font-heading text-xs tracking-[4px] uppercase">Vijay Nagar, Indore</span>
            <span className="font-body text-[0.65rem] mt-1 text-ash/20">(Embed Google Maps here)</span>
          </div>

          {/* Social links */}
          <div className="mt-8">
            <p className="font-heading font-600 text-xs tracking-[3px] uppercase text-lime mb-4">
              Follow Us
            </p>
            <div className="flex gap-3">
              {Object.entries(CONTACT_INFO.social).map(([key, href]) => {
                const info = {
                  instagram: { icon: '📸', label: 'Instagram' },
                  facebook:  { icon: '📘', label: 'Facebook' },
                  youtube:   { icon: '▶️', label: 'YouTube' },
                  whatsapp:  { icon: '🟢', label: 'WhatsApp' },
                }
                const { icon, label } = info[key] || {}
                return (
                  <a
                    key={key}
                    href={href}
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2 border border-steel-light/40
                               text-ash/60 hover:border-lime hover:text-lime
                               font-heading text-xs tracking-widest uppercase transition-all duration-200"
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div>
          <div className="bg-graphite border border-steel-light/30 p-8">

            {/* Form header */}
            <div className="mb-7">
              <div className="label-tag mb-3">✉️ Get In Touch</div>
              <h2 className="font-display text-white text-4xl leading-none mb-1">
                SEND A<br /><span className="text-lime">MESSAGE</span>
              </h2>
              <p className="font-body text-ash/50 text-sm mt-3">
                Stock enquiry, bulk order, or just want to know if something's in store — just ask.
              </p>
            </div>

            {/* Success message */}
            {sent && (
              <div className="mb-5 bg-lime/10 border border-lime/30 text-lime px-5 py-3 font-heading text-sm tracking-wide">
                ✅ Message sent! We'll get back to you within a few hours.
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading font-600 text-[0.6rem] tracking-[3px] uppercase text-ash/50 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required name="name" value={form.name} onChange={onChange}
                    placeholder="Rahul Sharma"
                    className={INP}
                  />
                </div>
                <div>
                  <label className="block font-heading font-600 text-[0.6rem] tracking-[3px] uppercase text-ash/50 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required name="phone" value={form.phone} onChange={onChange}
                    placeholder="+91 98765 43210"
                    className={INP}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-heading font-600 text-[0.6rem] tracking-[3px] uppercase text-ash/50 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email" name="email" value={form.email} onChange={onChange}
                  placeholder="rahul@email.com"
                  className={INP}
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block font-heading font-600 text-[0.6rem] tracking-[3px] uppercase text-ash/50 mb-1.5">
                  Purpose of Enquiry
                </label>
                <select name="purpose" value={form.purpose} onChange={onChange} className={INP}>
                  {PURPOSES.map(p => (
                    <option key={p} value={p === PURPOSES[0] ? '' : p} className="bg-graphite">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-heading font-600 text-[0.6rem] tracking-[3px] uppercase text-ash/50 mb-1.5">
                  Your Message
                </label>
                <textarea
                  name="message" value={form.message} onChange={onChange}
                  rows={5}
                  placeholder="Tell us what you're looking for — specific equipment, brand preferences, team sizes, budget range..."
                  className={`${INP} resize-y min-h-[120px]`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-lime text-carbon font-heading font-700 text-sm tracking-[4px] uppercase
                           hover:bg-white transition-all duration-200 hover:-translate-y-0.5
                           hover:shadow-[0_8px_30px_rgba(200,244,0,0.3)] mt-2"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              >
                ⚡ Send Message
              </button>

              <p className="font-body text-center text-ash/30 text-xs mt-2 tracking-wide">
                We typically respond within 2–3 hours during store hours.
              </p>
            </form>
          </div>

          {/* Quick contact cards below form */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            <a
              href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
              className="bg-graphite border border-steel-light/30 p-5 text-center
                         hover:border-lime/40 hover:bg-steel transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-heading font-700 text-white text-xs tracking-[2px] uppercase group-hover:text-lime transition-colors">
                Call Now
              </div>
              <div className="font-body text-ash/50 text-xs mt-1">{CONTACT_INFO.phone1}</div>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-graphite border border-steel-light/30 p-5 text-center
                         hover:border-lime/40 hover:bg-steel transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">🟢</div>
              <div className="font-heading font-700 text-white text-xs tracking-[2px] uppercase group-hover:text-lime transition-colors">
                WhatsApp
              </div>
              <div className="font-body text-ash/50 text-xs mt-1">Chat with us</div>
            </a>
          </div>
        </div>
      </div>

      {/* ════════════════ BOTTOM TICKER ════════════════ */}
      <TickerBand
        items={TICKER_ITEMS}
        bg="bg-lime"
        textColor="text-carbon"
      />

    </div>
  )
}
