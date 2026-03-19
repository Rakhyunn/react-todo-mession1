import { useTodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos, removeAllTodos } = useTodoContext()
    return (
        <div>
            <button
                type="button"
                onClick={removeAllTodos}
                className="flex justify-self-end bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/25 px-4 py-2 rounded-full text-sm transition-colors mb-5"
            >
                모두 삭제
            </button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
