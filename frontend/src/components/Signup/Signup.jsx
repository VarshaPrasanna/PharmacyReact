import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
        gender: "",
        username:"",
		email: "",
		password: "",
        isAdmin:false
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const ConfirmPassword = ({ currentTarget: input })=>{

       if(data.password !== input.value){
		window.alert("confirm password should match with password");

	   }
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/auth/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name (Only Alphabets Allowed)"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							pattern = "[a-zA-Z]+"
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name (Only Alphabets Allowed)"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							pattern = "[a-zA-Z]+"
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email (Enter A Valid Email Address)"
							name="email"
							onChange={handleChange}
							value={data.email}
							pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="username (Must be Combination of Alphabets and No.)"
							name="username"
							onChange={handleChange}
							value={data.username}
							pattern= "[A-Za-z]+[0-9]+"
							required
							className={styles.input}
						/>
						<div className='row' >
                        <input
							type="radio"
							name="gender"
							onChange={handleChange}
							value="Male"							
						/>Male
						<input
							type="radio"
							name="gender"
							onChange={handleChange}
							value="Female"
						/>Female
						</div>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
							className={styles.input}
						/>

						<input
							type="password"
							placeholder="Confirm Password"
							name="confirm password"
							onBlur={ConfirmPassword}
							// value={data.password}
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;