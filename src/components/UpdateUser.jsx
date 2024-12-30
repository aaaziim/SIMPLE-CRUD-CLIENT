import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData();

    const handleOnUpdate = (event) => {
        event.preventDefault();
        const updatedUser = {
            name: event.target[0].value,
            email: event.target[1].value
        };

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
       .then(response=>response.json())
       .then(data=> console.log(data))
    }
    return (
        <div>
            <h2>Update {user.name}'s Profile</h2>

            <form  onSubmit={handleOnUpdate}>

                <input type="text" name="name" defaultValue={user.name} id="" />
                <br />
                <input type="email" defaultValue={user.email} name="email" id="" />
                <br/>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;