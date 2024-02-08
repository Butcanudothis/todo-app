import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import React, { memo } from "react";
import DateTimeDisplay from "@/components/DateTimeBadge";
import { Task as TaskType } from "@prisma/client";

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
const Task = (task: TaskType) => {
  const jobType = task.type === "JobListing" ? "Job" : "Applicant";
  const priorityColor = getPriorityColor(task.priority);
  return (
    <tr>
      <td
        className={` rounded-md mt-2.5 p-3 inline-flex items-center justify-center ${priorityColor}`}
      >
        <BsFillFileEarmarkCheckFill size="1.5em" />
      </td>

      <td className="py-1 pl-5 text-lg font-bold text-gray-900 min-w-64">
        {task.name}
        <p className="font-normal text-sm text-gray-500">
          {jobType}: {task.reference} - {task.description}
        </p>
      </td>

      <td className="py-4 text-sm font-normal text-gray-500 px-6 ">
        <div
          className={`inline-flex items-center rounded-full w-full ${priorityColor} py-2 px-3 text-xs justify-center text-nowrap`}
        >
          <span className="font-bold text-nowrap ">
            {task.priority.toUpperCase()} PRIORITY
          </span>
        </div>
      </td>
      <td className=" py-4  font-normal  px-6 text-sm text-gray-600 lg:text-left">
        <DateTimeDisplay date={new Date(task.createdAt)} />
      </td>
    </tr>
  );
};

export default memo(Task);
