import { Link } from 'react-router-dom'
import { useTodoContext } from '../context/TodoContext'

function Main() {
    const { todos } = useTodoContext()

    // 할 일 개수 및 진행률
    const count = todos.length
    const leftCount = todos.filter((todo) => todo.completed == false).length
    const completedCount = todos.filter((todo) => todo.completed == true).length
    const percent = (completedCount / count) * 100

    // 오늘 날짜
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()

    return (
        <div className="relative min-h-screen bg-[#1a1a2e] flex flex-col items-center overflow-hidden">
            {/* 배경 원형 장식 */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-600 rounded-full opacity-10" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-violet-700 rounded-full opacity-[0.08]" />

            {/* 타이틀 */}
            <div className="mt-20 relative z-10 ext-slate-400 text-xl font-bold tracking-tight text-indigo-200">
                {year}/{month}/{day}
            </div>
            <h1 className="relative z-10 text-4xl font-bold text-white tracking-tight mt-5">오늘도 파이팅!👊</h1>
            <div className="relative z-10 text-xl font-bold text-gray-500 tracking-tight mt-5">
                할 일을 하나씩 해치워봐요
            </div>

            {/* 카운트 */}
            <div className="relative z-10 mt-11 flex gap-3 w-full max-w-sm">
                <div className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl py-5 text-center">
                    <p className="text-3xl font-bold text-indigo-300">{leftCount}</p>
                    <p className="text-xs text-slate-500 mt-1.5">남은 할 일</p>
                </div>
                <div className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl py-5 text-center">
                    <p className="text-3xl font-bold text-emerald-400">{completedCount}</p>
                    <p className="text-xs text-slate-500 mt-1.5">완료</p>
                </div>
            </div>

            {/* 진행률 */}
            <div className="relative z-10 mt-3 w-full max-w-sm bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4">
                <div className="flex justify-between items-center mb-2.5">
                    <span className="text-xs text-slate-500">진행률</span>
                    <span className="text-xs text-indigo-300 font-medium">
                        {isNaN(percent) ? 0 : Math.round(percent)}%
                    </span>
                </div>
                <div className="bg-white/[0.08] rounded-full h-1.5 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-indigo-500 to-violet-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${isNaN(percent) ? 0 : percent}%` }}
                    />
                </div>
            </div>

            {/* 버튼 */}
            <Link to="/todo" className="relative z-10 mt-10">
                <button className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-11 py-3.5 rounded-full text-base font-bold">
                    TODO 관리하기 →
                </button>
            </Link>
        </div>
    )
}

export default Main
