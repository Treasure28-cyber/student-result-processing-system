# Project Progress

## Why git did not show the new folders

Git does not track empty directories. When you create folders without files inside them, `git status` will not list them as untracked.

## Fix applied

- Added placeholder files to the `frontend` scaffold so the project structure is tracked.
- Added `.gitkeep` files to `frontend/`, `backend/`, `database/`, and `docs/` so those empty directories can also be seen by Git.
- Created a progress document in `docs/PROJECT_PROGRESS.md`.

## Frontend scaffolding created

- `frontend/public/index.html`
- `frontend/src/App.jsx`
- `frontend/src/main.jsx`
- `frontend/src/index.css`
- `frontend/src/routes/routes.jsx`
- `frontend/src/services/api.js`
- `frontend/src/hooks/useAuth.js`
- `frontend/src/context/AuthContext.jsx`
- `frontend/src/layouts/MainLayout.jsx`
- `frontend/src/components/common/Logo.jsx`
- `frontend/src/components/forms/LoginForm.jsx`
- `frontend/src/components/tables/StudentTable.jsx`
- `frontend/src/components/cards/InfoCard.jsx`
- Page folders for Login, Dashboard, Students, Departments, Courses, Semesters, Registrations, Scores, Results, Transcript, Carryovers, Reports, and Profile.

## Notes

- No backend, database, or business logic was added.
- The scaffold is ready for frontend developers to implement React pages, routes, and UI.
