import { useRef, useState } from 'react'

function useTodos() {
    const lastId = useRef(0)
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const todo = { id: lastId.current, todo: text, completed: false }
        setTodos([...todos, todo])
        lastId.current++
    }

    const removeTodo = (id) => {
        const filterTodo = todos.filter((todo) => todo.id != id)
        setTodos(filterTodo)
    }

    const toggleTodo = (id) => {
        const toggleTodo = todos.map((todo) => (todo.id == id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(toggleTodo)
    }

    return { lastId, todos, setTodos, addTodo, removeTodo, toggleTodo }
}

export default useTodos
