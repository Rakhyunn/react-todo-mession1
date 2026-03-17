import { Link } from 'react-router-dom'
import { useTodoContext } from '../context/TodoContext'

function Main() {
    const { todos } = useTodoContext()

    const count = todos.filter((todo) => todo.completed == false).length

    return (
        <>
            <h1>You Can Manage Your TODO!</h1>
            <h3>Today's TODO: {count}</h3>
            <Link to="/todo">
                <button>Manage Todo</button>
            </Link>
        </>
    )
}

export default Main
