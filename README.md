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

Open **Command Prompt** and run the following commands to set up:

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

How to Run the Application
Follow these steps to run the Fullstack Task Management App:

## 1. Clone the repository
Right-click on the folder where you want to clone the repository.
Open Terminal
On terminal
```cmd
git clone https://github.com/Kumitokiru/fullstack-task-app.git
cd fullstack-task-app
````

## 2. Open Two Terminals
Right-click inside the fullstack-task-app folder and open two separate terminals.
## Terminal 1 - Backend
```cmd
cd backend

:: Install dependencies (first time only)
pip install -r requirements.txt

:: Run the backend server
uvicorn app.main:app --reload --port 8000
````

## Terminal 2 - Frontend
```cmd
cd frontend

:: Run the frontend (React)
npm run dev
````

## 3. Open the Application
Open your browser and go to:
http://localhost:5173
You should now see the Task Manager application running.

Additional Info

- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- Make sure both terminals are running at the same time.



