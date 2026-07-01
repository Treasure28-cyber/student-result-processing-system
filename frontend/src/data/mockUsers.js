const mockUsers = [
  {
    role: 'admin',
    identifier: 'admin@srps.com',
    password: 'admin123',
    redirectTo: '/admin-dashboard',
  },
  {
    role: 'student',
    identifier: 'CSC/2025/001',
    password: 'student123',
    redirectTo: '/student-dashboard',
  },
  {
    role: 'lecturer',
    identifier: 'LEC001',
    password: 'lecturer123',
    redirectTo: '/lecturer-dashboard',
  },
]

export default mockUsers
