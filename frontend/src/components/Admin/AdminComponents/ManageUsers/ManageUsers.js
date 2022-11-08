import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const ManageUsers = () => {


    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");

    const getUserData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:3000/users/"
            );
            console.log(data.data);
            console.log(data.data.users)
            setUser(data.data.users);
        } catch (e) {
            console.log(e);
        }
    };
    //Delete user
    const removeUser = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:3000/users/" + id)

                .then(console.log("Deleted"))
                .catch(err => console.log(err));
        }
    }



    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="ManageUsers">
            <h1>USERS LIST</h1>
            <input
                type="text"
                placeholder="Search here"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card bg-dark shadow-2-strong">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped table-dark table-borderless" align="center">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">User ID</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">username</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">isAdmin</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user
                                                .filter((item) => {
                                                    if (search == "") {
                                                        return item;
                                                    } else if (
                                                        item.firstName.toLowerCase().includes(search.toLowerCase())
                                                    ) {
                                                        return item;
                                                    }
                                                })
                                                .map((item) => {
                                                    return (
                                                        <tr >
                                                            <td>{item._id} </td>
                                                            <td>{item.firstName}</td>
                                                            <td>{item.lastName}</td>
                                                            <td>{item.gender}</td>
                                                            <td>{item.username}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.isAdmin}</td>
                                                            <td>

                                                                <a role="button" onClick={() => removeUser(item._id)}
                                                                    class="btn btn-danger">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                        fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fill-rule="evenodd"
                                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </a>


                                                            </td>

                                                        </tr>



                                                    );
                                                })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >



        </div >
    );
};

export default ManageUsers;