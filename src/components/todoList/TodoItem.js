import { Icon, Item } from "./TodoListStyled"
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'


const TodoItem = ({todo, toggleTask, removeTask}) => {
    return  <Item>
                <span>{todo.task}</span>
                <div>
                    <Icon icon={faCheckCircle} onClick={() => toggleTask(todo.id)}/>
                    <Icon icon={faTrashAlt} onClick={() => removeTask(todo.id)}/>
                </div>
            </Item>
}

export default TodoItem
