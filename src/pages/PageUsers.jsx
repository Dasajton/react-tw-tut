import { useEffect, useState } from 'react'
import Accordion from '../components/Accordion'

const PageUsers = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url)
        const result = await response.json()
        setUsers(result)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="flex flex-col items-center">
            {users.map((user) => {
                return (
                    <Accordion
                        key={user.id}
                        name={user.name}
                        username={user.username}
                        address={`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
                        email={user.email}
                        website={user.website}
                    />
                )
            })}
        </div>
    )
}

export default PageUsers
