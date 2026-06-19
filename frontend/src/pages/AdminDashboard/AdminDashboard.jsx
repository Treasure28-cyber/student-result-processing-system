import React from 'react'
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  ClipboardCheck,
  FileBarChart,
  FileCheck2,
  Filter,
  GraduationCap,
  LayoutDashboard,
  LibraryBig,
  PlusCircle,
  Settings,
  Sparkles,
  UserPlus,
  Users,
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import TopNavbar from '../../components/common/TopNavbar'
import StatCard from '../../components/common/StatCard'
import QuickActionCard from '../../components/cards/QuickActionCard'
import StatusCard from '../../components/cards/StatusCard'
import StudentsTable from '../../components/tables/StudentsTable'
import RegistrationsTable from '../../components/tables/RegistrationsTable'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Students', icon: Users },
  { label: 'Departments', icon: Building2 },
  { label: 'Courses', icon: BookOpen },
  { label: 'Semesters', icon: CalendarDays },
  { label: 'Registrations', icon: ClipboardCheck },
  { label: 'Scores', icon: FileCheck2 },
  { label: 'Results', icon: GraduationCap },
  { label: 'Reports', icon: FileBarChart },
]

const students = [
  { matric: 'COS/4821/2023', name: 'Daniel Okoro', department: 'Computer Science', level: '400L', status: 'Active' },
  { matric: 'CHM/1934/2020', name: 'Samuel Eze', department: 'Chemistry', level: '400L', status: 'Active' },
  { matric: 'PNG/7502/2026', name: 'David Ogunleye', department: 'Petroleum Engineering', level: '100L', status: 'Active' },
  { matric: 'MTH/6189/2021', name: 'Michael Nwosu', department: 'Mathematics', level: '300L', status: 'Active' },
  { matric: 'PHY/9043/2024', name: 'Emmanuel Adeyemi', department: 'Physics', level: '200L', status: 'Active' },
  { matric: 'EEE/2718/2019', name: 'Joseph Okafor', department: 'Electrical Engineering', level: '400L', status: 'Active' },
  { matric: 'CIV/5630/2022', name: 'Chinedu Obi', department: 'Civil Engineering', level: '200L', status: 'Active' },
  { matric: 'MEC/8426/2025', name: 'Joshua Adebayo', department: 'Mechanical Engineering', level: '100L', status: 'Active' },
  { matric: 'STA/3907/2020', name: 'Victor Umeh', department: 'Statistics', level: '300L', status: 'Active' },
  { matric: 'BIO/7145/2023', name: 'Isaac Bello', department: 'Biology', level: '400L', status: 'Active' },
  { matric: 'GEO/2289/2021', name: 'John Ojo', department: 'Geography', level: '300L', status: 'Active' },
  { matric: 'ACC/6591/2019', name: 'Peter Nnaji', department: 'Accounting', level: '400L', status: 'Active' },
]

