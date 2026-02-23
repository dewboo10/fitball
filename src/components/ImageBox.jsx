/**
 * ImageBox — shows an image or a sleek dark placeholder with icon.
 *
 * Props:
 *   src       – image URL or import (empty string = placeholder)
 *   alt       – alt text
 *   icon      – emoji shown in placeholder
 *   className – wrapper classes
 *   imgClass  – classes on <img>
 *   overlay   – if true, renders a semi-transparent gradient overlay on the image
 */
export default function ImageBox({
  src,
  alt = '',
  icon = '📷',
  className = '',
  imgClass = 'w-full h-full object-cover',
  overlay = false,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <>
          <img src={src} alt={alt} className={imgClass} />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent" />
          )}
        </>
      ) : (
        /* Placeholder */
        <div className="w-full h-full flex flex-col items-center justify-center
                        bg-graphite border border-steel-light/40 grid-texture">
          {/* Animated scan line */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-lime/40 to-transparent animate-scan" />
          <span className="text-5xl leading-none">{icon}</span>
          <span className="mt-3 font-heading text-[0.6rem] tracking-[4px] uppercase text-ash/50">
            Add Image
          </span>
        </div>
      )}
    </div>
  )
}
