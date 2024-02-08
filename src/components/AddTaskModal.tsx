"use client";
import React, {useCallback, useState} from "react";
import { CloseButton } from "@chakra-ui/react";
import Link from "next/link";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const taskSchema = z.object({
  name: z.string(),
  reference: z.string(),
  description: z.string(),
  type: z.enum(["JobListing", "Applicant"]),
  priority: z.enum(["Low", "Medium", "High"]),
});


const AddTaskModal = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("JobListing");
  const [priority, setPriority] = useState("Low");

  const [loading, setLoading] = useState(false);
  const handleFormSubmit = useCallback(async (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    setLoading(true);
      const name = (
          event.currentTarget.elements.namedItem("name") as HTMLInputElement
      )?.value;
      const reference = (
          event.currentTarget.elements.namedItem("reference") as HTMLInputElement
      )?.value;
      const description = (
          event.currentTarget.elements.namedItem("description") as HTMLInputElement
      )?.value;
      const type = (
          event.currentTarget.elements.namedItem("type") as HTMLInputElement
      )?.value;
      const priority = (
          event.currentTarget.elements.namedItem("priority") as HTMLInputElement
      )?.value;

      try {
          const data = taskSchema.parse({
              name,
              reference,
              description,
              type,
              priority,
          });

          await axios.post("/api/task/", data);
          setLoading(false);
          console.log("Task added:", data);
          router.push("/");
      } catch (error) {
            setLoading(false);
          if (error instanceof z.ZodError) {
              // Handle validation errors
              console.error("Validation errors:", error.errors);
          } else {
              // Handle other errors
              console.error("Failed to add task:", error);
          }
      }
  },[]);
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center">
          <div className="bg-slate-100 m-10 rounded-md border text-gray-800 shadow-lg z-20 h-1/2 w-1/2">
            <p className="mt-4 pl-4 text-xl font-bold">Add Task</p>
            <div className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400">
              <Link href="/" passHref>
                {" "}
                <CloseButton />
              </Link>
            </div>
            <div className="flex flex-col items-center px-8 py-10">
              <label className="block w-full" htmlFor="name">
                <p className="mb-1 text-sm text-gray-600">Name</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter Task name"
                  value={name}
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label className="mt-4 block w-full" htmlFor="Reference">
                <p className="mb-1 text-sm text-gray-600">Reference</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter Reference"
                  value={reference}
                  id="reference"
                  onChange={(event) => setReference(event.target.value)}
                />
              </label>
              <label className="mt-4 block w-full" htmlFor="Description">
                <p className="mb-1 text-sm text-gray-600">Description</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter Description"
                  value={description}
                  id="description"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
              <label className="mt-4 block w-full" htmlFor="type">
                <p className="mb-1 text-sm text-gray-600">Type</p>
                <select
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  id="type"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="JobListing">Job</option>
                  <option value="Applicant">Application</option>
                </select>
              </label>
              <label className="mt-4 block w-full" htmlFor="priority">
                <p className="mb-1 text-sm text-gray-600">Priority</p>
                <select
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  id="priority"
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>
              <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white"
                >
                    {loading ? "Adding..." : "Add Task"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
