import React from 'react'
import UserCard from './UserCard'

const Users = props => {
    const {users} = props
    return (
        <div>
            {users.map((user, id) => {
            return (
                <UserCard user={user} key={id}/>
            )
            })}
        </div>
    )
}

export default Users