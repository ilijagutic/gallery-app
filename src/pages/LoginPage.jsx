import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginErrorMsg } from "../store/auth/selectors";
import { login, setLoginErrorMsg } from "../store/auth/slice";
function Login() {
    const dispatch = useDispatch();
    const error = useSelector(selectLoginErrorMsg);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;


    const onChangeHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }
    return (
        <>
        <h1>Login</h1>
            <div className='containter p-5 text-center'>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <input
                            className='form-control'
                            type="text"
                            name="email"
                            id="email"
                            placeholder='Unesite email'
                            value={email}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className='form-control'
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Unesite sifru'
                            value={password}
                            onChange={onChangeHandler}
                        />
                    </div>
                    {error && <div className='text-danger m-3'>{error}</div>}
                    <div className="form-group">
                        <button type="submit" className='btn btn-primary'>Potvrdi</button>
                    </div>
                </form>
            </div>
        </>

    );
}

export default Login;