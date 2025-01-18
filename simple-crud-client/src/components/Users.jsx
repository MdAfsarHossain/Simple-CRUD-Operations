import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        console.log('Deleted: ', id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                alert('User deleted Successfully!');
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <h1>All Users</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} {user.id}
                    <Link
                    to={`/update/${user._id}`}
                    ><button>Update</button></Link>
                    <button
                    onClick={() => handleDelete(user._id)}
                    >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;