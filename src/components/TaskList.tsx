"use client"
import Task from "./Task";
import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/task/');
        setTasks(response.data.tasks);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="mt-6 overflow-hidden ">
      <table className="min-w-full border-separate border-spacing-y-5">
        <tbody className="lg:border-gray-300">
          {isLoading ? (
            [...Array(5)].map((_, i) => (
              <tr key={i}>
                <td>
                  <div className="block h-10 md:h-20 w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-500/25 p-5 animate-pulse"></div>
                </td>
              </tr>
            ))
          ) : (
            tasks.map((task) => (
              <Task key={task} task={task}/>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;