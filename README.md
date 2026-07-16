# Fullstack Task Management Application

A modern Task Management app built with **React + Vite** (Frontend) and **FastAPI + SQLite** (Backend).

## Features
- Create, Edit, Delete Tasks
- Mark tasks as Complete / Incomplete
- Search tasks by title
- Filter tasks (All / Active / Completed)
- Responsive UI with Tailwind CSS

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS + Axios
- **Backend**: Python + FastAPI + SQLAlchemy + SQLite3
- **Database**: SQLite (`app.db`)

## Setup Instructions (Windows)

Open **Command Prompt** and run the following commands:

```cmd
mkdir fullstack-task-app
cd fullstack-task-app

:: === Backend Setup ===
mkdir backend\app\routers
cd backend
python -m venv venv
venv\Scripts\activate

:: Install backend dependencies
pip install fastapi uvicorn sqlalchemy pydantic python-dotenv
pip freeze > requirements.txt

:: === Frontend Setup ===
cd ..
npx create-vite@latest frontend -- --template react
cd frontend
npm install

:: Install TailwindCSS v3 (Recommended - more stable)
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
````