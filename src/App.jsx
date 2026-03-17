import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Todo from './pages/Todo'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="todo" element={<Todo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
