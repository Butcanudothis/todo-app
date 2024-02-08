"use client";
import Task from "./Task";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Task as TaskType } from "@prisma/client";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get("/api/task/");
      setTasks(response.data.tasks);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Failed to fetch tasks:", error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="mt-6 overflow-scroll">
      <table className="min-w-full border-separate border-spacing-y-5">
        <tbody className="lg:border-gray-300">
          {isLoading
            ? LOADING_SKELETON_KEYS.map((_, i) => (
                <tr key={i}>
                  <td>
                    <div className="block h-10 md:h-20 w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-500/25 p-5 animate-pulse"></div>
                  </td>
                </tr>
              ))
            : tasks.map(renderTask)}
        </tbody>
      </table>
    </div>
  );
};
const renderTask = (task: TaskType) => {
  return <Task key={task.id} {...task} />;
};
const LOADING_SKELETON_KEYS = [...Array(5)];

export default TaskList;
