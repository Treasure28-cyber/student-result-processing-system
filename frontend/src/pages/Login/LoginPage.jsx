import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, AtSign, Badge, Check, Eye, EyeOff, GraduationCap, Lock, ShieldCheck, User, Users } from 'lucide-react'
import mockUsers from '../../data/mockUsers'

const roles = [
  { id: 'student', label: 'Student', icon: User, fieldLabel: 'Matric Number', placeholder: 'CSC/2025/001', type: 'text', fieldIcon: Badge },
  { id: 'lecturer', label: 'Lecturer', icon: Users, fieldLabel: 'Staff ID', placeholder: 'LEC001', type: 'text', fieldIcon: Users },
  { id: 'admin', label: 'Admin', icon: ShieldCheck, fieldLabel: 'Email Address', placeholder: 'admin@srps.com', type: 'email', fieldIcon: AtSign },
]

const LoginPage = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState('student')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const activeRole = useMemo(() => roles.find((item) => item.id === role), [role])
  const FieldIcon = activeRole.fieldIcon

  const handleRoleChange = (nextRole) => {
    setRole(nextRole)
    setIdentifier('')
    setPassword('')
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const user = mockUsers.find(
      (item) =>
        item.role === role &&
        item.identifier.toLowerCase() === identifier.trim().toLowerCase() &&
        item.password === password
    )

    if (!user) {
      setError('The details you entered do not match this portal role. Please check the demo credentials and try again.')
      return
    }

    setError('')
    navigate(user.redirectTo)
  }

  return (
    <main className="flex min-h-screen overflow-hidden bg-surface text-on-surface">
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary p-8 text-white lg:flex">
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-lg">
            <GraduationCap size={24} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">AcademiaPro</span>
        </div>

        <div className="relative z-10 mb-12 max-w-lg">
          <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-fixed">Official Academic Portal</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight">Student Result Processing System</h1>
          <p className="text-base leading-relaxed text-primary-fixed-dim">
            Manage student records, results, GPA, CGPA and transcripts from a centralized academic portal designed for high-performance institutions.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/30 bg-white/15 p-4 backdrop-blur">
              <div className="mb-1 text-xl font-bold">99.9%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary-fixed-dim">Data Accuracy</div>
            </div>
            <div className="rounded-xl border border-white/30 bg-white/15 p-4 backdrop-blur">
              <div className="mb-1 text-xl font-bold">Instant</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary-fixed-dim">Transcript Generation</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs font-medium text-white/65">
          <span>(c) 2024 AcademiaPro — Student Result Processing System</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>Privacy Policy</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>Support Center</span>
        </div>
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-primary-container/30 blur-3xl" />
        <div className="absolute right-10 top-1/3 h-40 w-40 rounded-full bg-secondary-container/20 blur-2xl" />
      </section>

      <section className="flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-12 flex justify-center lg:hidden">
            <div className="flex items-center gap-2 text-primary">
              <GraduationCap size={32} />
              <span className="text-2xl font-black">AcademiaPro</span>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-semibold text-on-surface">Welcome back</h2>
            <p className="text-sm text-on-surface-variant">Please enter your details to access your portal.</p>
          </div>

          <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
            <div className="mb-6 flex border-b border-line">
              {roles.map((item) => {
                const Icon = item.icon
                const selected = item.id === role
                return (
                  <button
                    key={item.id}
                    className={`flex flex-1 items-center justify-center gap-2 border-b-2 py-3 text-xs font-semibold uppercase tracking-wider transition ${
                      selected ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'
                    }`}
                    onClick={() => handleRoleChange(item.id)}
                    type="button"
                  >
                    <Icon size={17} />
                    {item.label}
                  </button>
                )
              })}
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 ml-1 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="user-id">
                  {activeRole.fieldLabel}
                </label>
                <div className="relative">
                  <FieldIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
                  <input
                    className="w-full rounded-lg border border-line py-3 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    id="user-id"
                    value={identifier}
                    onChange={(event) => {
                      setIdentifier(event.target.value)
                      setError('')
                    }}
                    placeholder={activeRole.placeholder}
                    required
                    type={activeRole.type}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 ml-1 block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
                  <input
                    className="w-full rounded-lg border border-line py-3 pl-10 pr-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    id="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                      setError('')
                    }}
                    placeholder="********"
                    required
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" onClick={() => setShowPassword((value) => !value)} type="button">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <label className="group flex cursor-pointer items-center gap-2">
                  <span className="relative flex items-center">
                    <input className="peer h-4 w-4 appearance-none rounded border border-line transition checked:border-primary checked:bg-primary" type="checkbox" />
                    <Check className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block" size={12} />
                  </span>
                  <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Remember me</span>
                </label>
                <a className="text-xs font-bold text-primary hover:underline" href="#">
                  Forgot password?
                </a>
              </div>

              {error && (
                <div className="rounded-lg border border-danger/20 bg-danger/10 px-4 py-3 text-sm font-medium text-danger">
                  {error}
                </div>
              )}

              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-bold text-white shadow-sm transition hover:bg-primaryHover hover:shadow-md active:scale-[0.98]" type="submit">
                <span>Sign in to Portal</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-on-surface-variant">
              Trouble logging in? <a className="font-bold text-primary hover:underline" href="#">Contact Registry</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
