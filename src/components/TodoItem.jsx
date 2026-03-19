import { useTodoContext } from '../context/TodoContext'

function TodoItem({ todo }) {
    const { toggleTodo, removeTodo } = useTodoContext()
    return (
        <li
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-opacity mb-2 ${
                todo.completed
                    ? 'bg-white/[0.02] border-white/[0.05] opacity-55'
                    : 'bg-white/[0.05] border-white/[0.08]'
            }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="hidden"
                id={todo.id}
            />
            <label htmlFor={todo.id} className="cursor-pointer flex-shrink-0">
                {todo.completed ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                                d="M1.5 5L4 7.5L8.5 3"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-indigo-500" />
                )}
            </label>
            <span className={`flex-1 text-sm ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                {todo.todo}
            </span>
            <button
                onClick={() => removeTodo(todo.id)}
                className="text-gray-400 hover:text-gray-500 text-xs transition-colors"
            >
                X
            </button>
        </li>
    )
}

export default TodoItem
