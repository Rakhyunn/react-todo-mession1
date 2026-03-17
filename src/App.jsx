import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import useTodos from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()
    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
