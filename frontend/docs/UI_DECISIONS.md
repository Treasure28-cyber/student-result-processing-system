# UI Decisions

## Color Palette

The implementation follows the approved Academic Core palette from the Stitch exports. Primary actions and active navigation use `#069494`, hover states use `#047979`, and gold accent states use `#F6C763`. The main canvas uses `#F8FAFA`, cards use `#FFFFFF`, borders use `#E2E8F0`, headings use `#2D3748`, and body text uses `#4A5568`.

## Typography

Inter is the only UI font. Dashboard headings use 24-32px semibold text, data labels use small uppercase text with medium weight, and table content uses compact 14px body text for scanability.

## Layout Rules

Dashboard screens use a fixed 240px desktop sidebar, sticky 64px top navbar, and a fluid content area capped at 1280px where appropriate. Mobile collapses to a single content column; the student dashboard keeps the Stitch-style bottom navigation.

## Component Structure

Shared layout components live in `src/components/common`: `Sidebar`, `TopNavbar`, and `StatCard`. Tables live in `src/components/tables`, including results, students, registrations, and assigned lecturer courses. Dashboard action/status cards live in `src/components/cards`.

## Dashboard Strategy

The Student Dashboard focuses on academic self-service: GPA, CGPA, registered courses, carryovers, recent results, progress placeholders, and quick tasks. The Admin Dashboard focuses on operational density: institutional totals, administrative actions, recent students, registrations, academic overview placeholders, and system health. The Lecturer Dashboard focuses on assigned courses, score entry, pending result tasks, course submission status, performance summaries, and recent score entries.

## User Roles

The Login Page supports Student, Lecturer, and Admin selectors with dynamic identity fields.

## Mock Authentication Strategy

Demo users are stored in `src/data/mockUsers.js`. Login validation is role-specific and checks the selected role, identifier, and password locally. Successful logins route to the matching dashboard. Failed logins display a friendly inline error. There are no API calls, JWTs, sessions, or database reads in this phase.

## Routing Structure

The active routes are `/login`, `/student-dashboard`, `/admin-dashboard`, and `/lecturer-dashboard`. The root route redirects to `/login`. Later module routes such as students, courses, departments, semesters, registrations, results, and transcript are intentionally not active yet.
