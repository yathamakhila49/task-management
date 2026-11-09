import DashboardHeader from "../features/dashboard/DashboardHeader";
import TaskCompletionChart from "../features/dashboard/TaskCompletionChart";
import TaskDistribution from "../features/dashboard/TaskDistribution";
import TaskStats from "../features/dashboard/TaskStats"
import { Stack } from "@mantine/core";
function DashboardPage() {
  return (
     <Stack gap={32}>
      <DashboardHeader />
      <TaskStats />
      <TaskDistribution/>
      <TaskCompletionChart/>
    </Stack>
  );
}

export default DashboardPage;