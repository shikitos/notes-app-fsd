# Architecture overview

## 1. Project description

Application — application is notes app with options to collaborate with each other. MVP-version includes:
- Create, edit, delete and view notes.
- Storing notes in a database.
- Displaying notes with md under the hood.
- REST API for working with data.

## 2. Architectural components

### 🔹 **Frontend (Next.js + Zustand)**
- React-components for UI.
- State management using Zustand (for simplicity).
- Markdown-editor with syntax support.

### 🔹 **Backend (Nest.js + PostgreSQL)**
- Nest.js REST API.
- Connecting to a database via Prisma ORM.
- User authorization via JWT.
- Query handlers and data validation.

### 🔹 **Database (PostgreSQL)**
- The `notes` table for storing notes.
- Table `users` for storing information about users.
- Table ``sessions` for storing data about sessions.

### 🔹 **Infrastructure (Docker + CI/CD)**
- Using Docker for containerization and running whole application using one command.
- CI/CD under GitHub Actions.
- App deployment performed using Vercel.

---

## 3. Architecture diagram

![System architecture](./diagrams/system-architecture.png)

TBD

---

## 4. Main Technologies

| Component     | Technology                                      |
|---------------|------------------                               |
| Frontend      | Next.js, Zustand, TailwindCSS, Markdown Editor  |
| Backend       | Nest.js, Prisma ORM, JWT                        |
| Database      | PostgreSQL                                      |
| Deployment    | Docker, GitHub Actions, Vercel/Heroku           |
