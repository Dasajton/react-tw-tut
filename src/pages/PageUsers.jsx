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
        <div>
            <h2 className="mb-10 text-center text-4xl font-medium text-purple-300">
                Users
            </h2>
            <p className="text-center text-lg font-medium text-purple-200">
                There are {users.length} Users
            </p>
            <div className="flex flex-col items-center">
                {users.map((user) => {
                    return (
                        <Accordion
                            key={user.id}
                            name={user.name}
                            username={`Username: ${user.username}`}
                            address={`Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}`}
                            email={`Email: ${user.email}`}
                            website={`Website: ${user.website}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PageUsers
