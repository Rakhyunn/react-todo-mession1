import { useEffect, useState } from 'react'
import { getTodos, saveTodos } from '../utils/storage'

function useTodos() {
    // 로컬 스토리지 가져오기
    const [todos, setTodos] = useState(getTodos('todos'))

    // useEffect로 todos 변경 시 자동 저장
    useEffect(() => {
        saveTodos('todos', todos)
    })

    // ID는 1씩 추가하는 형식이 아닌 랜덤 ID 생성
    const addTodo = (text) => {
        const todo = { id: crypto.randomUUID(), todo: text, completed: false }
        setTodos([...todos, todo])
    }

    const removeTodo = (id) => {
        const filterTodo = todos.filter((todo) => todo.id != id)
        setTodos(filterTodo)
    }

    const toggleTodo = (id) => {
        const updateTodo = todos.map((todo) => (todo.id == id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(updateTodo)
    }

    const removeAllTodos = () => {
        setTodos([])
    }

    return { todos, setTodos, addTodo, removeTodo, toggleTodo, removeAllTodos }
}

export default useTodos
