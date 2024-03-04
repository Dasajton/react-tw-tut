import { NavLink } from 'react-router-dom'

const DropdownLink = ({ to, children, toggleMenu }) => {
    return (
        <NavLink
            onClick={toggleMenu}
            to={to}
            className="w-3/4 rounded bg-indigo-600 py-5 text-center text-xl  uppercase text-blue-50 transition hover:bg-indigo-500 [&.active]:bg-purple-500 [&.active]:font-bold"
        >
            {children}
        </NavLink>
    )
}

export default DropdownLink
