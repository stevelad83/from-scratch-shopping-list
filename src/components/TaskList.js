import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext.js';

export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  console.log('tasks', tasks);
  return (
    <div>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li>{task.item}</li>
        </ul>
      ))}
    </div>
  );
}
