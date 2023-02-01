import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { getListItems } from '../services/items.js';

const TasksContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getListItems();
        console.log('data', data);
        setTasks(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTasks();
  }, []);
  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
};

export { TasksContext, TaskProvider };
