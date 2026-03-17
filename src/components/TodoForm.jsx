import { useTodoContext } from '../context/TodoContext'

function TodoForm() {
    const { addTodo, removeAllTodos } = useTodoContext()

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
        <form onSubmit={handleOnSubmit}>
            <input placeholder="할 일을 입력해주세요" type="text" name="input" />
            <button type="submit" name="submit">
                추가
            </button>
            <button type="button" name="delete" onClick={removeAllTodos}>
                모두 삭제
            </button>
        </form>
    )
}

export default TodoForm
