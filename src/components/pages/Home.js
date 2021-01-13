import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Hello world")
        loadUsers();
        return {};
    }, []);

    const loadUsers = async () => {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.username}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            <Link className="btn btn-primary mr-2">View</Link>
                                            <Link className="btn btn-outline-primary mr-2">Edit</Link>
                                            <Link className="btn btn-danger mr-2">Delete</Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
