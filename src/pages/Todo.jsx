import { Link } from 'react-router-dom'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function Todo() {
    return (
        <>
            <TodoForm />
            <TodoList />
            <Link to="/">
                <button>Main</button>
            </Link>
        </>
    )
}

export default Todo
