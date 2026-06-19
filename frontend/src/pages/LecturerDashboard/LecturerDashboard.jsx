import React from 'react'
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  CloudUpload,
  FileText,
  GraduationCap,
  History,
  Hourglass,
  LayoutDashboard,
  List,
  LogOut,
  MoreVertical,
  PencilLine,
  Percent,
  Plus,
  Search,
  Settings,
  User,
  Users,
  BadgeCheck,
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import StatCard from '../../components/common/StatCard'
import QuickActionCard from '../../components/cards/QuickActionCard'
import AssignedCoursesTable from '../../components/tables/AssignedCoursesTable'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Assigned Courses', icon: BookOpen },
  { label: 'Students', icon: Users },
  { label: 'Score Entry', icon: PencilLine },
  { label: 'Results Submission', icon: CloudUpload },
  { label: 'Reports', icon: BarChart3 },
]

const footerItems = [
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
  { label: 'Logout', icon: LogOut, tone: 'danger' },
]

const assignedCourses = [
  { code: 'CSC 401', title: 'Artificial Intelligence', level: '400L', department: 'Computer Science', students: 85, status: 'In Progress' },
  { code: 'CSC 305', title: 'Software Engineering', level: '300L', department: 'Computer Science', students: 120, status: 'Completed' },
  { code: 'CSC 201', title: 'Data Structures', level: '200L', department: 'Computer Science', students: 215, status: 'In Progress' },
]

const scoreEntries = [
  { initials: 'DO', name: 'Daniel Okoro', course: 'CSC 401', title: 'Artificial Intelligence', score: 78, grade: 'A', tone: 'primary' },
  { initials: 'SE', name: 'Samuel Eze', course: 'CSC 305', title: 'Software Engineering', score: 65, grade: 'B', tone: 'secondary' },
  { initials: 'DOg', name: 'David Ogunleye', course: 'CSC 201', title: 'Data Structures', score: 52, grade: 'C', tone: 'tertiary' },
]

const taskTone = {
  danger: 'bg-error-container/20 border-danger/10 text-danger',
  secondary: 'bg-secondary-container/10 border-secondary/10 text-secondary',
  primary: 'bg-primary-container/10 border-primary/10 text-primary',
}

const scoreTone = {
  primary: {
    avatar: 'bg-primary/10 text-primary',
    grade: 'bg-primary/10 text-primary',
  },
  secondary: {
    avatar: 'bg-secondary-container/20 text-secondary',
    grade: 'bg-secondary/10 text-secondary',
  },
  tertiary: {
    avatar: 'bg-tertiary-fixed/40 text-tertiary',
    grade: 'bg-tertiary/10 text-tertiary',
  },
}

