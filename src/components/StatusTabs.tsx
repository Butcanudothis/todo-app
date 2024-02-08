
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import TaskList from "./TaskList";

const StatusTabs = () => {
  return (
    <Tabs colorScheme="mainAction">
      <TabList>
        <Tab
          _selected={{
            color: "mainAction.800",
            borderBottomColor: "mainAction.500",
          }}
          style={{ padding: "0px" }}
        >
          To do
        </Tab>
        <Tab
          _selected={{
            color: "mainAction.800",
            borderBottomColor: "mainAction.500",
          }}
        >
          Completed
        </Tab>
      </TabList>

      <TabPanels >
        <TabPanel style={{ padding: "0px" }}>
          <TaskList />
        </TabPanel>
        <TabPanel>
          <p>Completed tasks</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default StatusTabs;
