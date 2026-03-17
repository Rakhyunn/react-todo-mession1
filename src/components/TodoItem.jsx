function TodoItem({ todo, removeTodo, toggleTodo }) {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.todo}
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem
