import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuLink from './MenuLink'
import DropdownLink from './DropdownLink'
import { FaBars } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import * as MdIcons from 'react-icons/md'

const links = [
    { path: '/', label: 'Home' },
    { path: '/todos', label: 'Todos' },
    { path: '/photos', label: 'Photos' },
    { path: '/users', label: 'Users' },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? JSON.parse(savedTheme) : false
    })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
    }, [isMenuOpen])

    useEffect(() => {
        const element = document.documentElement
        if (isDarkMode) {
            element.classList.add('dark')
            localStorage.setItem('theme', JSON.stringify(true))
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', JSON.stringify(false))
        }
    }, [isDarkMode])

    return (
        <nav className="m-4 flex h-16 items-center  justify-between rounded-lg bg-white/20 p-4 ">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                <img className="h-auto w-16" src="./tailwindicon.png" alt="" />
            </NavLink>
            <ul className="hidden gap-4 sm:flex">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="hidden text-2xl text-teal-500 sm:block"
                >
                    {isDarkMode ? (
                        <MdIcons.MdDarkMode />
                    ) : (
                        <MdIcons.MdLightMode />
                    )}
                </button>
                {links.map((link) => {
                    return (
                        <li key={link.path}>
                            <MenuLink path={link.path}>{link.label}</MenuLink>
                        </li>
                    )
                })}
            </ul>
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className=" text-2xl text-teal-500 sm:hidden"
            >
                {isDarkMode ? <MdIcons.MdDarkMode /> : <MdIcons.MdLightMode />}
            </button>

            <button
                onClick={toggleMenu}
                className="text-4xl text-teal-500 sm:hidden"
            >
                {isMenuOpen ? <IoCloseSharp /> : <FaBars />}
            </button>

            <ul
                className={`fixed top-24 z-50 flex h-auto w-5/6 flex-col justify-center gap-4 rounded-l-lg bg-teal-500/50 p-2 backdrop-blur-lg duration-300 ease-in-out  ${
                    isMenuOpen ? 'left-48' : 'left-full'
                }`}
            >
                {links.map((link, index) => (
                    <DropdownLink
                        key={index}
                        toggleMenu={toggleMenu}
                        to={link.path}
                    >
                        {link.label}
                    </DropdownLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
