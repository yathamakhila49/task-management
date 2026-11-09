import { Button as MantineButton} from "@mantine/core"

interface ButtonProps{
    label:string
}

function AppButton({label}:ButtonProps){
    return(
    <>
    <MantineButton>{label}</MantineButton>
    </>
    )
}
export default AppButton;