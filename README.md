# Employee Management Dashboard (CRUD with Next.js)

A **fully type-safe employee management system** built with **React, Next.js (App Router), and Local Storage**.  
This dashboard allows admins or HR managers to **add, edit, delete, and view employee records**, manage departments, roles, and filter/search employees.

---

## Features

### Employee Management
- Add, edit, and delete employee records.
- Assign roles, departments, supervisors, and statuses.
- Store essential details like **hire date**, **email**, **phone**, and **emergency contacts**.
- Support for **contract types** (Permanent, Contract, Intern).

### Filtering & Search
- Filter employees by department, role, status, or contract type.
- Search employees by name, email, or ID.
- Sort employees by name or hire date.

### Dashboard Summary
- Display **total employees count**.
- Show **department-wise breakdown**.
- Highlight **employees on probation** or **new hires**.

### Persistence
- Data is stored using **localStorage** (mock database).
- Option to **export data as JSON or CSV**.

---

## Tech Stack
- **Frontend**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI Library**: React
- **State Management**: React hooks (`useState`, `useEffect`)
- **Data Persistence**: `localStorage` (mock DB)
- **API**: Next.js API routes for CRUD operations

---

## Project Structure
