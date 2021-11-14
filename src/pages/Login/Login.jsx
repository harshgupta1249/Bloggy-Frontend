import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./Login.css";


const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching, user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        console.log(isFetching);
        try {
            const res = await axios.post("http://localhost:8000/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }

        console.log(user);
        
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" type="text" required placeholder="Enter your username..." ref={userRef} />
                <label>Password</label>
                <input className="loginInput" type="password" required placeholder="Enter your password..." ref={passwordRef} />
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">REGISTER</Link>
            </button>
        </div>
    );
}

export default Login;