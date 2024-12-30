import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()

    const style = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        margin: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      };

      const handleDeleteUser = (id) => {

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      }

    return (
        <div>
            <h1>Total Users : {users.length}</h1>

            {users.map(user => (
                <div style={style} key={user._id}>
                    <p>Name : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <button 
                    onClick={()=>handleDeleteUser(user._id)}>Delete User</button>
                    </div>))}

        </div>
    );
};

export default Users;