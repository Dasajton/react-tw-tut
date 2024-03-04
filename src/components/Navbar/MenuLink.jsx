import { NavLink } from 'react-router-dom'

const MenuLinks = ({ path, children }) => {
    return (
        <NavLink className="text-white [&.active]:underline" to={path}>
            {children}
        </NavLink>
    )
}

export default MenuLinks
