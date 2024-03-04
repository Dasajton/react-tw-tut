import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center">
            <h1>Page Not Found</h1>
            <NavLink to="/">
                <button className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2">
                    Go back to Home
                </button>
            </NavLink>
        </div>
    )
}

export default PageNotFound
