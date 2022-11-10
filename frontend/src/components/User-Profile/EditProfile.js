import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './Editprofile.css'

function EditProfile(props) {
    const userId = localStorage.getItem('userId')
    const initialState = {
        username: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: ""
    };
    const [editUser, seteditUser] = useState(initialState);
    const navigate = useNavigate();
    const { _id } = useParams();


    useEffect(
        function () {
            async function getUserprofile() {
                try {
                    const response = await axios.get("http://localhost:3000/users/" + userId);
                    seteditUser(response.data.data)
                    console.log(response.data.data)
                } catch (error) {
                    console.log("error", error);
                }
            }
            getUserprofile();
        },
        [props]
    );

    function handleSubmit(event) {
        event.preventDefault();
        async function UpdateUser() {
            try {
                await axios.put(`http://localhost:3000/users/update/${editUser._id}`, editUser);

                navigate(`/Myprofile`)
            } catch (error) {
                console.log(error);
            }
        }
        UpdateUser();
    }

    function handleChange(event) {
        seteditUser({ ...editUser, [event.target.name]: event.target.value })
    }


    function handleCancel() {
        navigate(`/Myprofile`)
    }

    return (
        <div >

            <div className="edit gradient-custom">


                <div className="edit-wrapper">
                    <div className="edit-container">
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="username" className="form-control" defaultValue={editUser.username} onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="firstName" className="form-control" defaultValue={editUser.firstName} onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="lastName" className="form-control" defaultValue={editUser.lastName} onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="email" className="form-control" defaultValue={editUser.email} onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="gender" className="form-control" defaultValue={editUser.gender} onChange={handleChange}
                                    required />
                            </div>


                            <button id="submit">Submit</button>
                            <p id="message-ref">Signed Up Successfully</p>
                        </form>
                    </div>

                    <ul className="instructions">
                        <li>
                            Username should contain alphabetic character, and must have atleast 1 number
                        </li>
                        <li>Password must contain 1 lower 1 upper 1 special symbol 1 number</li>
                    </ul>

                </div>

            </div>
        </div>

    )
}

export default EditProfile;