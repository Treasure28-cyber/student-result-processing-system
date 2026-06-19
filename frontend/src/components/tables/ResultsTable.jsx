import React from 'react'

const gradeTone = {
  A: 'bg-primary/10 text-primary',
  B: 'bg-secondary-container/30 text-secondary',
  C: 'bg-tertiary-fixed/40 text-tertiary',
}

const ResultsTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left">
        <thead className="bg-surface-container-low">
          <tr>
            {['Course Code', 'Course Title', 'Score', 'Grade', 'Unit'].map((heading) => (
              <th key={heading} className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-outline">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.code} className="transition hover:bg-surface-container-lowest">
              <td className="px-6 py-4 text-sm font-bold text-on-surface">{row.code}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.title}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.score}</td>
              <td className="px-6 py-4">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${gradeTone[row.grade] || gradeTone.C}`}>{row.grade}</span>
              </td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResultsTable
