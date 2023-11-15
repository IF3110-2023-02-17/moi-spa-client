import { useEffect, useState } from "react";
import InputForm from "../utils/InputForm";
import Button from "../utils/Button";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  useEffect(() => {
    setIsEmailValid(email.length > 0);
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-4 m-4 max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register
            </h2>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <InputForm
              id="email"
              type="email"
              label="Email"
              placeholder="Masukkan email"
              value={[email, setEmail]}
              status={isEmailValid}
              errorText="Masukkan email kamu!"
            />
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <InputForm
              id="password"
              type="password"
              label="Password"
              placeholder="Masukkan password"
              value={[password, setPassword]}
              status={isPasswordValid}
              errorText="Masukkan password kamu!"
            />
          </div>

          <form className="mt-8 space-y-6">
            <div>
              <Button type="submit" label="Masuk" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
