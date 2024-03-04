import { NavLink } from 'react-router-dom'
import MenuLink from './MenuLink'

const links = [
    { path: '/', label: 'Home' },
    { path: '/playground', label: 'Playground' },
    { path: '/notes', label: 'Notes' },
]

const Navbar = () => {
    return (
        <nav className="m-4 flex h-16 items-center  justify-between rounded-lg bg-white/20 p-4 ">
            <NavLink to="/">
                <img className="h-auto w-16" src="./tailwindicon.png" alt="" />
            </NavLink>
            <ul className="flex gap-4">
                {links.map((link) => {
                    return (
                        <li key={link.path}>
                            <MenuLink path={link.path}>{link.label}</MenuLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
