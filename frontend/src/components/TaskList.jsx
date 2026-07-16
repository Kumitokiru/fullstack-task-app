import { useState } from 'react';

function TaskList({ tasks, onToggleComplete, onUpdate, onDelete, loading }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDesc(task.description || '');
  };

  const saveEdit = (id) => {
    onUpdate(id, { title: editTitle, description: editDesc || null });
    setEditingId(null);
  };

  if (loading) return <p className="text-center text-gray-500">Loading tasks...</p>;

  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow text-center text-gray-500">
          No tasks found
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-5 rounded-xl shadow-md flex flex-col md:flex-row md:items-center gap-4 hover:shadow-lg transition"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id, task.completed)}
              className="w-6 h-6 accent-blue-600 cursor-pointer"
            />

            {editingId === task.id ? (
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <textarea
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <div className="flex gap-2">
                  <button onClick={() => saveEdit(task.id)} className="bg-green-600 text-white px-4 py-1 rounded">Save</button>
                  <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex-1">
                <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-gray-600 mt-1 text-sm">{task.description}</p>
                )}
              </div>
            )}

            <div className="flex gap-2">
              {!editingId && (
                <button
                  onClick={() => startEdit(task)}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => onDelete(task.id)}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;