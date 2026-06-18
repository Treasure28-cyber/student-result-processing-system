import React from 'react'

const RegistrationsTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left">
        <thead className="bg-surface-container-lowest">
          <tr>
            {['Student', 'Department', 'Semester', 'Date Registered', 'Units'].map((heading) => (
              <th key={heading} className="px-6 py-3 text-xs font-semibold text-on-surface-variant">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={`${row.matric}-${row.semester}`} className="transition hover:bg-surface-container-low">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">{row.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{row.name}</p>
                    <p className="text-[10px] text-on-surface-variant">{row.matric}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.department}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.semester}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.date}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RegistrationsTable
