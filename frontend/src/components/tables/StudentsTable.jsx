import React from 'react'
import { Edit2, Eye } from 'lucide-react'

const StudentsTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left">
        <thead className="bg-surface-container-lowest">
          <tr>
            {['Matric Number', 'Student Name', 'Department', 'Level', 'Status', 'Actions'].map((heading) => (
              <th key={heading} className="px-6 py-3 text-xs font-semibold text-on-surface-variant">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.matric} className="transition hover:bg-surface-container-low">
              <td className="px-6 py-4 text-sm font-semibold text-on-surface">{row.matric}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.name}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.department}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.level}</td>
              <td className="px-6 py-4">
                <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase ${row.status === 'Active' ? 'bg-success/10 text-green-700' : 'bg-secondary-container text-on-secondary-container'}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2 text-on-surface-variant">
                  <button className="transition hover:text-primary" type="button" aria-label="Edit student">
                    <Edit2 size={17} />
                  </button>
                  <button className="transition hover:text-primary" type="button" aria-label="View student">
                    <Eye size={17} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsTable
