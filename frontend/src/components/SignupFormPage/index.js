// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import {
	formContainer,
	signup,
	logo,
	circles,
	red,
	blue,
	title,
	inputContainer,
	navDiv,
	navSpan,
	loginLink,
 } from './SignupForm.module.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

		const handleSubmit = (e) => {
			e.preventDefault();
			if (password === confirmPassword) {
				setErrors([]);
				return dispatch(sessionActions.signup({ email, firstName, lastName, password }))
					.catch(async (res) => {
						const data = await res.json();
						if (data && data.errors) setErrors(data.errors);
					});
			}
			return setErrors(['Confirm Password field must be the same as the Password field']);
		};

		return (
			<div className={formContainer}>
				<div className={logo}>
					<div className={circles}>
        		<div className={blue}></div>
        		<div className={red}></div>
					</div>
					<h6 className={title}>Sign Up for tickr</h6>
				</div>
				<form className={signup} onSubmit={handleSubmit}>
					<ul>
						{errors.map((error, idx) => <li key={idx}>{error}</li>)}
					</ul>
					<div className={inputContainer}>
						<input
							type="text"
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label htmlFor='email'>Email adress</label>
					</div>
					<div className={inputContainer}>
						<input
							type="text"
							id='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<label htmlFor='firstName'>First Name</label>
					</div>
					<div className={inputContainer}>
						<input
							type="text"
							id='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
						<label htmlFor='lastName'>Last Name</label>
					</div>
					<div className={inputContainer}>
						<input
							type="password"
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<label htmlFor='password'>Password</label>
					</div>
					<div className={inputContainer}>
						<input
							type="password"
							id='confirmPassword'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<label htmlFor='confirmPassword'>Confirm Password</label>
					</div>
					<button type="submit">Sign Up</button>
					<div className={navDiv}>
						<span className={navSpan}>Already a tickr member?</span>
						<Link className={loginLink} to='/login'>Log in here</Link>
					</div>
				</form>
			</div>
		);
	}

	export default SignupFormPage;
