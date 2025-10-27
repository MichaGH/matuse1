'use client'

export default function SectionHeader({ eyebrow, title, align = "left" }) {
  return (
    <header className={`mb-12 text-${align}`}>
      {eyebrow && (
        <p className="font-secondary text-xs tracking-wider uppercase text-slate-500">
          {eyebrow}
        </p>
      )}
      
      {title && (
        <h2 className="font-primary text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      )}
    </header>
  )
}
