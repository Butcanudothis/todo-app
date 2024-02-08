// app/page.tsx
"use client";
import TaskList from "@/components/TaskList";
import TaskHeader from "@/components/TaskHeader";
import { Container, Heading } from "@chakra-ui/react";
import StatusTabs from "@/components/StatusTabs";

export default function Page() {
  return (
    <Container
      border="1px"
      borderColor={"gray.200"}
      my={10}
      p={10}
      maxW="container.lg"
      borderRadius={8}
    >
      <TaskHeader />
      <StatusTabs />
      <TaskList />
    </Container>
  );
}
