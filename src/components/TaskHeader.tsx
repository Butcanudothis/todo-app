import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const TaskHeader = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start w-full">
        <Heading as="h2" size="lg">
          Tasks
        </Heading>
        <div className="flex flex-row justify-between gap-2 py-3 sm:py-0">
          <Button variant="customVariant">
            <Link href="/?show=true" passHref>
              Add Task
            </Link>
          </Button>

          <Button variant="customVariant">Start workflow</Button>
        </div>
      </div>
    </>
  );
};

export default TaskHeader;
