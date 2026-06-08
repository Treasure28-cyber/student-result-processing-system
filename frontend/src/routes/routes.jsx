import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/Login'
import DashboardPage from '../pages/Dashboard'
import StudentsPage from '../pages/Students'
import DepartmentsPage from '../pages/Departments'
import CoursesPage from '../pages/Courses'
import SemestersPage from '../pages/Semesters'
import RegistrationsPage from '../pages/Registrations'
import ScoresPage from '../pages/Scores'
import ResultsPage from '../pages/Results'
import TranscriptPage from '../pages/Transcript'
import CarryoversPage from '../pages/Carryovers'
import ReportsPage from '../pages/Reports'
import ProfilePage from '../pages/Profile'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'students', element: <StudentsPage /> },
      { path: 'departments', element: <DepartmentsPage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'semesters', element: <SemestersPage /> },
      { path: 'registrations', element: <RegistrationsPage /> },
      { path: 'scores', element: <ScoresPage /> },
      { path: 'results', element: <ResultsPage /> },
      { path: 'transcript', element: <TranscriptPage /> },
      { path: 'carryovers', element: <CarryoversPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
])

export default routes
