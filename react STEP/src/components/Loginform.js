import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../resources/images/logo.png";
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import '../styles/loginformStyles.css';


const Loginform = () => {

    let [username, setUsername] = useState("shuvethram");
    let [password, setPassword] = useState();

    const navigate = useNavigate();

    return (<div className="login-form-container">
        <div className='app-logo'>
            <img src={logo} alt="foodie-app" />
        </div>
        <h1>Sign In</h1>
        <p>{username}</p>
        <TextInput 
        name="username" 
        type="text" 
        placeholder="username" 
        value={username} 
        onChangeHandler={setUsername}
        />
        <TextInput 
        name="password" 
        type="password" 
        placeholder="password" 
        value={password} 
        onChangeHandler={setPassword}
        />
        <Button name="Add" type="submit"
            onClickHandler={() => navigate('restaurantList')} />
        <p className='forgot-password'>Forgot Password? <a href='/resturantList'><b>click here</b></a></p>
    </div>)
}

export default Loginform;