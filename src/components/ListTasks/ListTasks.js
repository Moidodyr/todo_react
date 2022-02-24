import { Title } from "../layout/Title"
import { ListStyled } from "./ListTasksStyled"


const ListTasks = () => {
    return (
        <ListStyled>
            <Title>Ваши задачи:</Title>
            <ul>
                <li>1. поспать</li>
                <li>2. поесть</li>
            </ul>
        </ListStyled>
    )
}

export default ListTasks
