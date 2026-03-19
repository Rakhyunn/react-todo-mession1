import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function Todo() {
    return (
        <div className="min-h-screen bg-[#1a1a2e] flex flex-col">
            <div className="bg-white/[0.04] border-b border-white/[0.08] px-6 py-5 flex items-center gap-3">
                <TodoForm />
            </div>
            <div className="px-6 py-5 flex flex-col gap-2">
                <TodoList />
            </div>
        </div>
    )
}

export default Todo
