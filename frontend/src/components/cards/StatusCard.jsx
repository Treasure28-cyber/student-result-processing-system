import React from 'react'

const StatusCard = ({ label, value, tone = 'success', pulse = false }) => {
  const colors = {
    success: 'bg-success',
    warning: 'bg-secondary-container',
    danger: 'bg-danger',
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-surface-container-low p-3">
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${colors[tone] || colors.success} ${pulse ? 'animate-pulse' : ''}`} />
        <span className="text-sm text-on-surface">{label}</span>
      </div>
      <span className={`text-xs font-semibold ${tone === 'danger' ? 'text-danger' : 'text-on-surface-variant'}`}>{value}</span>
    </div>
  )
}

export default StatusCard
