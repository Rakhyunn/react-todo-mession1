function TodoForm({ addTodo }) {
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
            <button type="submit">추가</button>
        </form>
    )
}

export default TodoForm
