import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState } from 'react';
import './ChangePassword.css';
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate();
    const [data, setData] = useState({
        password: '',
        confirmPassword: '',
        isSubmitted: false
    });

    const handleChange = (e) => {
        console.log(data);
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match!');
        } else {
            try {
                const res = await axios.put(`http://localhost:3000/users/update/${userId}`, {
                    password: data.password
                });
                console.log(res);
                setData({ isSubmitted: true });
                alert('Password changed successfully');
                navigate('/Myprofile');
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="password-bg">
            
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Reset your password</h4>
                    </div>
                </div>
                <div className="col passform-container">
                    <Form className="passform-wrapper" onSubmit={handleSubmit}>
                        <Form.Group controlId="password">
                            <Form.Label>Enter New Password <br />
                            </Form.Label>
                            <Form.Control type="password"
                                name='password'
                                pattern="^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}" 
                                value={data.password}
                                onChange={handleChange}
                                required />
                    <small>Password must contain atleast 1 lowercase, 1 uppercase, 1 special symbol and 1 number.</small>
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password"
                                name='confirmPassword'
                                value={data.confirmPassword}
                                onChange={handleChange}
                                required />
                        </Form.Group>
                        <Button type="submit" variant="dark" className="mt-2">Reset Password</Button>
                    </Form>
                </div>
        </div>
    )
}