import React from 'react'
import { MoreHorizontal } from 'lucide-react'

const AssignedCoursesTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] text-left">
        <thead className="bg-surface-container-low text-xs uppercase tracking-wider text-on-surface-variant">
          <tr>
            {['Course Code', 'Course Title', 'Level', 'Department', 'Students', 'Status', 'Actions'].map((heading) => (
              <th key={heading} className={`px-6 py-4 font-semibold ${heading === 'Actions' ? 'text-right' : ''}`}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.code} className="transition hover:bg-primary/5">
              <td className="px-6 py-4 text-sm font-bold text-primary">{row.code}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.title}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.level}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.department}</td>
              <td className="px-6 py-4 text-sm text-on-surface">{row.students}</td>
              <td className="px-6 py-4">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${row.status === 'Completed' ? 'bg-primary-container/20 text-primary' : 'bg-secondary-container/20 text-secondary'}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-on-surface-variant transition hover:text-primary" type="button" aria-label={`Actions for ${row.code}`}>
                  <MoreHorizontal size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssignedCoursesTable
