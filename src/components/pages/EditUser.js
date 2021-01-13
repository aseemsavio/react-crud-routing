import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function EditUser() {

    let history = useHistory();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const onInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        console.log(user)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/users", user)
        history.push("/")
    }

    return (
        <div className="container">
            <div className="py-4">
                <form onSubmit={event => onSubmit(event) }>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={event => onInputChange(event)}
                        />
                        <small className="form-text text-muted">உங்கள் பெயரை உள்ளிடவும்</small>
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={event => onInputChange(event)}
                        />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={event => onInputChange(event)}
                        />
                        <small className="form-text text-muted">Create your own user name here.</small>
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={event => onInputChange(event)}
                        />
                        <small className="form-text text-muted">We'll never share your phone number with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="website">Website</label>
                        <input
                            type="text"
                            className="form-control"
                            id="website"
                            name="website"
                            value={user.website}
                            onChange={event => onInputChange(event)}
                        />
                        <small className="form-text text-muted">Type in your website here.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
