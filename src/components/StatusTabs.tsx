import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
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
          style={styles.tab}
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

      <TabPanels>
        <TabPanel style={styles.tab}>
          <TaskList />
        </TabPanel>
        <TabPanel>
          <p>Completed tasks</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const styles = {
  tab: {
    padding: "0px",
  },
};
export default StatusTabs;
