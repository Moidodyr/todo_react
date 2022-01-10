import TodoItem from "./TodoItem"
import { ListStyled, WrapList } from "./TodoListStyled"


const Todolist = ({todos, toggleTask, removeTask}) => {
    return (
        <ListStyled>
            <div>
                Не выполненные задачи:
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
            </div>
            <div>
                Выполненные задачи:
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
            </div>
        </ListStyled>
    )
}

export default Todolist
