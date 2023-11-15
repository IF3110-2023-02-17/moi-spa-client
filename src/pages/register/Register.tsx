import RegisterForm from "../../components/AuthForm/RegisterForm";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";

const Register = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <AuthWrapper />
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
