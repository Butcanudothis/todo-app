import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import React from "react";
import DateTimeDisplay from "@/components/DateTimeBadge";
import { Task as TaskType } from "@prisma/client";

interface TaskProps {
  task: TaskType;
}
function getPriorityColor(priority: "Low" | "Medium" | "High"): string {
  switch (priority) {
    case "Low":
      return "bg-green-200 text-green-600";
    case "Medium":
      return "bg-yellow-100 text-yellow-500";
    case "High":
      return "bg-red-100 text-red-400";
    default:
      return "";
  }
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const jobType = task.type === "JobListing" ? "Job" : "Applicant";
  const priorityColor = getPriorityColor(task.priority);
  return (
    <tr>
      <td className={`flex flex-col items-start  rounded-md p-3 inline-flex items-center justify-center ${priorityColor}`}>

          <BsFillFileEarmarkCheckFill size="1.5em" />

      </td>

      <td
        width="100%"
        className="py-1 pl-5 text-lg font-bold text-gray-900"
      >
        {task.name}
          <p
            className="font-normal text-sm text-gray-500"
          >
            {jobType}: {task.reference} - {task.description}
          </p>
      </td>

      <td className=" py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
        <div
          className={`inline-flex items-center rounded-full ${priorityColor} py-2 px-3 text-xs `}
        >
          <span className="font-bold text-nowrap">
            {task.priority.toUpperCase()} PRIORITY
          </span>
        </div>
      </td>
      <td className=" flex flex-row text-nowrap py-4 px-2 text-right text-sm text-gray-600 lg:text-left">
        <DateTimeDisplay date={new Date(task.createdAt)} />
      </td>
    </tr>
  );
};
export default Task;
