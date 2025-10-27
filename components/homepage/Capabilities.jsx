'use client'
import { Wrench, Scissors, Ruler, Hammer, Drill, Cog } from 'lucide-react'
import SectionHeader from './Header'

export default function Technologie() {
    const items = [
        {
            title: 'Rezanie laserom',
            desc: 'Presné tvarovanie dielov podľa výkresov. Čisté hrany a opakovateľná kvalita.',
            icon: Scissors
        },
        {
            title: 'Ohýbanie',
            desc: 'Tvarovanie plechov a profilov s dôrazom na presnosť uhlov a rozmerov.',
            icon: Ruler
        },
        {
            title: 'Rezanie',
            desc: 'Delenie materiálu pre kusovú aj sériovú výrobu podľa požiadaviek projektu.',
            icon: Wrench
        },
        {
            title: 'Vŕtanie',
            desc: 'Presné otvory a zahlbenia pripravené na montáž a ďalšie operácie.',
            icon: Drill
        },
        {
            title: 'Zváranie',
            desc: 'Pevné, čisté zvary pre dlhú životnosť konštrukcií (TIG • MIG • MAG).',
            icon: Hammer
        },
        {
            title: 'Montáž',
            desc: 'Kompletácia vyrobených dielov a zostáv u nás alebo priamo u zákazníka.',
            icon: Cog
        },
    ]

    return (
        <section id="technologie" className="bg-white text-slate-900">
            <div className="mx-auto max-w-6xl px-6 py-20">

                <SectionHeader
                    eyebrow="Technológie & postupy"
                    title="Čo robíme a ako"
                    align="left"
                />


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {items.map(({ title, desc, icon: Icon }, i) => (
                        <article
                            key={i}
                            className="group relative bg-white ring-1 ring-slate-200 p-8 md:p-9 transition
                         hover:shadow-[0_10px_30px_rgba(2,6,23,0.08)]"
                        >
                            {/* blue accent bar */}
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-blue-500" />

                            {/* centered icon in a blue square frame */}
                            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center border-2 border-blue-500">
                                <Icon className="h-6 w-6 text-blue-600 transition group-hover:translate-y-[-1px]" />
                            </div>

                            <h3 className="font-primary text-lg md:text-xl font-semibold tracking-tight text-center">
                                {title}
                            </h3>

                            <p className="mt-3 font-secondary text-sm leading-relaxed text-slate-700 text-center max-w-[42ch] mx-auto">
                                {desc}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
