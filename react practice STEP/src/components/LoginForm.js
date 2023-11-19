import { useState } from "react";
import logo from "../resources/images/logo.png";
import "../styles/loginFormStyles.css";
import TextInputV2 from "./TextInputV2";

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (<div className="login-form-wrapper">
        <div className="app-logo">
            <img src={logo} alt="app logo" />
        </div>
        <h1>Sign In</h1>
        <div className="form-field">
            <TextInputV2 type="text" className="username" placeholder="username" value={username} onChange={(value) => setUsername(value)} />
        </div>
        <div className="form-field">
        <TextInputV2 type="password" className="password" placeholder="password" value={password} onChange={(value) => setPassword(value)} />
        </div>
        <div className="form-field">
            <button type="submit" classname="app-button" > LOGIN </button>
        </div>
        <p className="forgot-password">Forget Password? <b><a href="">click here</a></b></p>
    </div>)
}

export default LoginForm;