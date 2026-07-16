import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SearchAndFilter from './components/SearchAndFilter';

const API_URL = 'http://localhost:8000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Fetch tasks
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (filter !== 'all') params.status = filter;

      const response = await axios.get(`${API_URL}/tasks`, { params });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search, filter]);

  // Add Task
  const addTask = async (newTask) => {
    try {
      await axios.post(`${API_URL}/tasks`, newTask);
      fetchTasks();
    } catch (error) {
      alert('Failed to add task');
    }
  };

  // Toggle Complete
  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}`, { completed: !completed });
      fetchTasks();
    } catch (error) {
      alert('Failed to update task');
    }
  };

  // Update Task
  const updateTask = async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}`, updatedData);
      fetchTasks();
    } catch (error) {
      alert('Failed to update task');
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      alert('Failed to delete task');
    }
  };

  return (
    <div className="app-container min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Task Manager
        </h1>

        <TaskForm onAddTask={addTask} />

        <SearchAndFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onUpdate={updateTask}
          onDelete={deleteTask}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;