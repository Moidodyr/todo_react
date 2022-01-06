import TodoItem from "./TodoItem"
import { ListStyled, WrapList } from "./TodoListStyled"


const Todolist = ({todos, toggleTask, removeTask}) => {
    return (
        <ListStyled>
            <WrapList>
                {todos.map(todo => {
                    return !todo.complete && <TodoItem
                                                key={todo.id}
                                                todo={todo}
                                                toggleTask={toggleTask}
                                                removeTask={removeTask}
                                                />
                })}
            </WrapList>
            <WrapList>
                {todos.map(todo => {
                    return todo.complete && <TodoItem
                                                key={todo.id}
                                                todo={todo}
                                                toggleTask={toggleTask}
                                                removeTask={removeTask}
                                                />
                })}
            </WrapList>
        </ListStyled>
    )
}

export default Todolist
