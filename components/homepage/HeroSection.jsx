export default function HeroVideo() {
  return (
    <section className="relative">
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* simple dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-white">
        <span className="font-primary tracking-[0.06em] uppercase text-sm text-white/80">
          MATUSE
        </span>

        <h1 className="font-primary text-4xl sm:text-5xl font-semibold tracking-tight mt-3">
          Spoľahlivé riešenia v&nbsp;stavebníctve a&nbsp;kovovýrobe
        </h1>

        <p className="font-secondary mt-4 max-w-2xl text-white/90 leading-relaxed">
          Kompletné zateplenie a zákazková kovovýroba. Presne. S odbornosťou. Bez komplikácií.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/sluzby/stavebnictvo"
            className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-secondary hover:opacity-90"
          >
            Zateplenie domov
          </a>
          <a
            href="/sluzby/vyroba"
            className="border border-white/60 px-5 py-2.5 rounded-full font-secondary hover:bg-white/10"
          >
            Kovovýroba
          </a>
        </div>
      </div>
    </section>
  )
}
