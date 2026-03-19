export function getTodos(key) {
    try {
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : [] // 비어있을 때를 위한 삼항연산
    } catch (err) {
        console.log('load error')
        return []
    }
}

export function saveTodos(key, todos) {
    try {
        localStorage.setItem(key, JSON.stringify(todos))
    } catch (err) {
        console.log('save error')
    }
}
