import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'
import StudentDashboard from '../pages/StudentDashboard/StudentDashboard'
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard'
import LecturerDashboard from '../pages/LecturerDashboard/LecturerDashboard'

const routes = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/student-dashboard', element: <StudentDashboard /> },
  { path: '/admin-dashboard', element: <AdminDashboard /> },
  { path: '/lecturer-dashboard', element: <LecturerDashboard /> },
])

export default routes
