import { Outlet } from 'react-router-dom'
import { Navbar } from './components'

const App = () => {
    return (
        <div>
            <Navbar />
            <main className="m-4">
                <Outlet />
            </main>
        </div>
    )
}

export default App
