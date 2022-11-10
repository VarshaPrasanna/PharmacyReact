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
    const [Valerror, setValerror] = useState({});
    const [isSubmit,setisSubmit]=useState(false)
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


    const validate=(values)=>{
		const errors={};
		const regex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
		const userVal=/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
		
		if(!values.firstName){
			errors.firstName="First Name is required "
		}
		if(!values.lastName){
			errors.lastName="Last Name is required "
		}
		if(!values.username){
			errors.username="Username is required "
		}else if(!userVal.test(values.username)){
			errors.username="Invalid username(Must contain one alphabet and one number)"
		}
		if(!values.email){
			errors.email="Email is required "
		}else if(!regex.test(values.email)){
			errors.email="Not a valid email Format"
		}


		return errors;


	}

    function handleSubmit(event) {
        event.preventDefault();
        setValerror(validate(editUser));
        setisSubmit(true);
        
        async function UpdateUser() {
            try {
                await axios.put(`http://localhost:3000/users/update/${editUser._id}`, editUser);

                navigate(`/Myprofile`)
            } catch (error) {
                console.log(error);
            }
        }
        if(Object.keys(Valerror).length===0 && isSubmit){
           setisSubmit(true);
           UpdateUser();
        }
    }

    function handleChange(event) {
        seteditUser({ ...editUser, [event.target.name]: event.target.value });
        console.log(editUser);
        // setValerror(validate(editUser));
        // console.log(Valerror);
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
                                    {Valerror.username && <span className='error_msg'>{Valerror.username}</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" name="firstName" className="form-control" defaultValue={editUser.firstName} onChange={handleChange}
                                    required />
                                    {Valerror.firstName && <span className='error_msg'>{Valerror.firstName}</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" name="lastName" className="form-control" defaultValue={editUser.lastName} onChange={handleChange}
                                    required />
                                    {Valerror.lastName && <span className='error_msg'>{Valerror.lastName}</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" name="email" className="form-control" defaultValue={editUser.email} onChange={handleChange}
                                    required />
                                    {Valerror.email && <span className='error_msg'>{Valerror.email}</span>}
                            </div>


                            <button type="submit" id="submit">Submit</button>
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