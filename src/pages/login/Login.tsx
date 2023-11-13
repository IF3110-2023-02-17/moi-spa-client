
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import LoginForm from "../../components/AuthForm/LoginForm";

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