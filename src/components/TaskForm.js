import React from 'react';
import { useContext, useState } from 'react';
import { TasksContext } from '../context/TasksContext.js';
import { createTask } from '../services/items.js';

export default function TaskForm() {
  const [task, setTask] = useState('');
  const { setTasks } = useContext(TasksContext);

  const handleCreateTask = async () => {
    try {
      const input = await createTask(task);

      setTasks((prev) => [...prev, input]);
      setTask('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <form>
        <label>Task</label>
        <input type="text" minLength={2} value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit" onClick={handleCreateTask}>
          Add Task
        </button>
      </form>
    </div>
  );
}
