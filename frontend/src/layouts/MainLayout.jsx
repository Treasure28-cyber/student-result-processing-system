import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="app-shell">
      <header>
        <h1>Student Result Processing System</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
