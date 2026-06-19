import React from 'react'
import { ChevronRight } from 'lucide-react'

const QuickActionCard = ({ label, icon: Icon, tone = 'primary', compact = false }) => {
  const colors = {
    primary: 'text-primary',
    gold: 'text-secondary',
    warm: 'text-tertiary',
  }

  if (compact) {
    return (
      <button className="flex w-full items-center justify-between rounded-xl border border-line bg-surface-container-low p-3 text-left transition hover:bg-surface-container" type="button">
        <span className="flex items-center gap-3">
          <Icon className={colors[tone] || colors.primary} size={20} />
          <span className="text-sm font-semibold text-on-surface">{label}</span>
        </span>
        <ChevronRight className="text-outline" size={18} />
      </button>
    )
  }

  return (
    <button className="group flex min-h-28 flex-col items-center justify-center rounded-lg border border-line bg-white p-4 text-center transition hover:border-primary hover:bg-primary/5 active:scale-95" type="button">
      <Icon className="mb-2 text-primary transition group-hover:scale-105" size={32} />
      <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary">{label}</span>
    </button>
  )
}

export default QuickActionCard