const LecturerDashboard = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar brand="AcademiaPro" subtitle="Student Result Processing System" items={navItems} footerItems={footerItems} />

      <main className="min-h-screen md:ml-60">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-white/80 px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-primary-container/10 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-bold text-primary">2024/2025 Session Active</span>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative text-on-surface-variant transition hover:text-primary" type="button" aria-label="Notifications">
              <Bell size={21} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] font-bold text-white">2</span>
            </button>
            <button className="hidden text-on-surface-variant transition hover:text-primary sm:block" type="button" aria-label="Help">
              <CircleHelp size={21} />
            </button>
            <div className="flex items-center gap-3 border-l border-line pl-4 md:pl-6">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-bold leading-none text-on-surface">Dr. Johnson</p>
                <p className="mt-1 text-xs text-on-surface-variant">Senior Lecturer</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-surface-container-low text-on-surface">
                <User size={18} />
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-12 p-4 md:p-8">
          <section>
            <h2 className="text-3xl font-semibold text-on-surface">Welcome back, Dr. Johnson.</h2>
            <p className="mt-2 max-w-2xl text-base leading-6 text-on-surface-variant">
              Manage assigned courses, enter scores, review academic performance, and submit results efficiently through your centralized academic dashboard.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
            <StatCard label="Assigned Courses" value="5" icon={BookOpen} meta="Core" />
            <StatCard label="Total Students" value="420" icon={Users} tone="gold" />
            <StatCard label="Scores Entered" value="85%" icon={Percent} meta="+5%" tone="warm" />
            <StatCard label="Pending Results" value="2" icon={ClipboardList} tone="danger" />
            <StatCard label="Submitted Results" value="3" icon={BadgeCheck} />
            <StatCard label="Academic Session" value="2024/2025" icon={CalendarDays} tone="gold" />
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-line bg-white/95 p-6 shadow-sm backdrop-blur lg:col-span-2 md:p-8">
              <h4 className="mb-6 text-lg font-semibold">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <QuickActionCard label="Enter Scores" icon={PencilLine} />
                <QuickActionCard label="View Courses" icon={List} />
                <QuickActionCard label="Submit Results" icon={CloudUpload} />
                <QuickActionCard label="View Students" icon={Search} />
                <QuickActionCard label="Generate Reports" icon={FileText} />
                <QuickActionCard label="Review Performance" icon={BarChart3} />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white/95 p-6 shadow-sm backdrop-blur md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-semibold">Pending Tasks</h4>
                <MoreVertical className="text-on-surface-variant" size={20} />
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Submit CSC 401 Results', meta: 'High Priority | Due in 2 days', tone: 'danger' },
                  { title: 'Score Entry: CSC 305', meta: 'Medium | 15 students left', tone: 'secondary' },
                  { title: 'Review Carryover Students', meta: 'Low | Academic Committee', tone: 'primary' },
                ].map((task) => (
                  <div key={task.title} className={`flex items-start gap-4 rounded-lg border p-4 ${taskTone[task.tone]}`}>
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-current" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-on-surface">{task.title}</p>
                      <p className="mt-1 text-xs text-on-surface-variant">{task.meta}</p>
                    </div>
                    <ArrowRight size={18} />
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-lg border border-primary/20 py-2.5 text-xs font-bold text-primary transition hover:bg-primary/5" type="button">
                View All Tasks
              </button>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-line bg-white/95 shadow-sm backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line p-6">
              <div>
                <h4 className="text-lg font-semibold">Assigned Courses</h4>
                <p className="text-xs text-on-surface-variant">Course load for the current semester</p>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white transition hover:bg-primaryHover" type="button">
                <Plus size={17} />
                Course Request
              </button>
            </div>
            <AssignedCoursesTable rows={assignedCourses} />
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-white/95 p-6 shadow-sm backdrop-blur md:p-8">
              <h4 className="mb-8 text-lg font-semibold">Academic Performance Overview</h4>
              <div className="space-y-8">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-on-surface">Grade Distribution (A-B)</span>
                    <span className="text-sm font-bold text-primary">68%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-line/70">
                    <div className="h-full w-[68%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-on-surface">Pass vs Fail Rate</span>
                    <span className="text-sm font-bold text-secondary">92% Pass</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-line/70">
                    <div className="h-full w-[92%] rounded-full bg-secondary" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-line pt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">4.2</p>
                    <p className="text-xs text-on-surface-variant">Avg. GPA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">15</p>
                    <p className="text-xs text-on-surface-variant">Carryovers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-tertiary">3</p>
                    <p className="text-xs text-on-surface-variant">Courses Marked</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-xl border border-line bg-white/95 p-6 shadow-sm backdrop-blur md:p-8">
              <h4 className="mb-6 text-lg font-semibold">Recent Score Entries</h4>
              <div className="flex-1 space-y-6 overflow-y-auto pr-2">
                {scoreEntries.map((entry) => {
                  const tone = scoreTone[entry.tone]
                  return (
                    <div key={entry.name} className="flex items-center justify-between border-b border-line pb-4">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${tone.avatar}`}>{entry.initials}</div>
                        <div>
                          <p className="text-sm font-bold">{entry.name}</p>
                          <p className="text-xs text-on-surface-variant">{entry.course} | {entry.title}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{entry.score}</p>
                        <span className={`rounded px-2 py-0.5 text-xs font-bold ${tone.grade}`}>{entry.grade}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="mt-6 flex items-center gap-2 text-xs font-bold text-primary transition hover:gap-3" type="button">
                View All Entries
                <ArrowRight size={16} />
              </button>
            </div>
          </section>

          <footer className="grid grid-cols-2 gap-6 pb-12 md:grid-cols-4">
            {[
              { label: 'Current Session', value: '2024/2025 Harmattan', icon: CalendarDays },
              { label: 'Courses Assigned', value: '05 Modules', icon: History },
              { label: 'Results Pending', value: '02 Results', icon: Hourglass, danger: true },
              { label: 'Results Submitted', value: '03 Results', icon: CheckCircle2, primary: true },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div className="flex items-center gap-3" key={item.label}>
                  <Icon className="text-on-surface-variant" size={22} />
                  <div>
                    <p className="text-xs text-on-surface-variant">{item.label}</p>
                    <p className={`text-sm font-bold ${item.danger ? 'text-danger' : item.primary ? 'text-primary' : 'text-on-surface'}`}>{item.value}</p>
                  </div>
                </div>
              )
            })}
          </footer>
        </div>
      </main>
    </div>
  )
}

export default LecturerDashboard
