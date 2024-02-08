// app/page.tsx
import TaskHeader from "@/components/TaskHeader";
import { Container, Heading } from "@chakra-ui/react";
import StatusTabs from "@/components/StatusTabs";
import Modal from "@/components/AddTaskModal";
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <>
      {!show && (
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
        </Container>
      )}
      {show && <Modal />}
    </>
  );
}
