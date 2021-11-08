import './Register.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="register" onSubmit={handleSubmit}>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" required placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input className="registerInput" type="email" required placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="registerInput" type="password" required placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">LOGIN</Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    );
}

export default Register;