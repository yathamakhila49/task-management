import { Button,Group,Stack,Text,Title } from "@mantine/core";
import{LuPlus} from 'react-icons/lu';

function DashboardHeader(){

    return(
     <Group justify="space-between" align="center" >
         {/* Left side: Dashboard heading */}
         <Stack gap={4}>
            <Title order={2}>WelCome Back</Title>
            <Text c="dimmed" size="sm">Here's what's happening with your tasks today.</Text>
         </Stack>
      {/* Right side: Add Task button */}
      <Button leftSection={<LuPlus size={18} />}color="violet" >Add Task</Button>
     </Group>
    )
}
export default DashboardHeader;