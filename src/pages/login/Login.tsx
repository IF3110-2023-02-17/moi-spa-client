
import AuthWrapper from "../../components/authWrapper/AuthWrapper";
import LoginForm from "../../components/authForm/LoginForm";

const Login = () => {

    return (
      <>
      <div className = "grid md:grid-cols-2">
      <AuthWrapper/>
      <LoginForm/>
      </div>
      
        
      </>
    )
}

export default Login;