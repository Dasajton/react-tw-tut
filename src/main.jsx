import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import {
    PageHome,
    PagePlayground,
    PageNotes,
    PageUsers,
    PageNotFound,
} from './pages'
import './index.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <PageHome /> },
            { path: '/playground', element: <PagePlayground /> },
            { path: '/notes', element: <PageNotes /> },
            { path: '/users', element: <PageUsers /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
