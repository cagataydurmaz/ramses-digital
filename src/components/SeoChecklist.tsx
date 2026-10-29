import { CheckCircle2 } from 'lucide-react'

export interface ChecklistRow {
  kriter: string
  bakin: string
  dikkat: string
}

interface Props {
  title: string
  intro: string
  rows: ChecklistRow[]
}

export default function SeoChecklist({ title, intro, rows }: Props) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{intro}</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#0D1225]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] text-zinc-400">
                <th className="p-4 font-medium">Kriter</th>
                <th className="p-4 font-medium">Nelere bakın</th>
                <th className="p-4 font-medium">Dikkat edin</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ kriter, bakin, dikkat }) => (
                <tr key={kriter} className="border-b border-white/[0.04] last:border-0 align-top">
                  <td className="p-4 text-white font-medium whitespace-nowrap">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                      {kriter}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-300">{bakin}</td>
                  <td className="p-4 text-zinc-400">{dikkat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
