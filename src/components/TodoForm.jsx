import { Link } from 'react-router-dom'
import { useTodoContext } from '../context/TodoContext'

function TodoForm() {
    const { addTodo } = useTodoContext()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.input.value.trim().length == 0) {
            alert('할 일을 입력해주세요')
            return
        }
        addTodo(form.input.value)
        form.input.value = ''
    }

    return (
        <form onSubmit={handleOnSubmit} className="flex items-center gap-3 w-full">
            <Link to="/">
                <button
                    type="button"
                    className="bg-white/[0.07] text-slate-400 border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors"
                >
                    ← 홈
                </button>
            </Link>
            <input
                placeholder="할 일을 입력해주세요"
                type="text"
                name="input"
                className="flex-1 bg-white/[0.08] border border-white/[0.12] text-slate-200 placeholder-slate-500 rounded-full px-5 py-2 text-sm outline-none focus:border-indigo-500 transition-colors"
            />
            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
            >
                추가
            </button>
        </form>
    )
}

export default TodoForm
