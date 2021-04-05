// frontend/src/components/LoginFormPage/index.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
	form,
	formContainer,
	logo,
	circles,
	blue,
	red,
	title,
	navDiv,
	navSpan,
	loginLink,
	inputContainer,
	inputValue,
	labelValue,
	input,
	label
} from './LoginForm.module.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
		const [credentialClass, setCredentialClass ] = useState(input);
		const [credentialLabel, setCredentialLabel] = useState(label);
		const [passwordClass, setPasswordClass] = useState(input);
		const [passwordLabel, setPasswordLabel] = useState(label);

		let labelClass = '';

		useEffect(()=> {
			const newClass = `${input} ${inputValue}`;
			const newLabel = `${label} ${labelValue}`;
			if(credential === ""){
				setCredentialClass(input);
				setCredentialLabel(label);
			} else {
				setCredentialClass(newClass);
				setCredentialLabel(newLabel);
			}

			if(password === "") {
				setPasswordClass(input);
				setPasswordLabel(label);
			} else {
				setPasswordClass(newClass);
				setPasswordLabel(newLabel);
			}
		}, [credential, password])

    if (sessionUser) return (
        <Redirect to='/photos' />
    );

		const handleSubmit = (e) => {
			e.preventDefault();
			setErrors([]);
			return dispatch(sessionActions.login({ credential, password }))
				.catch(async (res) => {
					const data = await res.json();
					if (data && data.errors) setErrors(data.errors);
				});
		}

		return (
			<div className={formContainer}>
				<div className={logo}>
					<div className={circles}>
						<div className={blue}></div>
						<div className={red}></div>
					</div>
					<h6 className={title}>Log in to tickr</h6>
				</div>
				<form className={form} onSubmit={handleSubmit}ll>
					<ul>
						{errors.map((error, idx) => <li key={idx}>{error}</li>)}
					</ul>
					<div className={inputContainer}>
						<input
							className={credentialClass}
							type="text"
							id='email'
							value={credential}
							onChange={(e) => setCredential(e.target.value)}
							required
						/>
						<label className={credentialLabel} htmlFor='email'>Email</label>
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
					<button type="submit">Log In</button>
					<div className={navDiv}>
						<span className={navSpan}>Not a tickr member?</span>
						<Link className={loginLink} to='/signup'>Sign up here</Link>
					</div>
				</form>
			</div>
		);
	}

export default LoginFormPage;
