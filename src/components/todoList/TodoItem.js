import { Icon, IconGroup, Item } from "./TodoListStyled"
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'


const TodoItem = ({todo, toggleTask, removeTask}) => {
    return  <Item>
                <span>{todo.task}</span>
                <IconGroup>
                    <Icon icon={faCheckCircle} onClick={() => toggleTask(todo.id)}/>
                    <Icon icon={faTrashAlt} onClick={() => removeTask(todo.id)}/>
                </IconGroup>
            </Item>
}

export default TodoItem
