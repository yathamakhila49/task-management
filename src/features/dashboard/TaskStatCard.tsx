import type {ReactNode} from 'react';
import {Card,Group,Text,Stack,ThemeIcon} from '@mantine/core';

interface TaskStatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
}

function TaskStatCard({title,value,icon,color}: TaskStatCardProps){
return(
    <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" align="center">
            <Stack gap={5} >
          <Text c="dimmed" size="sm" fw={500}>
            {title}
          </Text>

          <Text size="2rem" fw={700}>
            {value}
          </Text>
        </Stack>
          <ThemeIcon size={50} radius="md" color={color} variant="light">
          {icon}
        </ThemeIcon>
        </Group>

    </Card>
)

}

export default TaskStatCard;