import { createContext, useContext } from 'react'
import useTodos from '../hooks/useTodos'

const TodoContext = createContext()

export function TodoProvider({ children }) {
    // useTodos의 반환값을 context로 전달해 하위 컴포넌트 어디서든 접근 가능하게 함
    const value = useTodos()
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodoContext() {
    const context = useContext(TodoContext)
    return context
}