const registrations = [
  { initials: 'DO', name: 'Daniel Okoro', matric: 'COS/4821/2023', department: 'Computer Science', semester: '2024/2025', date: 'June 01, 2025', units: 18 },
  { initials: 'SE', name: 'Samuel Eze', matric: 'CHM/1934/2020', department: 'Chemistry', semester: '2024/2025', date: 'May 28, 2025', units: 20 },
  { initials: 'DOg', name: 'David Ogunleye', matric: 'PNG/7502/2026', department: 'Petroleum Engineering', semester: '2025/2026', date: 'Jan 12, 2026', units: 15 },
]

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar brand="AcademiaPro" subtitle="Student Result Processing System" items={navItems} footerItems={[{ label: 'Settings', icon: Settings }]} accent="gold" />

      <main className="min-h-screen md:ml-60">
        <TopNavbar
          sessionText="2024/2025 Session Active"
          profileName="Admin Central"
          profileMeta="Main Office"
        />

        <div className="mx-auto max-w-[1280px] space-y-6 p-4 md:p-8">
          <section className="relative overflow-hidden rounded-xl border border-line bg-white p-6 shadow-sm">
            <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="mb-2 text-3xl font-semibold text-primary">Welcome back, Administrator</h2>
                <p className="text-base leading-6 text-on-surface-variant">
                  Manage academic records, departments, courses, registrations, results, GPA, CGPA, and transcripts from one centralized dashboard.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-primaryHover active:scale-95" type="button">
                <PlusCircle size={20} />
                Quick Entry
              </button>
            </div>
            <GraduationCap className="absolute -bottom-12 -right-12 text-on-surface opacity-[0.04]" size={180} />
          </section>

          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <StatCard label="Total Students" value="14,280" icon={Users} meta="+12%" />
            <StatCard label="Departments" value="24" icon={Building2} meta="Static" />
            <StatCard label="Total Courses" value="312" icon={BookOpen} meta="+4" />
            <StatCard label="Active Semesters" value="2" icon={CalendarDays} meta="Current" tone="gold" />
            <StatCard label="Results Generated" value="12,654" icon={FileCheck2} meta="89%" />
            <StatCard label="Carryovers" value="412" icon={AlertTriangle} meta="-2%" tone="danger" danger />
          </section>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <section className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-line bg-surface-container-low px-6 py-4">
                  <h4 className="text-lg font-semibold text-on-surface">Administrative Quick Actions</h4>
                  <Sparkles className="text-outline" size={20} />
                </div>
                <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3">
                  <QuickActionCard label="Add Student" icon={UserPlus} />
                  <QuickActionCard label="Create Course" icon={LibraryBig} />
                  <QuickActionCard label="Create Dept." icon={Building2} />
                  <QuickActionCard label="Create Semester" icon={CalendarDays} />
                  <QuickActionCard label="Generate Results" icon={Sparkles} />
                  <QuickActionCard label="View Reports" icon={BarChart3} />
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-line bg-surface-container-low px-6 py-4">
                  <h4 className="text-lg font-semibold text-on-surface">Recently Enrolled Students</h4>
                  <button className="text-xs font-semibold text-primary hover:underline" type="button">View All</button>
                </div>
                <StudentsTable rows={students} />
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <h4 className="mb-6 text-lg font-semibold text-on-surface">Academic Overview</h4>
                <div className="space-y-8">
                  <div>
                    <p className="mb-3 flex justify-between text-xs font-semibold text-on-surface-variant">
                      <span>Students by Department</span>
                      <span>Live View</span>
                    </p>
                    <div className="flex h-24 items-end gap-2 border-b border-line px-2">
                      {[60, 85, 45, 30, 65].map((height) => (
                        <div key={height} className="flex-1 rounded-t-sm bg-primary/20 transition hover:bg-primary" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 flex justify-between text-xs font-semibold text-on-surface-variant">
                      <span>Pass vs Fail Rate</span>
                      <span>Cumulative</span>
                    </p>
                    <div className="relative h-4 overflow-hidden rounded-full bg-danger/20">
                      <div className="absolute inset-y-0 left-0 w-[92%] bg-primary" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-bold">
                      <span className="text-primary">PASS (92%)</span>
                      <span className="text-danger">FAIL (8%)</span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold text-on-surface-variant">Course Registration Trend</p>
                    <div className="h-20 w-full">
                      <svg className="h-full w-full text-secondary" viewBox="0 0 100 30" role="img" aria-label="Course registration trend">
                        <path d="M0,25 Q10,10 20,20 T40,15 T60,5 T80,15 T100,10" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <h4 className="mb-4 text-lg font-semibold text-on-surface">System Health</h4>
                <div className="space-y-3">
                  <StatusCard label="Database" value="Connected" pulse />
                  <StatusCard label="Active Session" value="2023/24 Rainy" />
                  <StatusCard label="Registered Students" value="14,280" tone="warning" />
                  <StatusCard label="Pending Results" value="128 Files" tone="danger" />
                </div>
              </section>
            </aside>
          </div>

          <section className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-line bg-surface-container-low px-6 py-4">
              <h4 className="text-lg font-semibold text-on-surface">Recent Course Registrations</h4>
              <button className="rounded-lg p-2 transition hover:bg-surface-container-high" type="button" aria-label="Filter registrations">
                <Filter size={20} />
              </button>
            </div>
            <RegistrationsTable rows={registrations} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
