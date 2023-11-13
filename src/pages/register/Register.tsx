import RegisterForm from "../../components/authForm/RegisterForm";
import AuthWrapper from "../../components/authWrapper/AuthWrapper";



const Register = () => {

    return (
      <>
        <div className = "grid md:grid-cols-2">
          <AuthWrapper/>
          <RegisterForm/>
        </div>
      </>
    )
}

export default Register;