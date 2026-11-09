
import { SimpleGrid } from "@mantine/core";
import { LuListChecks,
 LuCircleCheck,
  LuClock,
  LuTriangleAlert,
} from "react-icons/lu";

import TaskStatCard from "./TaskStatCard";
import { mockTasks } from "../../data/mockTasks";

function TaskStats() {
  // Calculate total tasks
  const totalTasks = mockTasks.length;

  // Calculate completed tasks
  const completedTasks = mockTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // Calculate tasks that are not completed yet
  const pendingTasks = mockTasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  // Get today's date in YYYY-MM-DD format (local time)
  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  // Calculate overdue tasks
  const overdueTasks = mockTasks.filter(
    (task) =>task.status !== "Completed" &&task.dueDate < todayString).length;
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
      <TaskStatCard
        title="Total Tasks"
        value={totalTasks}
        icon={<LuListChecks size={22} />}
        color="violet"
      />
      <TaskStatCard
        title="Completed"
        value={completedTasks}
        icon={<LuCircleCheck size={22} />}
        color="green"
      />
      <TaskStatCard
        title="Pending"
        value={pendingTasks}
        icon={<LuClock size={22} />}
        color="orange"
      />
      <TaskStatCard
        title="Overdue"
        value={overdueTasks}
        icon={<LuTriangleAlert size={22} />}
        color="red"
      />
    </SimpleGrid>
  );
}

export default TaskStats;
