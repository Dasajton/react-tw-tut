import { useState, useEffect } from 'react'

const PagePlayground = () => {
    const [todos, setTodos] = useState([])

    const fetchTodos = async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const response = await fetch(url)
        const result = await response.json()
        setTodos(result)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <>
            <h1 className="mb-10 text-center text-5xl font-medium text-purple-300">
                Todo List
            </h1>

            {todos.map((todo) => {
                return (
                    <div
                        className=" m-2 flex items-center gap-2 rounded-lg bg-teal-300/30 p-2"
                        key={todo.id}
                    >
                        <input type="checkbox" checked={todo.completed} />
                        <h2 className="text-xl">{todo.title}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default PagePlayground
