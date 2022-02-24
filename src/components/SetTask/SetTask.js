import { Title } from "../layout/Title"
import { SetStyled, TaskButton, TaskInput } from "./SetTaskStyled"


const SetTask = () => {
    return (
        <SetStyled>
            <Title>Введите задачу:</Title>
            <TaskInput type="text" placeholder="Введите задачу"></TaskInput>
            <TaskButton>Добавить</TaskButton>
        </SetStyled>
    )
}

export default SetTask
