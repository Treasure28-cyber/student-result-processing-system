import React from 'react'

const StatCard = ({ label, value, icon: Icon, meta, tone = 'primary', danger = false }) => {
  const toneClasses = {
    primary: 'bg-primary/10 text-primary',
    gold: 'bg-secondary-container/30 text-secondary',
    warm: 'bg-tertiary-fixed/40 text-tertiary',
    danger: 'bg-danger/10 text-danger',
  }

  return (
    <div className={`rounded-xl border border-line bg-white p-5 shadow-sm transition hover:shadow-md ${danger ? 'border-l-4 border-l-danger/30' : ''}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[tone] || toneClasses.primary}`}>
          <Icon size={22} />
        </div>
        {meta && <span className={`text-xs font-bold ${danger ? 'text-danger' : 'text-primary'}`}>{meta}</span>}
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-outline">{label}</p>
      <h3 className="mt-1 text-2xl font-bold text-on-surface">{value}</h3>
    </div>
  )
}

export default StatCard
