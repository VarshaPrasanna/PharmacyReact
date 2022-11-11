import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");
	const [Valerror, setValerror] = useState({});
	const [isSubmit,setisSubmit]=useState(false)
    const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setValerror(validate(data))
		setisSubmit(true)
		try {
			const url = "http://localhost:3000/auth/login";
			const { data: res } = await axios.post(url, data);
			//localStorage.setItem("token", res.data);
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('userId', res._id)
            localStorage.setItem('userName', res.firstName + '  ' + res.lastName)
            localStorage.setItem('isAdmin', res.isAdmin)
			
            if (res.isAdmin) {
                navigate('/admin');
                localStorage.setItem('role', 'admin')
      
              }
              else {
                navigate('/');
				window.location.reload()
                localStorage.setItem('role', 'user')
              }
			  
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
	const validate=(values)=>{
		const errors={};
		
		// const pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{5,}/
		// const userVal=/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
	
		if(!values.username){
			errors.username="Username is required "
		}
		if(!values.password){
			errors.password="Password is required "
		}
		

		return errors;


	}


	return (
		<div>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="text"
							placeholder="Username"
							name="username"
							onChange={handleChange}
							value={data.username}
							
							className={styles.input}
						/>
						{Valerror.username && <span className={styles.error_msg}>{Valerror.username}</span>}
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							
							className={styles.input}
						/>
						{Valerror.password && <span className={styles.error_msg}>{Valerror.password}</span>}
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							LOGIN
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							SIGN UP
						</button>
					</Link>
				</div>
			</div>
		</div>
		
		</div>
	);
};

export default Login;