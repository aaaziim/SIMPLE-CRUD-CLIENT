import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const LoadedUsers = useLoaderData()

    const [users, setUsers] = useState(LoadedUsers)

    const style = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        margin: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        
      };

      const handleDeleteUser = (id) => {

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            setUsers(users.filter(u=>u._id!==id))
        })
      }

    return (
        <div>
            <h1>Total Users : {users.length}</h1>

            {users.map(user => (
                <div style={style} key={user._id}>
                    <p>Name : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <Link to={`/users/${user._id}`} > <button>Update Profile</button></Link>
                    <button 
                    onClick={()=>handleDeleteUser(user._id)}>Delete User</button>
                    </div>))}

        </div>
    );
};

export default Users;