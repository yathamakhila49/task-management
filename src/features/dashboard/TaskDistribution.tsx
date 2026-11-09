
import { Card, Stack, Text, Group, Progress } from "@mantine/core";
import { mockTasks } from "../../data/mockTasks";

function TaskDistribution() {
  // Count tasks based on their status
  const totalTasks = mockTasks.length;

  const pendingTasks = mockTasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = mockTasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completedTasks = mockTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // Calculate percentage
  const getPercentage = (count: number) => {
    return totalTasks === 0 ? 0 : (count / totalTasks) * 100;
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="lg">
        <Text fw={700} size="lg">
          Task Distribution
        </Text>

        {/* Pending tasks */}
        <Stack gap={6}>
          <Group justify="space-between">
            <Text size="sm" fw={500}>Pending</Text>
            <Text size="sm" c="dimmed">{pendingTasks} tasks</Text>
          </Group>

          <Progress
            value={getPercentage(pendingTasks)}
            color="orange"
            radius="xl"
            size="md"
          />
        </Stack>

        {/* In Progress tasks */}
        <Stack gap={6}>
          <Group justify="space-between">
            <Text size="sm" fw={500}>In Progress</Text>
            <Text size="sm" c="dimmed">{inProgressTasks} tasks</Text>
          </Group>

          <Progress
            value={getPercentage(inProgressTasks)}
            color="blue"
            radius="xl"
            size="md"
          />
        </Stack>

        {/* Completed tasks */}
        <Stack gap={6}>
          <Group justify="space-between">
            <Text size="sm" fw={500}>Completed</Text>
            <Text size="sm" c="dimmed">{completedTasks} tasks</Text>
          </Group>

          <Progress
            value={getPercentage(completedTasks)}
            color="green"
            radius="xl"
            size="md"
          />
        </Stack>
      </Stack>
    </Card>
  );
}

export default TaskDistribution;
