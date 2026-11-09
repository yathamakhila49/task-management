import { Card,Stack,Text,Group,} from "@mantine/core";
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

// Temporary mock chart data.
// Later, replace this with real task completion history from the API.
const completionData = [
  { day: "Mon", completed: 1 },
  { day: "Tue", completed: 2 },
  { day: "Wed", completed: 2 },
  { day: "Thu", completed: 3 },
  { day: "Fri", completed: 4 },
  { day: "Sat", completed: 5 },
  { day: "Sun", completed: 6 },
];

function TaskCompletionChart() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="lg">
        <Group justify="space-between">
          <Text fw={700} size="lg">
            Task Completion Overview
          </Text>
          <Text size="xs" c="dimmed">
            Last 7 days
          </Text>
        </Group>
        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="completed"
                name="Completed Tasks"
                stroke="#7611b7"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Stack>
    </Card>
  );
}

export default TaskCompletionChart;
