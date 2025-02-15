import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                alert('User updated successfully');
                // form.reset();
            }
        })
    }

    return (
        <div>
            <h1>Update information of {loadedUser.user}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value='Update' />
            </form>

        </div>
    );
};

export default Update;