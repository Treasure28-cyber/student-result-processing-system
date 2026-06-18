import React from 'react'
import {
  FileText,
  BookOpen,
  GraduationCap,
  History,
  LayoutDashboard,
  LineChart,
  Settings,
  ShieldCheck,
  User,
  UserPlus,
  AlertTriangle,
  LogOut,
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import TopNavbar from '../../components/common/TopNavbar'
import StatCard from '../../components/common/StatCard'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Course Registration', icon: UserPlus },
  { label: 'Results', icon: GraduationCap },
  { label: 'Transcript', icon: FileText },
  { label: 'Carryovers', icon: History },
]

const footerItems = [
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
  { label: 'Logout', icon: LogOut, tone: 'danger' },
]

const profileDetails = [
  { label: 'Sex', value: 'Male' },
  { label: 'Phone', value: '08000000000' },
  { label: 'Email', value: 'daniel.okoro4821@gmail.com' },
]

const academicDetails = [
  { label: 'Current Session', value: '2025/2026' },
  { label: 'Programme', value: 'Undergraduate' },
  { label: 'College', value: 'Computing' },
  { label: 'Department', value: 'Computer Science' },
  { label: 'Level', value: '400L' },
  { label: 'JAMB Number', value: '202300000000XX' },
  { label: 'Mode of Entry', value: 'UTME' },
  { label: 'In School', value: 'Yes', badge: true },
]

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar brand="AcademiaPro" subtitle="Student Result Processing System" items={navItems} footerItems={footerItems} />

      <main className="min-h-screen md:ml-60">
        <TopNavbar
          sessionText="2025/2026 Session Active"
          profileName="Daniel Okoro"
          profileMeta="COS/4821/2023"
        />

        <div className="p-4 pb-24 md:p-8">
          <section className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-on-surface">Welcome back, John Doe</h2>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-outline">
                <ShieldCheck className="text-primary" size={18} />
                <span>Academic Session: <strong className="text-on-surface">2025/2026</strong></span>
                <span className="text-line">|</span>
                <span>Semester: <strong className="text-on-surface">First</strong></span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primaryHover" type="button">
                Register Courses
              </button>
              <button className="rounded-lg border border-line bg-white px-6 py-2 text-sm font-semibold text-on-surface-variant shadow-sm transition hover:bg-surface-container-low" type="button">
                Download Transcript
              </button>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Current GPA" value="3.85" icon={LineChart} />
            <StatCard label="Current CGPA" value="3.72" icon={LayoutDashboard} tone="gold" />
            <StatCard label="Registered Courses" value="8" icon={BookOpen} tone="warm" />
            <StatCard label="Carryovers" value="0" icon={AlertTriangle} tone="danger" danger />
          </section>

          <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-xl border border-line border-t-4 border-t-primary bg-white shadow-sm">
              <div className="p-6">
                <div className="mb-6 flex flex-col items-center text-center">
                  <div className="mb-3 flex h-28 w-28 items-center justify-center rounded-md border-4 border-line bg-surface-container-low text-on-surface">
                    <User size={48} />
                  </div>
                  <h3 className="text-2xl font-medium text-on-surface">Daniel Okoro</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">COS/4821/2023</p>
                </div>

                <div className="divide-y divide-line border-y border-line">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Department</span>
                    <span className="text-right text-sm font-medium text-primary">Computer Science</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Current Level</span>
                    <span className="text-right text-sm font-medium text-primary">400L</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Phone Number</span>
                    <span className="text-right text-sm font-medium text-primary">08030000001</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Academic Session</span>
                    <span className="text-right text-sm font-medium text-primary">2025/2026</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Registered Courses</span>
                    <span className="text-right text-sm font-medium text-primary">8</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Current GPA</span>
                    <span className="text-right text-sm font-medium text-primary">3.85</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm font-bold text-on-surface">Current CGPA</span>
                    <span className="text-right text-sm font-medium text-primary">3.72</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-line border-t-4 border-t-primary bg-white shadow-sm">
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-medium text-on-surface">Academic Details</h3>
                  <ShieldCheck className="text-primary" size={24} />
                </div>

                <div className="divide-y divide-line border-y border-line">
                  {academicDetails.map((detail) => (
                    <div className="flex items-center justify-between gap-4 py-4" key={detail.label}>
                      <span className="text-sm font-bold text-on-surface">{detail.label}</span>
                      {detail.badge ? (
                        <span className="rounded-full bg-[#16004f] px-3 py-1 text-xs font-bold text-white">{detail.value}</span>
                      ) : (
                        <span className="text-right text-sm font-medium text-primary">{detail.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-end">
                  <button className="rounded-md bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-primaryHover" type="button">
                    View All
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="hidden border-t border-line/60 px-6 py-4 text-[10px] font-medium text-outline md:flex md:justify-between">
          <p>(c) 2025 AcademiaPro — Student Result Processing System</p>
          <div className="flex gap-4">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Use</a>
          </div>
        </footer>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-t border-line bg-surface px-6 md:hidden">
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon
          return (
            <a key={item.label} className={`flex flex-col items-center ${item.active ? 'text-primary' : 'text-on-surface-variant'}`} href="#">
              <Icon size={20} />
              <span className="mt-1 text-[10px] font-bold">{item.label === 'Dashboard' ? 'Home' : item.label.split(' ')[0]}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default StudentDashboard
