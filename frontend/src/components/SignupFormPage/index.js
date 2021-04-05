// frontend/src/components/SignupFormPage/index.js
import React, { useState, useEffect } from "react";
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
	input,
	label,
	inputValue,
	labelValue
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
	const [passwordClass, setPasswordClass] = useState(input);
	const [passwordLabel, setPasswordLabel] = useState(label);
	const [confirmClass, setConfirmClass ] = useState(input);
	const [confirmLabel, setConfirmLabel] = useState(label);
	const [firstClass, setFirstClass ] = useState(input);
	const [firstLabel, setFirstLabel] = useState(label);
	const [emailClass, setEmailClass ] = useState(input);
	const [emailLabel, setEmailLabel] = useState(label);
	const [lastClass, setLastClass ] = useState(input);
	const [lastLabel, setLastLabel] = useState(label);

	useEffect(()=> {
		const newClass = `${input} ${inputValue}`;
		const newLabel = `${label} ${labelValue}`;
		if(email === ""){
			setEmailClass(input);
			setEmailLabel(label);
		} else {
			setEmailClass(newClass);
			setEmailLabel(newLabel);
		}

		if(password === "") {
			setPasswordClass(input);
			setPasswordLabel(label);
		} else {
			setPasswordClass(newClass);
			setPasswordLabel(newLabel);
		}

		if(firstName === "") {
			setFirstClass(input);
			setFirstLabel(label);
		} else {
			setFirstClass(newClass);
			setFirstLabel(newLabel);
		}

		if(lastName === "") {
			setLastClass(input);
			setLastLabel(label);
		} else {
			setLastClass(newClass);
			setLastLabel(newLabel);
		}

		if(confirmPassword === "") {
			setConfirmClass(input);
			setConfirmLabel(label);
		} else {
			setConfirmClass(newClass);
			setConfirmLabel(newLabel);
		}

	}, [email, password, firstName, lastName, confirmPassword])

  if (sessionUser) return <Redirect to="/photos" />;

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
							className={emailClass}
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label className={emailLabel} htmlFor='email'>Email adress</label>
					</div>
					<div className={inputContainer}>
						<input
							type="text"
							id='firstName'
							className={firstClass}
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<label className={firstLabel} htmlFor='firstName'>First Name</label>
					</div>
					<div className={inputContainer}>
						<input
							type="text"
							id='lastName'
							className={lastClass}
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
						<label className={lastLabel} htmlFor='lastName'>Last Name</label>
					</div>
					<div className={inputContainer}>
						<input
							type="password"
							id='password'
							className={passwordClass}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<label className={passwordLabel} htmlFor='password'>Password</label>
					</div>
					<div className={inputContainer}>
						<input
							type="password"
							id='confirmPassword'
							className={confirmClass}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<label className={confirmLabel} htmlFor='confirmPassword'>Confirm Password</label>
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
