import React from 'react'
import { GraduationCap } from 'lucide-react'

const Sidebar = ({ brand = 'AcademiaPro', subtitle, items = [], footerItems = [], accent = 'primary' }) => {
  return (
    <aside className="hidden md:fixed md:left-0 md:top-0 md:z-40 md:flex md:h-screen md:w-60 md:flex-col md:border-r md:border-line md:bg-surface md:px-4 md:py-6">
      <div className="mb-12 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
          <GraduationCap size={22} />
        </div>
        <div>
          <h1 className="text-lg font-black leading-none text-primary">{brand}</h1>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-outline">{subtitle}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon
          const activeClasses = 'border-primary bg-primary text-white shadow-sm'

          return (
            <a
              key={item.label}
              href={item.href || '#'}
              className={`flex items-center gap-3 rounded-lg border-l-4 px-4 py-3 transition-all ${
                item.active
                  ? `${activeClasses} font-semibold`
                  : 'border-transparent text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          )
        })}
      </nav>

      {footerItems.length > 0 && (
        <div className="mt-4 border-t border-line pt-4">
          {footerItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href || '#'}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  item.tone === 'danger'
                    ? 'text-danger hover:bg-error-container/30'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>
      )}
    </aside>
  )
}

export default Sidebar
