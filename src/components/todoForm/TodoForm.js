import { useState } from "react"
import {FormTask,  Button, InputTask } from "./TodoFormStyled"


const TodoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = e => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = e => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <FormTask onSubmit={handleSubmit}>
            <InputTask
                value={userInput}
                onKeyDown={handleKeyPress}
                onChange={handleChange}
                placeholder="Добавьте задачу..."
                />
            <Button>Добавить</Button>
        </FormTask>
    )
}

export default TodoForm