import { useEffect, useState } from 'react'

function useTodos() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
        const todo = { id: crypto.randomUUID(), todo: text, completed: false }
        setTodos([...todos, todo])
    }

    const removeTodo = (id) => {
        const filterTodo = todos.filter((todo) => todo.id != id)
        setTodos(filterTodo)
    }

    const toggleTodo = (id) => {
        const toggleTodo = todos.map((todo) => (todo.id == id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(toggleTodo)
    }

    const removeAllTodos = () => {
        setTodos([])
    }

    return { todos, setTodos, addTodo, removeTodo, toggleTodo, removeAllTodos }
}

export default useTodos
