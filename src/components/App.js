import { useState } from "react"
import TodoForm from "./todoForm/TodoForm"
import Todolist from "./todoList/TodoList"


const App = () => {
  const [todos, setTodos] = useState([])

  const addTask = userInput => {
    if(userInput) {
      const newItem = {
        id: Date.now().toString(),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = id => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = id => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (
    <div className="App">
      <TodoForm addTask={addTask}/>
      <Todolist
        todos={todos}
        toggleTask={handleToggle}
        removeTask={removeTask}
        />
    </div>
  )
}

export default App
