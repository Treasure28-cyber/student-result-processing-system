import React from 'react'
import { Bell, CircleHelp, User } from 'lucide-react'

const TopNavbar = ({ sessionText = '2024/2025 Session Active', profileName, profileMeta, avatarUrl }) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-white/80 px-4 shadow-sm backdrop-blur md:px-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-primary-container/10 px-3 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-bold text-primary">{sessionText}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container-low" type="button" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger" />
        </button>
        <button className="hidden h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container-low sm:flex" type="button" aria-label="Help">
          <CircleHelp size={20} />
        </button>
        <div className="hidden h-8 w-px bg-line sm:block" />
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold leading-none text-on-surface">{profileName}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-outline">{profileMeta}</p>
          </div>
          {avatarUrl ? (
            <img className="h-10 w-10 rounded-full border-2 border-primary object-cover shadow-sm" src={avatarUrl} alt="" />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-surface-container-low text-on-surface shadow-sm">
              <User size={18} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopNavbar
