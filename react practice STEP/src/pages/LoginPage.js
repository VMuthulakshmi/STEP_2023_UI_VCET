import LoginForm from "../components/LoginForm";
import "../styles/loginPageStyless.css";

const LoginPage = () => {
    return <div class="main-container login-page">
        <div class="login-background">
        </div>
        <div class="login-form">
            <LoginForm />
        </div>
    </div>
}

export default LoginPage;