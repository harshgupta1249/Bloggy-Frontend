import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" required placeholder="Enter your username..." />
                <label>Email</label>
                <input className="registerInput" type="email" required placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerInput" type="password" required placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    );
}

export default Register;